import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
        <p>By using our website, you agree to the terms outlined here. We aim to operate transparently and with accountability.</p>
      </main>
      <Footer />
    </div>
  );
}