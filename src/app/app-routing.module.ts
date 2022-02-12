import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/pages/book-add/book-add.component';
import { BookComponent } from './components/pages/book/book.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { MemberAddComponent } from './components/pages/member-add/member-add.component';
import { MemberComponent } from './components/pages/member/member.component';
import { StaffAddComponent } from './components/pages/staff-add/staff-add.component';
import { StaffComponent } from './components/pages/staff/staff.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path : "", component: MainComponent},
  { path : "login", component: LoginComponent},
  { path : "book", component: BookComponent, },
  { path : "book/add", component: BookAddComponent, },
  { path : "member", component: MemberComponent, },
  { path : "member/add", component: MemberAddComponent, },
  { path : "staff", component: StaffComponent, },
  { path : "staff/add", component: StaffAddComponent, },
  { path : "borrow", component: BorrowComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
