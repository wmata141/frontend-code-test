import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-categories-detail',
  templateUrl: './categories-detail.component.html',
  styleUrls: ['./categories-detail.component.css']
})

export class CategoriesDetailComponent implements OnInit {

  id: number;
  images: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catsService: CatsService,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getPictures(this.id)
  }

  getPictures(id: number) {
    this.catsService.getCategoryImg(id).subscribe( images => {
      this.images = images
    })
  }

  list() {
    this.router.navigate(['/categories']);
  }

}
