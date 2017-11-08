import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css'],
})
export class EditAreaComponent implements OnInit {

  @Input() text: string;
  @Output() textChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

}
