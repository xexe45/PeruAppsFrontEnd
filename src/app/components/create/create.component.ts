import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserInterface } from '../../interfaces/UserInterface.interface';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  id: number = null;
  loading = false;

  user: UserInterface = {
    id: null,
    nombre: null,
    apellidopat: null,
    apellidomat: null,
    email: null,
    fchnac: null,
    fchingreso: null,
  };

  response: any = null;

  constructor(private apiServ: ApiService, public activatedR: ActivatedRoute) {

      this.activatedR.params.subscribe( (params: any) => {
        this.id = params['id'];
        console.log(this.id);

        if ( this.id > 0 ){

          this.user = {
            id: 1,
            nombre: 'Cesar',
            apellidopat: 'Lachira',
            apellidomat: 'Cordova',
            email: 'lachiracesar@gmail.com',
            fchnac: '1993-12-14',
            fchingreso: '1993-12-14',
          };
        }
      });

   }

  ngOnInit() {
  }

  save( form: NgForm ){

    if ( form.valid ) {

      this.loading = true;

      if ( this.id > 0 ){

        this.apiServ.update(this.id, this.user)
        .subscribe( (response: any) => {
          this.response = response;
          this.loading = false;
        });

      } else {

        this.apiServ.store(this.user)
        .subscribe( (response: any) => {
          this.response = response;
          this.loading = false;
          this.user = {
            id: null,
            nombre: null,
            apellidopat: null,
            apellidomat: null,
            email: null,
            fchnac: null,
            fchingreso: null,
          };
        });

      }

    }

  }

}
