// // import fs from "fs";
// // import path, { dirname } from "path";
// // import { fileURLToPath } from 'url';

// // const seq = (...args) => {
// //   if (typeof args[args.length - 1] === "number") {
// //     const res = args.reduce((acc, cur, i) => {
// //       return typeof cur !== "number" ? (acc += cur(acc)) : acc;
// //     }, args[args.length - 1]);
// //     return res;
// //   }

// //   return seq.bind(null, ...args);
// // };

// // const pipe =
// //   (...args) =>
// //   (num) =>
// //     args.reduce((acc, cur) => {
// //       if (typeof cur !== "function") {
// //         throw new Error("not a function");
// //       }
// //       acc = cur(acc);
// //       return acc;
// //     }, num);

// // // console.log(process.argv)

// // // const pipeNew = (...args) => {
// // //   return (num) => {
// // //     let result = num;
// // //     args.forEach(func => {
// // //       result = func(result)
// // //     })
// // //     return result
// // //   }
// // // }

// // // const f = pipeNew(x => x * 2, x => x + 1)
// // // console.log(f(5))

// // const arrayToObj = (keys = [], values = []) => {
// //   const res = {};
// //   let biggest = null;
// //   if (keys.length < values?.length) {
// //     biggest = values;
// //   } else {
// //     biggest = keys;
// //   }
// //   for (let i = 0; i < biggest.length; i++) {
// //     if (keys[i] && values[i]) {
// //       res[keys[i]] = values[i];
// //     } else if (keys[i]) {
// //       res[keys[i]] = keys[i];
// //     } else {
// //       res[values[i]] = values[i];
// //     }
// //   }
// //   return res;
// // };

// // // console.log(arrayToObj(['a', 'b']))
// // // console.log(fib(600))

// // const solution = (input = "", markers = []) => {
// //   const lines = input.split("\n");

// //   const processedLines = lines.map((line, i) => {
// //     let closestStringCharacter = [null, ""];

// //     markers.forEach((marker) => {
// //       if (!line.includes(marker)) {
// //         return;
// //       }

// //       const remainedLine = line.split(marker)[0];

// //       if (
// //         closestStringCharacter[0] === null ||
// //         remainedLine.length < closestStringCharacter[0]
// //       ) {
// //         closestStringCharacter[0] = remainedLine.length;
// //         closestStringCharacter[1] = marker;
// //       }
// //     });

// //     if (closestStringCharacter[0] === 0) {
// //       return null;
// //     }

// //     const isLastLine = i === lines.length - 1;

// //     const splitLine = (line) => {
// //       const splittedLine = closestStringCharacter[1].length
// //         ? line.split(closestStringCharacter[1])
// //         : line;

// //       return Array.isArray(splittedLine)
// //         ? splittedLine[0].trimEnd()
// //         : splittedLine.trimEnd();
// //     };

// //     const result = `${splitLine(line)}${isLastLine ? "" : "\n"}`;
// //     return result;
// //   });

// //   return processedLines.join("");
// // };

// // // console.log(solution("Q @b\nu\ne -e f g", ["@", "-"]))

// // // console.log('apples, plums\npears\noranges')

// // function listNestedFiles (dir, keyword, cb) {

// //   const isDir = (name) => !name.split('.')[1];

// //   let filesCount = 0,
// //       filesChecked = 0

// //   const result = []

// //   const readDir = (dirName) => {
// //     const __dirname = dirname(fileURLToPath(import.meta.url));
// //     const pathToDir = path.join(__dirname, dirName)

// //     fs.readdir(pathToDir, (err, data) => {

// //       data.map((name, i) => {
// //         if (isDir(name)) {
// //           return readDir(`${dirName}/${name}`)
// //         }

// //         filesCount += 1

// //         fs.readFile(`${dirName}/${name}`, (err, fileData) => {
// //           filesChecked += 1

// //           if (fileData?.toString().includes(keyword)) {
// //             result.push(name)
// //           }

// //           if (filesCount === filesChecked) {
// //             return cb(result)
// //           }

// //         })
// //       })
// //     })
// //   }

// //   readDir(dir)
// // }

// // // listNestedFiles('data-structures', '3', console.log)

// // const sync = () => {
// //   const i = 1 + 2
// //   return i
// // }

// // console.log(sync())
// // process.nextTick(() => console.log('next tieck'))

// // console.time('start')

// // const arr = new Array(1000).fill(1)

// // const interval = setInterval(() => {
// //   console.log('timeout 0')
// // }, 10)

// // const each = (array, fn) => {
// //   let i = 0;

// //   const last = array.length - 1

// //   const next = (i) => {
// //     if (i === last) return;

// //     // return setImmediate(() => {
// //       fn(i)
// //       next(++i)
// //     // })
// //   }

// //   next(i)
// // }

// // each(arr, (i) => {
// //   if (i === 998) {
// //     clearInterval(interval)
// //     console.timeEnd('start')
// //   }
// //   // console.log(i)
// // })

// // setImmediate(() => console.timeEnd('start'))

// const config = {

// }

// const change = async () => {
//   const res = await console.log('gf')

//   ['a'].forEach(async a => {
//       a.test()
//   })
// }

// const run = async () => {
//   try {
//     await change()

//   } catch (e) {
//     console.error(e)
//   }
// };

// run()

// const foo = () => {
//     throw new Error('pizdec')
// }

// const test = async () => {
//     try {
//         await Promise.all([foo].map(async () => {
//                 foo()
//         }))
//     } catch (error) {
//         console.log('catched')
//         console.error(error)
//     }
// }

// test()

// import { Test } from "./index1.js"

const state = {};

function fib(n) {
  if (n <= 2) {
    return n
  }
  
  if (state[n]) {
    return state[n]
  }

  state[n] = fib(n -1) + fib(n - 2)

  return state[n]
}
 

console.log(fib(8));
   
  
  console.log(fib(50));