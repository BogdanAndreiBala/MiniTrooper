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

function updateNavigationButtons() {
  const { prev, next, total } = getState() || {};
  const isFirst = !prev || prev <= 0;
  const isLast = !next || next <= 0;
  const isOnlyOne = !total || total <= 1;

  FIRST_COMIC_BUTTONS.forEach((b) => (b.disabled = isFirst));
  PREV_COMIC_BUTTONS.forEach((b) => (b.disabled = isFirst));
  LAST_COMIC_BUTTONS.forEach((b) => (b.disabled = isLast));
  NEXT_COMIC_BUTTONS.forEach((b) => (b.disabled = isLast));
  RANDOM_COMIC_BUTTONS.forEach((b) => (b.disabled = isOnlyOne));
}

export function navigationEventListeners() {
  FIRST_COMIC_BUTTONS.forEach((button) => {
    button.addEventListener('click', async () => {
      await loadComic(null, FIRST);
      updateNavigationButtons();
    });
  });

  LAST_COMIC_BUTTONS.forEach((button) => {
    button.addEventListener('click', async () => {
      await loadComic(null, LATEST);
      updateNavigationButtons();
    });
  });

  NEXT_COMIC_BUTTONS.forEach((button) => {
    button.addEventListener('click', async () => {
      const next = getState().next;
      await loadComic(next, null);
      updateNavigationButtons();
    });
  });

  PREV_COMIC_BUTTONS.forEach((button) => {
    button.addEventListener('click', async () => {
      const prev = getState().prev;
      await loadComic(prev, null);
      updateNavigationButtons();
    });
  });

  RANDOM_COMIC_BUTTONS.forEach((button) => {
    button.addEventListener('click', async () => {
      const total = getState().total;
      const randomIndex = Math.floor(Math.random() * total) + 1;
      await loadComic(randomIndex, null);
      updateNavigationButtons();
    });
  });
}
