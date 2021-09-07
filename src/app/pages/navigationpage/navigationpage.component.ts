import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
@Component({
  selector: 'app-navigationpage',
  templateUrl: './navigationpage.component.html',
  styleUrls: ['./navigationpage.component.scss']
})
export class NavigationpageComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  constructor() { }

  ngOnInit(): void {
   
  }

  

  ngOnDestroy(): void {
  }

}
