import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p>This is our privacy policy. We respect your data and only use it to improve your experience and communicate important updates.</p>
      </main>
      <Footer />
    </div>
  );
}