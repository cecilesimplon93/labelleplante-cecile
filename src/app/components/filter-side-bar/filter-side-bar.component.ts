import { Component, Input, OnInit } from '@angular/core';
import { list_products } from 'src/app/data';
import * as _ from 'underscore';


@Component({
  selector: 'app-filter-side-bar',
  templateUrl: './filter-side-bar.component.html',
  styleUrls: ['./filter-side-bar.component.scss']
})
export class FilterSideBarComponent implements OnInit {

@Input() listCategories! : string[];

constructor() {
this.listCategories = []

   }

  ngOnInit(): void {
    
  }




}