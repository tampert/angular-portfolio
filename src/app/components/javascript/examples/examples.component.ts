import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.css']
})
export class ExamplesComponent implements OnInit {
  codeFind: SafeHtml;
  
  constructor(private sanitized: DomSanitizer) { 
    this.codeFind =`
    const fruits = [
      {
        id:"1", 
        name:"apple"
      },
      {
        id:"2", 
        name:"pear"
      },
      {
        id:"3", 
        name:"lemon"
      }
    ]

    function search(keyword){
      const results = fruits.filter((fruit) => {
        return fruit.name.toLocaleLowerCase().includes(keyword)
      })
    }
    `
  }

  ngOnInit(): void {
  }

}
