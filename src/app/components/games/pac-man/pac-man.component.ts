import { Component, OnInit } from '@angular/core';
import Ghost from './ghost.js';

@Component({
  selector: 'app-pac-man',
  templateUrl: './pac-man.component.html',
  styleUrls: ['./pac-man.component.css'],
  host: {
    '(document:keyup)': 'onKeyUp($event)'
  }
})
export class PacManComponent implements OnInit {
  grid:any
  scoreDisplay:any
  width:number = 28 // 28 x 28 = 784 squares
  score:number = 0

  ghosts:Ghost[] = [
    new Ghost('blinky', 348, 250),
    new Ghost('pinky', 376, 400),
    new Ghost('inky', 351, 300),
    new Ghost('clyde', 379, 500)
  ]

  // layout of grid and what is in the squares
  layout:number[] = [
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
    1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
    1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
    1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
    1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
    1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
    1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]

  squares:any[] = []
  // 0 - pac-dots
  // 1 - wall
  // 2 - ghost-lair
  // 3 - power-pellet
  // 4 - empty

  //starting position of pac-man
  pacmanCurrentIndex:number = 490

  constructor() { }

  ngOnInit(): void {
    this.grid = document.querySelector('.grid')
    this.scoreDisplay = document.getElementById('score')
    this.createBoard()


    this.squares[this.pacmanCurrentIndex].classList.add('pac-man')
    // //draw my ghosts onto the grid
    this.ghosts.forEach(ghost => {
      this.squares[ghost.currentIndex].classList.add(ghost.className)
      this.squares[ghost.currentIndex].classList.add('ghost')
    });

    // //move All ghost randomly
    this.ghosts.forEach(ghost => this.moveGhost(ghost))
  }




  //draw the grid and render
  createBoard(){
    for(let i = 0; i < this.layout.length; i++ ){
        const square =document.createElement('div')
        this.grid.appendChild(square)
        this.squares.push(square)

        // add layout to the board
        if(this.layout[i] === 0){
            this.squares[i].classList.add('pac-dot')
        } else if (this.layout[i] === 1){
            this.squares[i].classList.add('wall')
        } else if (this.layout[i] === 2){
            this.squares[i].classList.add('ghost-lair')
        } else if (this.layout[i] === 3 ){
            this.squares[i].classList.add('power-pellet')
        }
    }
  }

  //move pac-man
  movePacman(e){
    this.squares[this.pacmanCurrentIndex].classList.remove('pac-man')

    switch(e.keyCode) {
        case 37:
            if(this.pacmanCurrentIndex % this.width !== 0 && !this.squares[this.pacmanCurrentIndex -1].classList.contains('wall') && !this.squares[this.pacmanCurrentIndex -1].classList.contains('ghost-lair')) this.pacmanCurrentIndex -= 1
            
            //check if pacman is in the left exit
            if(this.pacmanCurrentIndex -1 === 363){
                this.pacmanCurrentIndex = 391
            }
            break
        case 38:
            if(this.pacmanCurrentIndex - this.width >= 0 && !this.squares[this.pacmanCurrentIndex - this.width].classList.contains('wall') && !this.squares[this.pacmanCurrentIndex - this.width].classList.contains('ghost-lair')) this.pacmanCurrentIndex -= this.width
            break
        case 39:
            if(this.pacmanCurrentIndex %this.width < this.width -1 && !this.squares[this.pacmanCurrentIndex +1].classList.contains('wall') && !this.squares[this.pacmanCurrentIndex +1].classList.contains('ghost-lair')) this.pacmanCurrentIndex += 1
            //check if pacman is in the right exit
            if(this.pacmanCurrentIndex + 1 === 392){
                this.pacmanCurrentIndex = 364
            }
            break
        case 40:
            if(this.pacmanCurrentIndex + this.width < this.width * this.width && !this.squares[this.pacmanCurrentIndex + this.width].classList.contains('wall') && !this.squares[this.pacmanCurrentIndex+this.width].classList.contains('ghost-lair')) this.pacmanCurrentIndex += this.width
            break
    }
      this.squares[this.pacmanCurrentIndex].classList.add('pac-man')

      this.pacDotEaten()
      this.powerPelletEaten()
      this.checkForGameOver()
      this.checkForWin()
    }

    onKeyUp(e:KeyboardEvent){
      this.movePacman(e)
    }
  
    // //what happens when pacman eats a pac-dot
    pacDotEaten():void{
        if(this.squares[this.pacmanCurrentIndex].classList.contains('pac-dot')){
            this.score++
            this.scoreDisplay.innerHTML = this.score
            this.squares[this.pacmanCurrentIndex].classList.remove('pac-dot')
        }
    }


    // // what happens when you eat a power-pellet
    powerPelletEaten():void{
        if(this.squares[this.pacmanCurrentIndex].classList.contains('power-pellet')){
            this.score += 10
            this.ghosts.forEach(ghost => ghost.isScared = true)
            setTimeout(() =>this.unScareGhosts(this.ghosts), 10000)
            this.squares[this.pacmanCurrentIndex].classList.remove('power-pellet')
        }
    }

    // //make the ghosts stop appearing as aquamarine
    unScareGhosts(ghosts:Ghost[]) {
        ghosts.forEach(ghost => ghost.isScared = false)
    }

    // //write the function to moe the ghosts
    moveGhost(ghost){
        const directions = [-1, +1, this.width, -this.width]
        let direction = directions[Math.floor(Math.random() * directions.length)]

        ghost.timeId = setInterval(() => {
            // if the square your ghost is going to go in does NOT contain a wall and a ghost, you can go there
            if (!this.squares[ghost.currentIndex+direction].classList.contains('wall') && !this.squares[ghost.currentIndex+direction].classList.contains('ghost')){
                //you can go there
                // remove all ghost related classes
                this.squares[ghost.currentIndex].classList.remove(ghost.className)
                this.squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
                //change the currentIndex to the new safe square
                ghost.currentIndex += direction
                //redraw the ghost in the safe space space
                this.squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                // else find a new direction
            } else direction = directions[Math.floor(Math.random() * directions.length)]

            //if the ghost is currently scared
            if(ghost.isScared) {
                this.squares[ghost.currentIndex].classList.add('scared-ghost')
            }

            //if the ghost is scared and pacman runs into it
            if(ghost.isScared && this.squares[ghost.currentIndex].classList.contains('pac-man')){
                this.squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                ghost.currentIndex = ghost.startIndex
                this.score += 100
                this.squares[ghost.currentIndex].classList.add('ghost')
            }
            this.checkForGameOver()
        }, ghost.speed)
    }

    // //check for a game over
    checkForGameOver():void{
        if(this.squares[this.pacmanCurrentIndex].classList.contains('ghost') && !this.squares[this.pacmanCurrentIndex].classList.contains('scared-ghost')){
            this.ghosts.forEach(ghost => clearInterval(ghost.timeId))
            
            // document.removeEventListener('keyup', movePacman)

            // setTimeout(function(){ alert('Game over!')}, 500)
            this.scoreDisplay.innerHTML = 'GAME OVER!'
        }
    }

    // //check for a win
    checkForWin():void{
        if(this.score === 274){
            this.ghosts.forEach(ghost => clearInterval(ghost.timeId))
            // document.removeEventListener('keyup', movePacman)
            this.scoreDisplay.innerHTML = 'YOU WIN!'
        }
    }
}
