import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private url = `${environment.serviceUrl}/member`
  constructor(private http: HttpClient) { }

  getMember(): any{
    return this.http.get<any>(this.url);
  }

  getMemberById(id : any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  } 

  addMember(book: any){
    return this.http.post<any>(this.url, book)
      .pipe(map((res)=>{
        return res;
      }))
  }

  updateMember(book: any,id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl, book)
      .pipe(map((res)=>{
        return res;
      }))
  }

  deleteMember(id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.delete<any>(getUrl);
  }
}
