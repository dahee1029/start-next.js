import { API_URL } from "../app/(home)/page";

const getMovie = async (id: string) => {
  const json = await (await fetch(`${API_URL}/${id}`)).json();
  return json;
};

const MovieInfo = async ({ id }: { id: string }) => {
  const movie = await getMovie(id);
  return (
    <div>
      <h1>{movie.title}</h1>
    </div>
  );
};

export default MovieInfo;
