import { Component, OnInit } from '@angular/core';
import { Cocktails } from 'src/shared/interfaces/cocktails';
import { CocktailServiceService } from 'src/shared/services/cocktail-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Observable<Cocktails[]> | undefined;
  constructor(private cocktailService: CocktailServiceService) {
    this.cocktails = this.cocktailService.getCocktails();
  }

  public ngOnInit(): void {}
}