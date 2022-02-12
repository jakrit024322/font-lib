import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {

  bookForm!: FormGroup;

  constructor(private service: BookService, private router: Router) { }

  ngOnInit(): void {
    this.bookForm  = new FormGroup({
      name: new FormControl(),
      authos: new FormControl(),
      publisher: new FormControl(),
      price: new FormControl(),
      borrowstudent: new FormControl(),
      borrowteacher: new FormControl(),
    });
  }

  addBook(){
    let book = {
      name: this.bookForm.value.name,
      authos: this.bookForm.value.authos,
      publisher	: this.bookForm.value.publisher,
      price	: this.bookForm.value.price,
      borrowstudent	: this.bookForm.value.borrowstudent,
      borrowteacher	: this.bookForm.value.borrowteacher,
    };

    this.service.addBook(book).subscribe(res=>{
      console.log(res);
      if(res.msg="Add a Book complete"){
        window.alert("Add Complete");
        this.router.navigate(["/book"]);
      }else{
        window.alert("Add not complete!!");
        this.router.navigate(["/book/add"]);
      }
      
    });
  }
}
