import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Route} from '@angular/router'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  constructor(private route : ActivatedRoute){}
  name='';
  name1='';
  id='';
  id1='';
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log(params);
      this.name=params['name'];
      this.id=params['id']
    })
    // for query string
    this.route.queryParams.subscribe(params=>{
      console.log(params);
      this.name1=params['name'];
      this.id1=params['id']
    })
  }

}
