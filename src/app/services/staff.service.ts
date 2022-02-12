import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private url = `${environment.serviceUrl}/staff`
  constructor(private http:HttpClient) {}
  
  login(login: any){
      return this.http.post<any>(`${this.url}/login`, login)
      .pipe(map((res) => {
          return res;
        }));
  }

  getStaff(): any{
    return this.http.get<any>(this.url);
  }

  getStaffById(id : any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  } 

  addStaff(staff: any){
    return this.http.post<any>(this.url, staff)
      .pipe(map((res)=>{
        return res;
      }))
  }

  updateStaff(staff: any,id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl, staff)
      .pipe(map((res)=>{
        return res;
      }))
  }

  deleteStaff(id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.delete<any>(getUrl);
  }
  
}
