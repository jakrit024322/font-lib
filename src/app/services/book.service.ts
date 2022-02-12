import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = `${environment.serviceUrl}/book`
  constructor(private http: HttpClient) { }

  getBook(): any{
    return this.http.get<any>(this.url);
  }

  getBookById(id : any){
    let getUrl = `${this.url}/${id}`;
    return this.http.get<any>(getUrl);
  } 

  addBook(book: any){
    return this.http.post<any>(this.url, book)
      .pipe(map((res)=>{
        return res;
      }))
  }

  updateBook(book: any,id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.put<any>(getUrl, book)
      .pipe(map((res)=>{
        return res;
      }))
  }

  deleteBook(id:any){
    let getUrl = `${this.url}/${id}`;
    return this.http.delete<any>(getUrl);
  }

  // reviewBook(id: any,){

  //   let getUrl = `${this.url}/${id}`;
  //   return this.http.patch<any>(getUrl, review)
  //     .pipe(map((res)=>{
  //       return res;
  //     }))
  // }
}
