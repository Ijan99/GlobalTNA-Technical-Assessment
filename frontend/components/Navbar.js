import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-b p-4 flex justify-between items-center">
      
      {/* Left side - Logo / Title */}
      <Link href="/" className="font-bold text-lg">
        Service Board
      </Link>

      {/* Right side - Button */}
      <Link
        href="/new"
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        + New Request
      </Link>

    </div>
  );
}