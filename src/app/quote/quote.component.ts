import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Quote} from "../quote";
import{DatePipe} from "node_modules/@angular/common"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  // @Input() quote:Quote;
  //
  //   @Output() isComplete= new EventEmitter<boolean>();

  quotes = [
    new Quote(1,"Perpetua Mary","Any fool can write code that a computer can understand. Good programmers write code that humans can understand","Martin Fowler",new Date(2017,2,12),0,0),
    new Quote(2,"Perpetua Mary","Computers are good at following instructions,but not at reading your mind", "Donald Knuth",new Date(2019,2,4),0,0),
    new Quote(3,"Perpetua Mary","Programming: when the ideas turn into the real things", "Maciej Kaczmarek",new Date(2019,3,5),0,0),
    new Quote(4,"Perpetua Mary","Talk is cheap. Show me the code.", "Linus Torvalds",new Date(2019,2,4),0,0)
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postedDate = new Date(quote.postedDate);
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

 upVotes=0;
 downVotes=0;
 timePass=0;

 tPassed(){this.timePass=0;}
 upVote(i){
      this.quotes[i].uvotes +=1;
    }
    downVote(i){
         this.quotes[i].dvotes +=1;
       }
 initialNum:number
 lastNum:number
 checker:number


    hUpvote(){
      this.initialNum = 0
     this.lastNum = 0
       for(this.checker=0 ; this.checker < this.quotes.length; this.checker++) {
        this.lastNum = this.quotes[this.checker].uvotes;
        if(this.lastNum > this.initialNum){
          this.initialNum = this.lastNum
        }
      }

      return  this.initialNum
    }
  constructor() { }

  ngOnInit() {
  }

}
