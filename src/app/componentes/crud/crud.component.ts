import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/placeholder.model';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  images!: any
  error!: any

  constructor(private crudService: CrudService) {
    this.getter();
   }

  ngOnInit(): void {
  }

  getter(){
    this.crudService.getFotos().subscribe((data =>{
      this.images = data;
      console.log('variavel que preenchemos', this.images);
      console.log('variavel que recebemos', data);
      
    }),
    error =>{
      this.error = error;
      console.log('ERROR: ', error);
    })
  }

}
