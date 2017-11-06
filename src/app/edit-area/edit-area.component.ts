import { Component, OnInit, Input, EventEmitter,
    Output } from '@angular/core';

@Component({
  selector: 'app-edit-area',
  templateUrl: './edit-area.component.html',
  styleUrls: ['./edit-area.component.css'],
})
export class EditAreaComponent implements OnInit {

    @Input() editorState: string;
    @Output() editorStateChange = new EventEmitter<string>();

    constructor() { }

    ngOnInit() {
    }

}
