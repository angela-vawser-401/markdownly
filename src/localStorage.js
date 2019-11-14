export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('markdownlyState');

    if(serializedState === null) {
      return undefined;
    }

    return JSON.parse(serializedState);

  } catch(err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('markdownlyState', serializedState);
  } catch(err) {
    return new Error(err);
  }
};
