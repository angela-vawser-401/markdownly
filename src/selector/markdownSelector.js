export const getActiveIndex = state => state.editor.active;
export const getMarkdownArray = state => state.editor.list;

export const getActiveMarkdown = state => {
  return getMarkdownArray(state)[getActiveIndex(state)];
};
