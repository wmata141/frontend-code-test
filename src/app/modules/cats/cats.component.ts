import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CatsService } from '../../services/cats.service'
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  displayedColumns: string[] = ['imageUrl', 'name', 'origin', 'life_span'];
  dataSource = new MatTableDataSource();
  pictures;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private catsService: CatsService
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
    this.pictures = cats
    console.log("this.pictures.length", this.pictures.length)
    return cats
  })
}

getCat(id: string) {
  this.catsService.getCat(id).subscribe(cats => {
    console.log("getCat id", id, "Cats", cats)
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

applyFilter(filterValue: string) {
  console.log("filterValue",filterValue)
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

ngAfterViewInit() {
  this.dataSource.sort = this.sort
}

}
