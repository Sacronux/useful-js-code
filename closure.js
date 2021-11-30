//////// closure
const closure = () => {
  const data = {};
  let counter = 0
  return (key, value) => {
    counter++
    data[key] = value
    return {...data, counter}
  }
}

const h1 = closure()

h1('text1', 'test1')
h1('text2', 'test2')
h1('text3', 'test3')

const obj = h1('text4', 'test4')

//////// chaining

const chaining = () => {
  const data = {};

  Object.defineProperty(data, 'add', {
    enumerable: false,
    value(key, value) {
      data[key] = value
      return data
    }
  })
  return data
}

console.log(chaining().add(1, 2).add(2, 3))

///////// recursive closure

const add = x => y => add(x + y)

console.log(add(1)(2)(3)(4)(5)(6))




