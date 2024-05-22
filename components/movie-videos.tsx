import { defaultMaxListeners } from "events";
import { API_URL } from "../app/(home)/page";

const getVideos = async (id: string) => {
  const json = await (await fetch(`${API_URL}/${id}/videos`)).json();
  return json;
};

const MovieVideos = async ({ id }: { id: string }) => {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
};

export default MovieVideos;
