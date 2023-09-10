const customMediaQueryMax = (maxWidth: number): string => `@media (max-width: ${maxWidth}px)`;
const customMediaQueryMin = (minWidth: number): string => `@media (min-width: ${minWidth}px)`;

export const MEDIA = {
  custom: customMediaQueryMax,
  pc: customMediaQueryMin(768),
  tablet: customMediaQueryMax(768),
  mobile: customMediaQueryMax(576),
};
