import { loadComic } from '../controller/comic-controller';
import { getState } from '../state/state';

const FIRST_COMIC_BUTTONS = document.querySelectorAll(
  '#firstButton, #firstButtonBottom'
);
const PREV_COMIC_BUTTONS = document.querySelectorAll(
  '#prevButton, #prevButtonBottom'
);
const RANDOM_COMIC_BUTTONS = document.querySelectorAll(
  '#randomButton, #randomButtonBottom'
);
const NEXT_COMIC_BUTTONS = document.querySelectorAll(
  '#nextButton, #nextButtonBottom'
);
const LAST_COMIC_BUTTONS = document.querySelectorAll(
  '#lastButton, #lastButtonBottom'
);

const FIRST = 'first';
const LATEST = 'latest';

export function navigationEventListeners() {
  FIRST_COMIC_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => loadComic(null, FIRST));
  });

  LAST_COMIC_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
      loadComic(null, LATEST);
    });
  });

  NEXT_COMIC_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
      const next = getState().next;
      loadComic(next, null);
    });
  });

  PREV_COMIC_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
      const prev = getState().prev;
      loadComic(prev, null);
    });
  });

  RANDOM_COMIC_BUTTONS.forEach((button) => {
    button.addEventListener('click', () => {
      const total = getState().total;
      const randomIndex = Math.floor(Math.random() * total) + 1;
      loadComic(randomIndex, null);
    });
  });
}
