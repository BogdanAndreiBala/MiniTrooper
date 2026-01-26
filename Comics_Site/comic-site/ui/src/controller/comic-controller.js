import { fetchComicByIndex, fetchComicByPosition } from '../service/comic-api';
import { setError, setState } from '../state/state';

export async function loadComic(index, position) {
  let result;
  if (index !== null) {
    result = await fetchComicByIndex(index);
  } else {
    result = await fetchComicByPosition(position);
  }

  if (result.error) {
    setError(result.error);
  } else {
    setState(result);
  }
}
