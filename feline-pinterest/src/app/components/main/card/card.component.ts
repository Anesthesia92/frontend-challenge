import {Component, EventEmitter, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Image} from "../../interfaces/Image";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Output() imgUrl: string[] | undefined;

  public likes: Object[] = [];

  public toggleFilter = false;

  public changeFilterComponent = new EventEmitter<boolean>();

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  this.getImgUrl();
  }

  public getImgUrl(): void {
  this.http.get<Image[]>('https://api.thecatapi.com/v1/images/search?limit=15&page=0').subscribe(response =>
  {
    this.imgUrl = response.map(item => item.url);
    console.log(this.imgUrl)
  })
  }

  public toggleFilterComponent() {
    this.toggleFilter = ! this.toggleFilter
    this.changeFilterComponent.emit(true)
  }

}
