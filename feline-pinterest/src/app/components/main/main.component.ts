import {Component, Input, OnInit} from '@angular/core';
import {Image} from "../interfaces/Image";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() imgUrl: string | undefined;

  public items: any[] = [];
  public childItems: Image[] = [];

  ngOnInit(): void {
    this.getIcons();
  }

  public getIcons(): void {
    this.childItems.length = 15;
    this.addNewCats();
  }

  public addNewCats(): void {
    this.items = [...this.items , this.items.length]
  }
}
