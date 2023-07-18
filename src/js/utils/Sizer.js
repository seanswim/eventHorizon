class Sizer {
  width_
  get width(){
    return this.width_
  }
  set width(width) {
    this.width_ = width
  }

  height_
  get height(){
    return this.height_
  }
  set height(height) {
    this.height_ = height
  }

  constructor() {
    this.width_ = window.innerWidth
    this.height_ = window.innerHeight

    window.addEventListener('resize', () => this.resize())
  }

  resize() {
    this.width_ = window.innerWidth
    this.height_ = window.innerHeight
  }
}

export default Sizer