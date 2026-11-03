import "./globals.css";

export const metadata = {
  title: "Jubair Hossain | Aspiring Full Stack Web Developer",
  description:
    "Personal developer portfolio of Jubair Hossain, Computer Science and Engineering student at Islamic University, Bangladesh. Showcasing full-stack web applications, technical skills, and practical development experience.",
  keywords: [
    "Jubair Hossain",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "JavaScript",
    "Islamic University Bangladesh",
    "Computer Science and Engineering",
    "Portfolio",
  ],
  authors: [{ name: "Jubair Hossain" }],
  creator: "Jubair Hossain",
  openGraph: {
    title: "Jubair Hossain | Aspiring Full Stack Web Developer",
    description:
      "Personal portfolio showcasing full-stack projects, technical skills, and development journey.",
    url: "https://jubairhossain.vercel.app",
    siteName: "Jubair Hossain Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#0A0A0A",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0A0A0A] text-white min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
