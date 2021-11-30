const symbol = Symbol('logs')

const object = {
  a: 'boba',
  b: 'ababuy'
}

object[symbol] = JSON.stringify({
  name: 'Yevgeniy',
  lastName: 'Aleksieiev'
})

console.log(Object.getOwnPropertyNames(object)) // [ 'a', 'b' ]
console.log(object['logs']) // undefined
console.log(object[symbol]) // {"name":"Yevgeniy","lastName":"Aleksieiev"}
