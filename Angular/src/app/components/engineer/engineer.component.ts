import { Component } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { EngineerModel } from "../../model/engineer.model";
import { Router } from "@angular/router";

@Component({
  selector: 'app-eng',
  templateUrl: './engineer.component.html',
  styleUrls: []
})
export class EngineerComponent {
    
    engineers : EngineerModel[] ; 
    data : EngineerModel[];
    errorMessage : string;

    constructor(private _apiService: ApiService, private router:Router)
    {

        this._apiService.getEngineers().subscribe(xdata=>
            {
              this.engineers = xdata;
              this.data = xdata;
              console.log(xdata);
            }, 
           xerror => this.errorMessage = <any>xerror
           );

    }

    filterData(event)
    {
      var value = event.target.value.toLowerCase();
      console.log(this.data);
      let filterData = [];
       
       if(this.data)
        {
         
          let columns = [];

          for (var key in this.data[0]) {
            
         
            columns.push(key);
         }

         columns.forEach((column:any) => {
          console.log(column);
          if(column != '_id')
          {
           let columnFilterData = this.data.filter((item:any) => {
              
              return item[column].toString().toLowerCase().indexOf(value) !== -1 || !value;
            });
            filterData = filterData.concat(columnFilterData);
          
          }
        });
        // update the rows
        filterData = Array.from(new Set(filterData));
        this.engineers = filterData;
        //console.log(filterData);
        }
    }

    deleteClick(_id)
    {
      this._apiService.deleteEngineer(_id).subscribe(xdata=>
        {
          if(xdata.n ==1)
            {
              for(var i =0 ; i < this.engineers.length; i++)
                {
                  if(this.engineers[i]._id == _id)
                    {

                      this.engineers.splice(i,1);
                    }
                }
            }
        }, 
       xerror => this.errorMessage = <any>xerror
       );
    }

    updateClick(_id)
    {
      this.router.navigate(['/engineer',_id]);
    }
  }