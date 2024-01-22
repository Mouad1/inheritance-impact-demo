import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CompbComponent } from '../compb/compb.component';

@Component({
  selector: 'app-compc',
  templateUrl: './compc.component.html',
  styleUrls: ['./compc.component.scss'],
})
export class CompcComponent extends CompbComponent {
  @Input() override data: any;
  @Output() override update = new EventEmitter<any>();

  changeMessage() {
    const newMessage =
      this.data.message === 'Initial Data' ? 'Updated by C' : 'Initial Data';
    this.data.message = newMessage;
    // Emit an event to inform the parent of the change.
    this.update.emit(this.data);
  }
}
