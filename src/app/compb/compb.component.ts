import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CompaComponent } from '../compa/compa.component';

@Component({
  selector: 'app-compb',
  templateUrl: './compb.component.html',
  styleUrls: ['./compb.component.scss'],
})
export class CompbComponent extends CompaComponent implements OnChanges {
  @Input() data: any;
  // dataForC = { message: 'Data from B to C' };

  // changeDataForC() {
  //   const newMessage =
  //     this.dataForC.message === 'Data from B to C'
  //       ? 'Updated Data from B to C'
  //       : 'Data from B to C';
  //   this.dataForC = { message: newMessage };
  // }

  @Output() update = new EventEmitter<any>();

  handleUpdate(updatedData: any) {
    this.data = updatedData;
    this.update.emit(updatedData);
  }
}
