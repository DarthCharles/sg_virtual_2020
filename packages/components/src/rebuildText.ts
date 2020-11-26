const rebuildText = (
  text: string,
  lowerCaseDelta: number,
  upperCaseDelta: number,
): string => {
  let resultText = '';

  // @ts-ignore
  [...text].forEach((character) => {
    // non a-z? append and return fast
    if (!character.match(/[a-z]/i)) {
      resultText += character;
      return;
    }

    let targetCharCode = character.codePointAt(0) || 0;

    if (character === character.toUpperCase()) {
      targetCharCode += upperCaseDelta;
    } else {
      targetCharCode += lowerCaseDelta;
    }

    resultText += String.fromCodePoint(targetCharCode);
  });

  return resultText;
};

export default rebuildText;
