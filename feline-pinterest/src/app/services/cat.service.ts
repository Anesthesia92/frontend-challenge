import {Injectable, Input} from '@angular/core';
import {cloneDeep} from "lodash";
import {Image} from "../components/interfaces/Image";

@Injectable({
  providedIn: 'root'
})

export class CatService {

  @Input() childItems: Image[] = [];

  private initialCardsFilterData: { favorite: boolean } = {
    favorite: false
  };

  private currentCardsFilterData = cloneDeep( this.initialCardsFilterData );

  private chosenToys: string[] = [];


  constructor(
  ) {}

  public filterCatsList(): void {
    let arr = this.childItems.slice();
    if ( this.initialCardsFilterData.favorite ){
      arr = arr.filter(card => {
        return card.favorite;
      })
    }
  }

}
