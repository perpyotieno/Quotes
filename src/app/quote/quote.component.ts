import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,"Perpetua Mary","Any fool can write code that a computer can understand. Good programmers write code that humans can understand","Martin Fowler",new Date(2017,2,12)),
    new Quote(2,"Perpetua Mary","Computers are good at following instructions,but not at reading your mind", "Donald Knuth",new Date(2019,2,4)),
    new Quote(3,"Perpetua Mary","Programming: when the ideas turn into the real things", "Maciej Kaczmarek",new Date(2019,3,5)),
    new Quote(4,"Perpetua Mary","No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first. ", "Andy Hunt",new Date(2018,2,4)),
    new Quote(5,"Perpetua Mary","Talk is cheap. Show me the code.", "Linus Torvalds",new Date(2019,2,4)),
  ]
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.push(quote)
  }

  completeQuote(isComplete,index){
    if(isComplete){
      let toDelete=confirm(`Are you sure you want to delete this techy quote by ${this.quotes[index].quoteauthor}?`)
      if(toDelete){
      this.quotes.splice(index,1)
      }
    }
  }
 // upVotes=0;
 // downVotes=0;
 // timePass=0;
 // upvote(i){
 //   this.quotes[i].upVotes +=1;
 // }
 // downvote(i){
 //   this.quotes[i].downVotes +=1;
 // }
 // timepassed(){
 //   this.timePass =0;
 // }
  constructor() { }

  ngOnInit() {
  }

}
