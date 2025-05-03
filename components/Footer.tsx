export default function Footer() {
  return (
    <footer className="bg-gray-100 p-6 text-center text-sm text-gray-600">
      <p>© 2025 Child Care Africa. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="/privacy" className="hover:underline">Privacy Policy</a>
        <a href="/terms" className="hover:underline">Terms of Service</a>
      </div>
    </footer>
  );
}