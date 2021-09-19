import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cdetail',
  templateUrl: './cdetail.component.html',
  styleUrls: ['./cdetail.component.scss']
})
export class CdetailComponent implements OnInit {


  @Input()
  url!: String;
@Input() description:String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
