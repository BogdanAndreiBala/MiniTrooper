import './styles/main.css';
import './styles/variables.css';

import { subscribe } from './state/state';
import { updateUi } from './ui/render-page.js';
import { navigationEventListeners } from './navigation/buttons-navigation.js';
import { loadComic } from './controller/comic-controller.js';

subscribe(updateUi);
navigationEventListeners();
loadComic(null, 'random');
