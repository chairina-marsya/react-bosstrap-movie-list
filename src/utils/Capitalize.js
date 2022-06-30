/**
 * to capitalize each words / single word
 * @param {string} str: string
 * @param {bool} slashSplit: bool
 * @returns {string}
 */
const Capitalize = (str) => {
  let nextStr = str;
  let separateWord = nextStr.toLowerCase().split(' ');
  for (let i = 0; i < separateWord.length; i += 1) {
    separateWord[i] = separateWord[i].charAt(0).toUpperCase()
        + separateWord[i].substring(1);
    nextStr = separateWord.join(' ');
  }
  const slashSplit = str.includes('/');
  if (slashSplit) {
    separateWord = str.toLowerCase().split('/');
    for (let i = 0; i < separateWord.length; i += 1) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase()
          + separateWord[i].substring(1);
    }
    nextStr = separateWord.join('/');
  }
  return nextStr;
};

export default Capitalize;
