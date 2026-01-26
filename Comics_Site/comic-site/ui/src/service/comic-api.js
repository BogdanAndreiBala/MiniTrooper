const BASE_URL = 'http://localhost:3000';
const NOT_FOUND_STATUS = 404;

async function fetchComic(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === NOT_FOUND_STATUS) {
        throw new Error('Comic not found(404)');
      }
      throw new Error(`API Error: ${response.status}`);
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
  return fetchComic(`${BASE_URL}/comics/${index}`);
}

export async function fetchComicByPosition(position) {
  return fetchComic(`${BASE_URL}/comics?position=${position}`);
}
