import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vote-counter',
  templateUrl: './vote-counter.component.html',
  styleUrls: ['./vote-counter.component.css']
})

export class VoteCounterComponent {
  constructor() { }

  @Input() count = 0;

  // will need to add global data store for loggedIn state
  @Input() loggedIn = false;

  incrementVotes() {
    this.count++

    // will need to push new value to db
  }

  decrementVotes() {
    this.count--

    // will need to push new value to db
  }
}