const BASE_URL = 'http://localhost:3000';
//const BASE_URL = 'http://localhost:3000/crapa';

async function fetchComic(url) {
  try {
    // const fakeError = new Error('Fake Server Crash 500');
    // fakeError.status = 500;
    // throw fakeError;

    const response = await fetch(url);

    if (!response.ok) {
      let errorMessage = `API Error: ${response.status}`;

      const error = new Error(errorMessage);
      error.status = response.status;
      throw error;
    }

    const data = await response.json();
    const returnData = {
      data: data,
      error: null,
    };

    return returnData;
  } catch (error) {
    const returnData = {
      data: null,
      error: error,
    };
    return returnData;
  }
}

export async function fetchComicByIndex(index) {
  const cacheKey = `comic_${index}`;
  const cacheData = sessionStorage.getItem(cacheKey);
  if (cacheData) {
    localStorage.setItem('lastViewedComic', cacheData);
    return {
      data: JSON.parse(cacheData),
      error: null,
    };
  }

  const result = await fetchComic(`${BASE_URL}/comics/${index}`);

  if (!result.error && result.data) {
    const jsonString = JSON.stringify(result.data);
    sessionStorage.setItem(cacheKey, jsonString);
    localStorage.setItem('lastViewedComic', jsonString);
  }
  return result;
}

export async function fetchComicByPosition(position) {
  return fetchComic(`${BASE_URL}/comics?position=${position}`);
}
