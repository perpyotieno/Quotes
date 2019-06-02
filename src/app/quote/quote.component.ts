import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,"Any fool can write code that a computer can understand. Good programmers write code that humans can understand","Martin Fowler"),
    new Quote(2,"Computers are good at following instructions,but not at reading your mind", "Donald Knuth"),
    new Quote(3,"Programming: when the ideas turn into the real things", "Maciej Kaczmarek"),
    new Quote(4,"No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first. ", "Andy Hunt"),
    new Quote(5,"Talk is cheap. Show me the code.", "Linus Torvalds"),
  ]

  completeQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`Are you sure you want to delete this techy quote by ${this.quotes[index].quoteauthor}?`)
      if(toDelete){
      this.quotes.splice(index,1)
      }
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
