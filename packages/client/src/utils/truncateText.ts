const truncateText = (text: string, maxLength: number = 100): string => {
  const lastIndex = text.lastIndexOf(' ', maxLength);

  if (text.length < maxLength) {
    return text;
  }

  return `${text.substring(0, lastIndex)}...`;
};

export default truncateText;
