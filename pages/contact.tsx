import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p>Email us at <a href="mailto:info@childcareafrica.org" className="text-blue-600 underline">info@childcareafrica.org</a></p>
      </main>
      <Footer />
    </div>
  );
}