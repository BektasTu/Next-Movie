import axios from "axios";
import Hero from "../components/Hero";
import { server } from "../config";

export default function Home({ movies }) {
  return (
    <div>
      <Hero />
    </div>
  );
}

export async function getStaticProps() {
  const res = await axios(
    `${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  );
  const movies = res.data;

  return {
    props: { movies },
  };
}
