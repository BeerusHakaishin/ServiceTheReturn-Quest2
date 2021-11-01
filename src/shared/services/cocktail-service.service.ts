import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktails } from '../interfaces/cocktails';

@Injectable({
  providedIn: 'root',
})
export class CocktailServiceService {
  constructor(private http: HttpClient) {}

  public getCocktails() {
    return this.http.get<Cocktails[]>('assets/cocktails.json');
  }
}