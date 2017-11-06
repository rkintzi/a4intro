import { Component, OnInit } from '@angular/core';
import { EditorStateService } from '../editor-state.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {


    constructor(public editorState: EditorStateService) {
    }

    ngOnInit() {
    }

}
