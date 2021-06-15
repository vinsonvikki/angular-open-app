import { APP_ID, Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  apiData:any;

  constructor(private _http: HttpService) { }

  ngOnInit() {
    this._http.getApiData().subscribe(data=>{
      this.apiData = data;
      console.log(this.apiData);
    })
  }

}
