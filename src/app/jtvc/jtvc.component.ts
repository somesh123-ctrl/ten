import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jtvc',
  templateUrl: './jtvc.component.html',
  styleUrls: ['./jtvc.component.scss']
})
export class JtvcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isReadMore = true

  showText() {
     this.isReadMore = !this.isReadMore
  }
 
}
