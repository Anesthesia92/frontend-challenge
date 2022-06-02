import {Component, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Image} from "../../interfaces/Image";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Output() imgUrl: any

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  this.getImgUrl();
  }

  public getImgUrl(): void {
  this.http.get<Image[]>('https://api.thecatapi.com/v1/images/search?limit=10&page=0').subscribe(response =>
  {
    this.imgUrl = response[0].url
    console.log(response)
  })

  }
}
