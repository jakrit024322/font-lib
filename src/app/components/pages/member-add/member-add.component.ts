import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {

  memberForm!: FormGroup;

  constructor(private service: MemberService, private router: Router) { }

  ngOnInit(): void {
    this.memberForm  = new FormGroup({
      name: new FormControl(),
      password: new FormControl(),
      groups: new FormControl(),
      address: new FormControl(),
      phoneNumber: new FormControl(),
    });
  }

  addMember(){
    let member = {
      name: this.memberForm.value.name,
      password: this.memberForm.value.password,
      groups	: this.memberForm.value.groups,
      address	: this.memberForm.value.address,
      phoneNumber	: this.memberForm.value.phoneNumber,
    };

    this.service.addMember(member).subscribe(res=>{
      console.log(res);
      if(res.msg="Add a Member complete"){
        window.alert("Add Complete");
        this.router.navigate(["/book"]);
      }else{
        window.alert("Add not complete!!");
        this.router.navigate(["/book/add"]);
      }
      
    });
  }
}