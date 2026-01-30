const COMIC_TITLE = document.getElementById('comicTitle');
const COMIC_IMAGE = document.getElementById('comicImage');
const PERM_LINK = document.getElementById('permLink');
const IMG_LINK = document.getElementById('imgLink');

const ERROR_TOAST = document.getElementById('errorToast');
const ERROR_MSG = document.getElementById('errorMessage');
const ERROR_ICON = document.getElementById('errorIcon');
const CLOSE_BTN = document.getElementById('closeToast');

const TIMEOUT_DURATION = 4000;
let toastTimeout;

if (CLOSE_BTN) {
  CLOSE_BTN.addEventListener('click', () => {
    ERROR_TOAST.classList.add('hidden');
  });
}

function getErrorDetails(error) {
  const errString = error.toString();
  if (errString.includes('404')) {
    return {
      msg: "We couldn't find that comic. It might have escaped the matrix! 🔍",
      icon: 'bi-search',
    };
  }
  if (errString.includes('500')) {
    return {
      msg: 'Our server is having a bad day. Please try again later. 🛠️',
      icon: 'bi-hdd-network',
    };
  }
  if (errString.includes('Failed to fetch') || errString.includes('Network')) {
    return {
      msg: 'Connection lost. Please check your internet. 📡',
      icon: 'bi-wifi-off',
    };
  }
  return {
    msg: 'Oops! Something unexpected happened.',
    icon: 'bi-exclamation-triangle-fill',
  };
}

export function updateUi(state) {
  if (state.error) {
    const { msg, icon } = getErrorDetails(state.error);
    if (ERROR_MSG) {
      ERROR_MSG.textContent = msg;
    }
    if (ERROR_ICON) {
      ERROR_ICON.className = `bi ${icon}`;
    }
    if (ERROR_TOAST) {
      if (toastTimeout) {
        clearTimeout(toastTimeout);
      }

      ERROR_TOAST.style.display = 'flex';
      ERROR_TOAST.classList.remove('hidden');

      toastTimeout = setTimeout(() => {
        ERROR_TOAST.classList.add('hidden');
      }, TIMEOUT_DURATION);
    }

    COMIC_TITLE.textContent = '...';
    COMIC_IMAGE.src = '';
    COMIC_IMAGE.alt = 'Error loading comic';
    PERM_LINK.textContent = '';
    IMG_LINK.textContent = '';

    return;
  }

  const comic = state.comic;

  COMIC_TITLE.textContent = comic.title;
  COMIC_IMAGE.src = comic.imgUrl;
  COMIC_IMAGE.alt = comic.alt;

  IMG_LINK.href = comic.imgUrl;
  IMG_LINK.textContent = comic.imgUrl;

  PERM_LINK.href = '';
  PERM_LINK.textContent = '';
}
