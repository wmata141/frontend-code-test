import { Component, OnInit } from '@angular/core';
import { Cats } from '../../interfaces/cats';
import { CatsService } from '../../services/cats.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cats-detail',
  templateUrl: './cats-detail.component.html',
  styleUrls: ['./cats-detail.component.css']
})
export class CatsDetailComponent implements OnInit {

  id: string;
  cat: Cats;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catsService: CatsService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    
    this.catsService.getCat(this.id).subscribe( cat => {
      console.log(cat)
      this.cat = cat;
    }, error => console.log(error))
  }

  list() {
    this.router.navigate(['/']);
  }

}
