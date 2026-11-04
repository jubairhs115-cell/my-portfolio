
import { Suspense } from "react";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getAllProjectSlugs,
} from "@/data/projects";

import ProjectDetails from "@/components/ProjectDetails";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | Jubair Hossain",
      description: "The requested project details page could not be found.",
    };
  }

  return {
    title: `${project.title} | Jubair Hossain Portfolio`,
    description: project.tagline,
  };
}

async function ProjectContent({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetails project={project} />;
}

export default function ProjectPage({ params }) {
  return (
    <>
      <Navbar />

      <main>
        <Suspense fallback={<div>Loading project...</div>}>
          <ProjectContent params={params} />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
