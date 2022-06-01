import {Component} from '@angular/core';
import {CatService} from "../../../services/cat.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  public image: any;

  constructor(public catService: CatService) { }

  ngOnInit() {
    this.catService.getData().subscribe((data) => {
      this.image = data
      console.log(data)
    }
  )
  }
}
