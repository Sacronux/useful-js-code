const thickness = 0.1;

const getThickness = (thickness, n, i = 0) => {
  if (n === i) {
    return `kms: ${thickness / 10 / 100 / 1000}`;
  }
  return getThickness(thickness * 2, n, ++i)
}
console.clear()
console.log(getThickness(thickness, 81))