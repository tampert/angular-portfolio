import { Component, OnInit } from '@angular/core';
import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from  './grid.js'

@Component({
  selector: 'app-snake',
  templateUrl: './snake.component.html',
  styleUrls: ['./snake.component.css']
})
export class SnakeComponent implements OnInit {
  lastRenderTime:number = 0;
  gameOver:boolean = false;
  gameBoard:any

  constructor() { 
  }

  ngOnInit(): void {
    this.gameBoard = document.getElementById('game-board')
    window.requestAnimationFrame(() => {this.main(0)})
  }

  main(currentTime):void{
    if (this.gameOver){
        if(confirm('You lost, Press ok to restart.')){
            window.location.href ='/coding/snake'
            console.log('relocate')
        }
        return
    }
      // window.requestAnimationFrame(() => {this.main()})
      // added +25 this is just a random guess
      window.requestAnimationFrame(() => {this.main(currentTime+25)})
      const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000
      // CALCULATE IF WE REALLY NEED TO MOVE
      if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
      
      this.lastRenderTime = currentTime;

      this.update()
      this.draw()
  }

  update() {
    updateSnake()
    updateFood()
    this.checkDeath()
  }

  draw() {
      this.gameBoard.innerHTML = ''
      drawSnake(this.gameBoard)
      drawFood(this.gameBoard) 
  }

  checkDeath() {
      this.gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
  }

}
