import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Our Projects</h1>
        <ProjectCard title="Clean Water for Uganda" description="Install 10 clean water wells for rural villages." goal={8000} raised={4200} />
      </main>
      <Footer />
    </div>
  );
}