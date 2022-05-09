import axios from "axios";

export async function getImdbMovieData(movieId) {
  const options = {
    method: "GET",
    url: "https://movie-details1.p.rapidapi.com/imdb_api/movie",
    params: { id: movieId },
    headers: {
      "X-RapidAPI-Host": "movie-details1.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (error) {
    console.error(error);
  }
}
