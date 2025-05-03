import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow space-y-10 p-6">
        <section className="text-center bg-blue-50 p-10 rounded-2xl shadow-md">
          <h2 className="text-4xl font-bold mb-4">Child Care Africa</h2>
          <p className="text-lg mb-6">Empowering African children through relief, care, and education.</p>
          <div className="space-x-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Donate Now</button>
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Work in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded shadow p-4 bg-white">
                <img src={`https://via.placeholder.com/300x200?text=Work+${item}`} alt="Showcase" className="rounded mb-3" />
                <p>Relief distribution in Nigeria (2024)</p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Current Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard title="Build a School in Kenya" description="Help us construct a fully equipped school for 500 children." goal={10000} raised={3500} />
            <ProjectCard title="Food Packs for Malawi" description="Providing essential food supplies to 1000 families." goal={5000} raised={2000} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}