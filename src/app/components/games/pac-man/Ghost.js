// // create our Ghost template
export default class Ghost{
    constructor(className, startIndex, speed) {
        this.className = className
        this.startIndex = startIndex
        this.speed = speed
        this.currentIndex = startIndex
        this.timeId = NaN
        this.isScared = false
    }
}