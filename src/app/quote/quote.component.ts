import { Component, OnInit } from '@angular/core';
import {Quote} from "../quote"

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,"Any fool can write code that a computer can understand. Good programmers write code that humans can understand"),
    new Quote(2,"Computers are good at following instructions,but not at reading your mind"),
    new Quote(3,"Programming: when the ideas turn into the real things"),
    new Quote(4,"No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first. "),
    new Quote(5,"Talk is cheap. Show me the code."),
  ]

  constructor() { }

  ngOnInit() {
  }

}
