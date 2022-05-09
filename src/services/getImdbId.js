import axios from "axios";

export async function getImdbId(genre, year) {
  const randomPage = Math.floor(Math.random() * (500 - 1) + 1);

  const options = {
    method: "GET",
    url: "https://data-imdb1.p.rapidapi.com/titles",
    params: {
      info: "mini_info",
      limit: "1",
      page: randomPage,
      titleType: "movie",
      genre,
      year,
    },
    headers: {
      "X-RapidAPI-Host": "data-imdb1.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
    },
  };

  try {
    const { data } = await axios.request(options);
    return data.results[0].id;
  } catch (error) {
    console.error(error);
  }
}
