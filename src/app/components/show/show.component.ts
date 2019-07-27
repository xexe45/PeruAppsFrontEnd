import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  user: any = {};
  id: number = null;

  constructor(public router: Router, public activeRo: ActivatedRoute, private apiServ: ApiService) {

    activeRo.params.subscribe( (params: any) => {

     this.id = Number(params['id']);

      this.apiServ.show(this.id)
        .subscribe( (response: any) => {
          console.log(response);
          this.user = response.data;
        }, err => {
          this.router.navigate(['/users']);
        });

    });

   }

  ngOnInit() {
  }

}
