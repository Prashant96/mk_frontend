import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('parentData') public name;
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  emmitEvent(){
    this.childEvent.emit('Event Emmited');
  }

}
