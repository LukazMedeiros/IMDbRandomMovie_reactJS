import axios from "axios";

export async function getGenres() {
  const options = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/utils/genres",
    headers: {
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    },
  };

  const { data } = await axios.request(options);

  return data.results;
}
