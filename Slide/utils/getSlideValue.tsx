export function getSlideValue(actualLength: number, maxSlides: number) {
  if (actualLength >= 0) {
    if (actualLength >= maxSlides) {
      return actualLength % maxSlides;
    }
    return actualLength;
  }

  if (-actualLength > maxSlides) {
    actualLength = -actualLength % maxSlides;
    if (actualLength == 0) return 0;
    return maxSlides - actualLength;
  }
  return maxSlides + actualLength;
}
