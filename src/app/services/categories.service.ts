import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from './../interfaces/categories';
import { CatsService } from './cats.service'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private api = 'https://api.thecatapi.com/v1/categories'

  constructor(
    private http: HttpClient,
    private catsService: CatsService,
  ) { }

  getAllCategories() {
    const path = this.api
    return this.http.get<Categories[]>(path);
  }

}
