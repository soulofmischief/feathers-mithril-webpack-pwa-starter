// @flow strict


export function hsl( hue = 0, saturation = 0, lightness = 0 ) {
  return `hsl(${ hue % 360 }, ${ saturation }%, ${ lightness }%)`
}


export function randomColor(
  hue: number = Math.random() * 360,
  saturation: number = Math.random() * 100,
  lightness: number = Math.random() * 100,
) {
  return hsl( hue, saturation, lightness )
}
