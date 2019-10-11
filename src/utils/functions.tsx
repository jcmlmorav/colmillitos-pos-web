export const setFocus = (id: string): void => {
  setTimeout(() => {
    const input = document.getElementById(id);
    if (input) input.focus();
  }, 1000);
}
