const PopularMovies = (movies) => {
  return (
    <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4">
      <h1 className="text-white text-2xl mt-8 mb-5">Die Populärsten Filme</h1>
      {movies.map(movie =>)}
    </div>
  );
};

export default PopularMovies;
