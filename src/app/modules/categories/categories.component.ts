import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { CatsService } from '../../services/cats.service';
import { Categories } from '../../interfaces/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  private categories: Categories[];

  constructor(
    private categoriesService: CategoriesService,
    private catsService: CatsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categoriesService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  categorieDetail(id: string) {
    this.router.navigate(['categories-detail', id]);
  }

}
