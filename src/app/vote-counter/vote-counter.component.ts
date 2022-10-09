import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-counter',
  templateUrl: './vote-counter.component.html',
  styleUrls: ['./vote-counter.component.css']
})

export class VoteCounterComponent {
  constructor() { }

  @Input() count = 0;

  incrementVotes() {
    this.count++

    // will need to push new value to db
  }

  decrementVotes() {
    this.count--

    // will need to push new value to db
  }
}