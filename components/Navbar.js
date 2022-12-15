import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-700">
      <div className="font-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-mono">
        <Link href="/" className="text-base md:text-2xl">
          Next
          <span className="text-amber-500">Movie</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
