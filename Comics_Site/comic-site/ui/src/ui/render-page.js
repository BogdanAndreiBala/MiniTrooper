const COMIC_TITLE = document.getElementById('comicTitle');
const COMIC_IMAGE = document.getElementById('comicImage');
const PERM_LINK = document.getElementById('permLink');
const IMG_LINK = document.getElementById('imgLink');

export function updateUi(state) {
  if (state.error) {
    COMIC_TITLE.textContent = 'Error loading the comic...';
    COMIC_IMAGE.src = '';
    COMIC_IMAGE.alt = state.error;
    PERM_LINK.href = '#';
    PERM_LINK.textContent = '';
    IMG_LINK.href = '#';
    IMG_LINK.textContent = '';
    alert(state.error);
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
