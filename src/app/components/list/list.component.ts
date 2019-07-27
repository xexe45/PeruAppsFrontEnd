import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  obs: any = null;

  pagination = {
    page: 1,
    per_page: null,
    total: null,
    total_pages: null
  };

  data: any[] = [];

  constructor(private apiServ: ApiService) { }

  ngOnInit() {

    this.getUsers(this.pagination.page);

  }

  ngOnDestroy() {

    this.obs.unsubscribe();

  }


  getUsers(page: number) {
    this.obs = this.apiServ.list(page)
      .subscribe( (response: any) => {
        console.log(response);
        this.data = response.data;
        this.pagination.page = response.page;
        this.pagination.per_page = response.per_page;
        this.pagination.total = response.total;
        this.pagination.total_pages = response.total_pages;

      }, err => {
        console.log(err);
      });

  }

  previous(event) {

    event.preventDefault();
    this.getUsers(this.pagination.page - 1);

  }

  next(event) {

    event.preventDefault();
    this.getUsers(this.pagination.page + 1);
  }


}
