// 1 START


// setTimeout(() => {
//   console.log('setTimeout 1');
//   Promise.resolve().then(() => {
//     console.log('promise 1');
//   });
// }, 0);

// new Promise(function (resolve, reject) {
//   console.log('promise 2');
//   setTimeout(function () {
//     console.log('setTimeout 2');
//     resolve('resolve 1');
//   }, 0);
// }).then((res) => {
//   console.log('dot then 1');
//   setTimeout(() => {
//     console.log(res);
//   }, 0);
// });

// console.log('begins');


// 1 END

// 2 START

// setTimeout(() => {
//     Promise.resolve().then(() => {
//       console.log('promise 1');
//     });
//     console.log('setTimeout 1');

// }, 0);

// setTimeout(() => {
//     Promise.resolve().then(() => {
//       console.log('promise 2');
//     });
//     console.log('setTimeout 2');
// }, 0);

// setTimeout(() => {
//     Promise.resolve().then(() => {
//       console.log('promise 3');
//     });
//     console.log('setTimeout 3');
// }, 0);
// Promise.resolve()
//   .then(function () {
//     console.log(3);
//   })
//   .then(function () {
//     console.log(4);
//   });

// END 2

// START 3

async function async1() { 
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}

async function async2() {
  console.log("async2");
}

console.log("script start");

setTimeout(function t () {
  console.log("setTimeout");
}, 0); // macro 1

async1(); // micro 1

new Promise(function p1 (resolve) { 
  console.log("promise1");
  resolve();
}).then(function p2then() {
  console.log("promise2");
});

console.log("script end");

/*
  
  // macros: setTimeout t, 
  // micros: 
  // call stack: script end

  // output: 

  **/

// END 3

// START 4
// const start = () => console.log("script start");
// const promise1 = () => console.log("promise1");
// const promise2 = () => console.log("promise2");
// const scriptEnd = () => console.log("script end");
// const scriptEndTimer = () => console.log("script endtimer");



// // setTimeout(() => {
//     start()
// // })

// new Promise(function (resolve) {
//     promise1();
//   resolve();
// })
//   .then(function () {
//     promise2();
//   })
//   .then(function () {
//     promise2();

//   })
//   .then(function () {
//     promise2();

//   })
//   .then(function () {
//     promise2();

//   })
//   .then(function () {
//     promise2();

//   })
//   .then(function () {
//     promise2();

//   });

// // setTimeout(() => {
//     scriptEnd()
// // })

// setTimeout(() => {
//     scriptEndTimer();
// })

