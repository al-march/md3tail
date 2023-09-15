const delimers = new Set(['-']);

export const toCamelCase = (input: string) => {
  let i = 0;
  let needUp = false;
  const output: string[] = [];

  while (i < input.length) {
    const letter = input[i];
    if (delimers.has(letter)) {
      needUp = true;
      i++;
    } else {
      output.push(needUp ? letter.toUpperCase() : letter);
      needUp = false;
      i++;
    }
  }
  return output.join('');
}