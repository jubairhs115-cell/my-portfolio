import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs, projectsData } from "@/data/projects";
import ProjectDetails from "@/components/ProjectDetails";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
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

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <ProjectDetails project={project} />
      </main>
      <Footer />
    </>
  );
}

