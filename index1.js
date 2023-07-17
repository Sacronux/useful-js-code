// import { App } from "./index.js"
import { App } from "./index.js"

export class Test extends App {
    constructor (props) {
        super(props)
    }
  
    test () {
      console.log(this.url)
    }
  }