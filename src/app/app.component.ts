import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  rowClick = new EventEmitter();
  title = 'sample';
  employees = this.getAllCustomers();
  displayedColumns: string[] = ['name', 'category', 'email','contact'];
  dataSource!: MatTableDataSource<any>;
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    
  ];
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private api : ApiService){}
  ngOnInit(): void {
   this.getAllCustomers();
  }

  showDiv = {name : false, id : false}

getAllCustomers(){
 

}

onclick(id: number) {
  this.rowClick.next(id);
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

}
