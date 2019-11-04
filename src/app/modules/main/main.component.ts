import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { CatsService } from '../../services/cats.service'
import { MatTableDataSource, MatSort } from '@angular/material';
import { Cats } from '../../interfaces/cats';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  displayedColumns: string[] = ['imageUrl', 'name', 'origin', 'life_span'];
  dataSource = new MatTableDataSource();
  cats: Cats[];
  filterCats = { name: '', origin: ''};
  filterCatsName = { name: ''};
  filterCatsOrigin  = { origin: ''};

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private catsService: CatsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllCats();
    // this.getCat("abys");
    // this.getAllCatsImg();
    // this.getAll();

    this.dataSource.paginator = this.paginator;
  }

  getAllCats() {
    this.catsService.getAllCats().subscribe(cats => {
      console.log("getAllCats", cats)
      this.dataSource.data = cats
      this.cats = cats
      console.log("this.cats.length", this.cats.length)
      return cats
    })
  }

  catsDetail(id: string) {
    this.catsService.getCat(id).subscribe(cats => {
      console.log("getCat id", id, "Cats", cats)
      this.router.navigate(['cats-detail', id]);
    })
  }

  getAllCatsImg() {
    this.catsService.getAllCatsImg().subscribe(catsImg => {
      console.log("getAllCatsImg", catsImg);
      return catsImg
    })
  }

  getAll() {
    const promises = [
      this.catsService.getAllCats(),
      this.catsService.getAllCatsImg()
    ];
    Promise.all(promises)
      .then(data => {
        console.log("First handler", data);
        return data
      })
      .then(res => {
        console.log("Second handler", res);
        return res
      });
  }

  applyFilterOrigin(filterValue: string) {
    this.filterCats.origin = filterValue;
  }

  applyFilterName(filterValue: string) {
    this.filterCats.name = filterValue;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort
  }

}
