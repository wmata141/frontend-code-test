import { Component, OnInit } from '@angular/core';
import { Cats } from '../../interfaces/cats';
import { CatsService } from '../../services/cats.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css']
})
export class CategoriesDetailComponent implements OnInit {
  
  id: string;
  cats: Cats[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catsService: CatsService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.getAllCats()
    // this.catsService.getCat(this.id).subscribe( cat => {
    //   console.log(cat)
    //   this.cat = cat;
    // }, error => console.log(error))
  }

  getAllCats() {
    this.catsService.getAllCats().subscribe(cats => {
      console.log("getAllCats", cats)
      this.cats = cats
      return cats
    })
  }

  list() {
    this.router.navigate(['/categories']);
  }

}
