import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cats } from './../interfaces/cats';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  
  private _catsList: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  private api = 'https://api.thecatapi.com/v1/images/search?limit=1000&page=0&order=DESC'
  private apiCats = 'https://api.thecatapi.com/v1'
  private apiImages = 'https://api.thecatapi.com/v1/images/search?';     
  private apiImagesCategory = 'https://api.thecatapi.com/v1/images/search?limit=100&category_ids='

  data:CatData[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getCatsList(): Observable<any> {
    return this._catsList.asObservable();
  }

  getAllCats(limit ?: string) {
    this.data = [];
    var apiUrl = limit ? this.apiCats+"/breeds?limit="+limit : this.apiCats+"/breeds";;     
    const path = apiUrl;
    return this.http.get<Cats[]>(path).subscribe((resp)=>{
      if(resp){        
        let catsId = resp.map((cat: Cats)=> { return cat.id });
        this.getImageList(catsId).subscribe((response:any) => {          
          if(response.length){
            this.data.push({
              id: response[0].breeds[0].id,
              image: response[0].url, 
              name: response[0].breeds[0].name,
              life_span: response[0].breeds[0].life_span,
              origin: response[0].breeds[0].origin
            })
            this._catsList.next(this.data);
          }
        })        
      }
    });
  }

  getImageList(ids: string[]){
    return from(ids).pipe(
      concatMap(id => <Observable<any>> this.http.get(this.apiImages+"breed_id="+id))
    );
  }

  getCat(id: string) {
    const path = this.apiCats+"/breeds/"+id;
    return this.http.get<Cats>(path);
  }

  getCatWithImage(id: string) {
    const path = this.apiImages+"breed_id="+id;
    return this.http.get<Cats>(path);
  }

  getAllCatsImg() {
    const path = this.apiImages+"limit=100";
    return this.http.get<Cats[]>(path);
  }

  getCategoryImg(id: number) {
    const path = this.apiImagesCategory + id
    return this.http.get<Cats[]>(path);
  }
}

export interface CatData{
  id: number;
  name: string;
  origin: string;
  life_span: string; 
  image: string;
}
