import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center p-4">

        {/* Logo / Brand */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-800 hover:text-blue-600 transition"
        >
          GlobalTNA <span className="text-blue-600">Mini Service Request Board</span>
        </Link>

        {/* Navigation Actions */}
        <div className="flex items-center gap-3">

          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-blue-600 transition"
          >
            Home
          </Link>

          <Link
            href="/new"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition shadow-sm"
          >
            + New Request
          </Link>

        </div>

      </div>
    </nav>
  );
}