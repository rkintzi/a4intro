import { Component, OnInit } from '@angular/core';
import { EditorStateService } from '../editor-state.service';

@Component({
  selector: 'app-editor-group',
  templateUrl: './editor-group.component.html',
  styleUrls: ['./editor-group.component.css'],
  providers: [ EditorStateService ],
})
export class EditorGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
