import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'storybook-label',
  template: ` <label (click)="onClick.emit($event)"> {{ text }} </label>`,
  styleUrls: ['./label.css'],
})
export default class LabelComponent {
  /**
   * The label text
   */
  @Input() text: string = '';

  /**
   * Optional click handler
   */
  @Output()
  onClick = new EventEmitter<Event>();
}
