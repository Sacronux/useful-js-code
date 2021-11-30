////// constuctor

class area {
  constructor(width, height) {
    this.getArea = () => width * height
  }

  get area() {
    return this.getArea()
  }
}

////// closure

const Hidden = (() => {
  const hidden = new WeakMap()

  return class area {
    constructor(width, height) {
      hidden.set(this, { width, height })
    }
    get area() {
      const {width, height} = hidden.get(this)

      return width * height
    }
  }
})()

const a1 = new Hidden(2, 3)