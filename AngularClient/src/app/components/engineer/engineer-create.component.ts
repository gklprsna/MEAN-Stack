import { Component } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { EngineerModel } from "../../model/engineer.model";
import { Location } from '@angular/common';
import {Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-eng-create',
  templateUrl: './engineer-create.component.html',
  styleUrls: []
})
export class EngineerCreateComponent {
    
    engineer : EngineerModel = new EngineerModel(); 
    errorMessage : string;
    value : string;
    constructor(private _apiService: ApiService, private location: Location, private router: Router)
    {
     
        

    }
   
    //Method to return back
    goBack(): void {
      this.location.back();
    }


    //Method to add engineer
    addEngineer(event)
    {
      event.preventDefault();
      console.log(this.engineer);
      if(this.engineer)
        {
          this._apiService.addEngineer(this.engineer)
               .subscribe(
              data =>
              {
                console.log("Post Data"+ JSON.stringify(data));
                this.router.navigate(['/engineers']);
              },
              xerror => this.errorMessage = <any>xerror
              )
        }
    }
  

  }