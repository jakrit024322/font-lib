import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff-add',
  templateUrl: './staff-add.component.html',
  styleUrls: ['./staff-add.component.css']
})
export class StaffAddComponent implements OnInit {

  staffForm!: FormGroup;

  constructor(private service: StaffService, private router: Router) { }

  ngOnInit(): void {
    this.staffForm  = new FormGroup({
      staff_id: new FormControl(),
      name: new FormControl(),
      password: new FormControl(),
      address: new FormControl(),
      phoneNumber: new FormControl(),
    });
  }

  addStaff(){
    let staff = {
      staff_id: this.staffForm.value.staff_id,
      name: this.staffForm.value.name,
      password	: this.staffForm.value.password,
      address	: this.staffForm.value.address,
      phoneNumber	: this.staffForm.value.phoneNumber,
    };

    this.service.addStaff(staff).subscribe(res=>{
      console.log(res);
      if(res.msg="Add a Staff complete"){
        window.alert("Add Complete");
        this.router.navigate(["/staff"]);
      }else{
        window.alert("Add not complete!!");
        this.router.navigate(["/sataff/add"]);
      }
      
    });
  }
}
