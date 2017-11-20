import { Injectable } from "@angular/core";
import {Http,Response,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {EngineerModel} from '../model/engineer.model'
    

@Injectable()

export class ApiService
{
    
    constructor(private _http: Http)
    {
            console.log("Service Initialized");
    }

    getEngineers():Observable<EngineerModel[]>{
        return this._http.get('http://localhost:8888/api/engineers')
        .map((response:Response)=> <EngineerModel[]>response.json())
        // .do(data=>console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError); 
    }
    
    addEngineer(newEngineer):Observable<EngineerModel>{
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:8888/api/engineer', JSON.stringify(newEngineer),{headers:headers})
        .map((response:Response)=> <EngineerModel>response.json())
        .catch(this.handleError); 
    }

    getEngineer(_id):Observable<EngineerModel>{
        //console.log(_id);
        return this._http.get('http://localhost:8888/api/engineer/'+_id)
        .map((response:Response)=> <EngineerModel>response.json())
        // .do(data=>console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError); 
    }

    updateEngineer(engineer){
        var headers = new Headers();
        console.log("inside put");
        headers.append('Content-Type', 'application/json');
        return this._http.put('http://localhost:8888/api/engineer/'+engineer._id, JSON.stringify(engineer),{headers:headers})
        .map((response:Response)=> response.json())
        .catch(this.handleError); 
    }


    deleteEngineer(_id){
        //console.log(_id);
        return this._http.delete('http://localhost:8888/api/engineer/'+_id)
        .map((response:Response)=>response.json())
        // .do(data=>console.log("All: " + JSON.stringify(data)))
        .catch(this.handleError); 
    }


    private handleError(error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

