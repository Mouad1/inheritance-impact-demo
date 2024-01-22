import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-compa',
  templateUrl: './compa.component.html',
  styleUrls: ['./compa.component.scss'],
})
export class CompaComponent implements OnChanges {
  // @Input() data: any;
  // counter = 0;
  // dataForB = { message: 'Data from A to B' };

  // @Output() dataChange = new EventEmitter<any>();

  // changeDataForB() {
  //   const newMessage =
  //     this.dataForB.message === 'Data from A to B'
  //       ? 'Updated Data from A to B'
  //       : 'Data from A to B';
  //   this.dataForB = { message: newMessage };
  // }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['data']) {
  //     this.dataForB = { ...this.dataForB, message: this.data.message };
  //   }
  // }
  @Input() sharedData: any;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('CompaComponent: ngOnChanges');
  }
}
