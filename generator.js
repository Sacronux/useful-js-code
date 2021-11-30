function* myGenerator() {
  const name = 'Yevgeniy';

  const who = yield name;

  console.log(who)
}
const myiterator = myGenerator()
console.dir(myiterator.next())

console.log(myiterator.next('Bubel'))
