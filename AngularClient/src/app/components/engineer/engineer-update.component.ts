import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { EngineerModel } from "../../model/engineer.model";
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-eng-update',
  templateUrl: './engineer-update.component.html',
  styleUrls: []
})
export class EngineerUpdateComponent implements OnInit {
    
    engineer : EngineerModel ; 
    errorMessage : string;

    constructor(private _apiService: ApiService,private route: ActivatedRoute,private location: Location, private router: Router)
    {
      
    }

    ngOnInit(): void {
      this.route.paramMap
      .switchMap((params: ParamMap) => this._apiService.getEngineer(params.get('id')))
      .subscribe(data => {
        this.engineer = data;
        console.log("Get Engineer " + JSON.stringify(data))
      },
      xerror => this.errorMessage = <any>xerror
      );
    }


  //Method to return back
  goBack(): void {
    this.location.back();
  }

  updateEngineer(event)
  {
       event.preventDefault();
       
          this._apiService.updateEngineer(this.engineer)
               .subscribe(
              data =>
              {
               //success
                this.router.navigate(['/engineers']);
              },
              xerror => this.errorMessage = <any>xerror
              )
        
  }
}