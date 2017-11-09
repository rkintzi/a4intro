import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit, OnChanges {

  private static re = new RegExp(/\*([^\*]*)\*/);

  @Input() text: string;
  formatted: string;

  constructor() { }

  private static format(text: string): string {
      return text.replace(PreviewComponent.re, '<em>$1</em>');
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
      if (changes['text']) {
          this.formatted = PreviewComponent.format(changes['text'].currentValue);
      }
  }

}
