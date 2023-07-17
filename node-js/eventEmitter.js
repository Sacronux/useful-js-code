import { EventEmitter } from "events";
import { readFile } from "fs";
class FindRegex extends EventEmitter {
  constructor(regex) {
    super();
    this.regex = regex;
    this.files = [];
  }
  addFile(file) {
    this.files.push(file);
    return this;
  }
  find() {
    process.nextTick(() => this.emit('find_start', this.files))
    for (const file of this.files) {
      readFile(process.cwd() + '/assets/' + file, "utf8", (err, content) => {
        if (err) {
          return this.emit("error", err);
        }
        this.emit("fileread", file);
        const match = content.match(this.regex);
        if (match) {
          match.forEach((elem) => this.emit("found", file, elem));
        }
      });
    }
    return this;
  }
}

// const findRegexInstance = new FindRegex(/hello \w+/)
// findRegexInstance
//  .addFile('fileA.txt')
//  .addFile('fileB.json')
//  .find()
//  .on('found', (file, match) => console.log(`Matched "${match}" in file 
// ${file}`))
// .on('find_start', files => console.log(files))
//  .on('error', err => console.error(`Error emitted ${err.message}`))

const ticker = (num, cb) => {
    const ee = new EventEmitter();
    let secondsPassed = 0;

    process.nextTick(() => ee.emit('tick', 'invoked'));

    const interval = setInterval(() => {
        try {
            const date = new Date();
            secondsPassed += 50;

            if (date.getTime() % 5 === 0) {
                throw new Error('kapec')
            }
            ee.emit('tick', secondsPassed);
        } catch (err) {
            return cb(err, secondsPassed, interval)
        }
        
    }, 50)

    ee.on('tick', (secs) => {
        if (secs >= num) {
            clearInterval(interval)
            setImmediate(() => cb(null, secondsPassed))
        }
    })
    return ee;
}

ticker(200, (err, sec, interval) => {
    if (err) {
        // clearInterval(interval)
        return console.error(err)
    }
    console.log(`ticker is over. seconds: ${sec}`)
}).on('tick', secs => console.log(secs))


