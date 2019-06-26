import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ImportantNumbersComponent } from './important-numbers/important-numbers.component';
import { MyPhoneBookComponent } from './my-phone-book/my-phone-book.component';

const routes: Routes = [
{
	path:'', component: HomePageComponent
},
{
	path:'important', component: ImportantNumbersComponent
},
{
	path:'phonebook', component: MyPhoneBookComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
