import axios from 'axios';

const API_BASE_URL = 'https://imdb.iamidiotareyoutoo.com';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchMovies = async (query) => {
  try {
    const response = await api.get(`/search?q=${query}`);
    return response.data.description;
  } catch (error) {
    console.error(`Error fetching movies for query "${query}":`, error);
    return [];
  }
};

export const requests = {
  fetchTrending: 'avengers',
  fetchNetflixOriginals: 'series',
  fetchTopRated: 'godfather',
  fetchActionMovies: 'mission impossible',
  fetchComedyMovies: 'hangover',
  fetchHorrorMovies: 'saw',
  fetchRomanceMovies: 'notebook',
  fetchDocumentaries: 'planet earth',
};

export default api;
