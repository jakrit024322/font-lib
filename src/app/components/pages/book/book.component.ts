import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books : any;

  constructor(private service: BookService, private router: Router) { }

  ngOnInit(): void {
    this.service.getBook().subscribe((res: { data: any; })=>{
      this.books = res.data;
    })
  }

  deleteBook(id:any){
    if(confirm("Comfirm")){
      this.service.deleteBook(id).subscribe((res)=>{
        this.router.navigateByUrl('/',{skipLocationChange: true})
        .then(()=>{
          this.router.navigate(['/book'])
        })
      })
    }
  }
  

}
