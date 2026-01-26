let state = {
  comic: null,
  prev: null,
  next: null,
  total: 0,
  error: null,
};

const listeners = [];

export function setState(apiResponse) {
  if (!apiResponse || !apiResponse.data.comic) {
    return;
  }

  state = {
    error: null,
    comic: apiResponse.data.comic,
    prev: apiResponse.data.prev,
    next: apiResponse.data.next,
    total: apiResponse.data.total,
  };

  notifyListeners();
}

export function getState() {
  return { ...state };
}

export function setError(error) {
  if (!error) {
    return;
  }

  state.error = error;
  state.comic = null;
  state.prev = null;
  state.next = null;

  notifyListeners();
}

export function subscribe(callback) {
  listeners.push(callback);
}

export function notifyListeners() {
  listeners.forEach((callback) => callback({ ...state }));
}
