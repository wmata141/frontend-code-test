import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cats } from './../interfaces/cats';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private api = 'https://api.thecatapi.com/v1/images/search?limit=1000&page=0&order=DESC'
  private apiCats = 'https://api.thecatapi.com/v1'
  private apiImages = 'https://api.thecatapi.com/v1/images/search?limit=100'

  constructor(
    private http: HttpClient
  ) { }

  getAllCats() {
    const path = this.apiCats+"/breeds"
    return this.http.get<Cats[]>(path);
  }

  getCat(id: string) {
    const path = this.apiCats+"/breeds/"+id
    return this.http.get<Cats>(path);
  }

  getAllCatsImg() {
    const path = this.apiImages
    return this.http.get<Cats[]>(path);
  }
}
