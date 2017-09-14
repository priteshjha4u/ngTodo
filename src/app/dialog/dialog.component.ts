import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  @Input('show') showFlag: boolean
  @Input() options: any
  //@Output() handler = new EventEmitter<any>();
  constructor() {
    //console.log('cons', this.options);
   }

  ngOnInit() {
    //console.log('init', this.options);
  }

 /*  close() {
    this.handler.emit({action: 'close'});
  } */

 /*  success() {
    this.handler.emit({action: 'success', cb: this.options._cb || null});
  } */

  action(msg) {
    this.options._cb && this.options._cb(msg)
  }

}
