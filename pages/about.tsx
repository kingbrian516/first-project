import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p>Child Care Africa is dedicated to improving the lives of children across African nations through education, healthcare, and relief support.</p>
      </main>
      <Footer />
    </div>
  );
}