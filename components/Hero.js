import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center bg-white pb-10">
      <div className="w-60 mx-auto">
        <Image
          src={"/home_cinema.png"}
          width={200}
          height={200}
          alt="Man watching a movie"
          responsive
        />
      </div>
      <h1 className="text-2xl text-gray-700 uppercase font-bold">Next Movie</h1>
      <p className="text-gray-500">Deine Filme Datenbank!</p>
      <Link href="/kontakt">
        <button className="bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4">
          Kontakt
        </button>
      </Link>
    </div>
  );
};

export default Hero;
