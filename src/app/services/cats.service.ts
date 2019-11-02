import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cats } from './../interfaces/cats';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(
    private http: HttpClient
  ) { }
}
