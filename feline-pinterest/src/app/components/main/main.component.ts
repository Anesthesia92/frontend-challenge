import {Component, Input, OnInit, Output} from '@angular/core';
import {Image} from "../interfaces/Image";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() imgUrl: string[] | undefined;

  public items: Object[] = [];

  @Output() childItems: Image[] = [];

  ngOnInit(): void {
    this.getIcons();
  }

  public getIcons(): void {
    this.childItems.length = 1;
    this.addNewCats();
    console.log(this.childItems)
  }

  public addNewCats(): void {
    this.items = [...this.items , this.items.length]
  }
}
