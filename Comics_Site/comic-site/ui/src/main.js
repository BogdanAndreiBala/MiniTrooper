import './styles/main.css';
import './styles/variables.css';
import './styles/buttons.css';
import './styles/error-toast.css';

import { subscribe } from './state/state';
import { updateUi } from './ui/render-page.js';
import { navigationEventListeners } from './navigation/buttons-navigation.js';
import { loadComic } from './controller/comic-controller.js';

subscribe(updateUi);
navigationEventListeners();

const lastViewedComic = localStorage.getItem('lastViewedComic');
if (lastViewedComic) {
  const { comic } = JSON.parse(lastViewedComic);
  const index = comic.index;
  loadComic(index);
} else {
  loadComic(null, 'random');
}

//loadComic(999999, null);
