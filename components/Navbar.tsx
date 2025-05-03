import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">Child Care Africa</h1>
      <nav className="space-x-4">
        <Link href="/"><button>Home</button></Link>
        <Link href="/about"><button>About Us</button></Link>
        <Link href="/projects"><button>Projects</button></Link>
        <Link href="/contact"><button>Contact</button></Link>
      </nav>
    </header>
  );
}