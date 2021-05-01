const API_KEY = "79565fa54c00c9f99ff2a9463280da86";

const request = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}`,
  fetchDiscoverHindi: `discover/movie?api_key=${API_KEY}&with_original_language=hi`,
  fetchDiscoverTe: `discover/movie?api_key=${API_KEY}&with_original_language=te`,
  fetchDiscoverKn: `discover/movie?api_key=${API_KEY}&with_original_language=kn`,

};

export default request;
