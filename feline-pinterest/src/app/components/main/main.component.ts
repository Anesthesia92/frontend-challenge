import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../interfaces/Image";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() imgUrl: any;

  public items: Image[] = [];

  constructor() {
    this.items.length = 15
  }

  ngOnInit(): void {
  }

}
