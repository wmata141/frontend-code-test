import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatsService } from '../../services/cats.service'
import { Cats } from '../../interfaces/cats';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})

export class CatsComponent implements OnInit {

  cats: Cats[];
  filterCats = { name: '', origin: ''};
  filterCatsName = { name: ''};
  filterCatsOrigin  = { origin: ''};
  selected = "15";

  constructor(
    private catsService: CatsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.catsService.getCatsList().subscribe((list)=>{
      if(list.length){
        this.cats = list;
      }
    });
    this.getAllCats(this.selected);
  }

  getAllCats(limit) {
    this.reset();
    this.catsService.getAllCats(limit);        
  }

  catsDetail(id: string) {
    this.catsService.getCat(id).subscribe(cats => {
      console.log("getCat id", id, "Cats", cats)
      this.router.navigate(['cats-detail', id]);
    })
  }

  reset(){
    this.cats = [];
  }

  // getAllCatsImg() {
  //   this.catsService.getAllCatsImg().subscribe(catsImg => {
  //     console.log("getAllCatsImg", catsImg);
  //     return catsImg
  //   })
  // }

  // getAll() {
  //   const promises = [
  //     this.catsService.getAllCats(),
  //     this.catsService.getAllCatsImg()
  //   ];
  //   Promise.all(promises)
  //     .then(data => {
  //       console.log("First handler", data);
  //       return data
  //     })
  //     .then(res => {
  //       console.log("Second handler", res);
  //       return res
  //     });
  // }

}
