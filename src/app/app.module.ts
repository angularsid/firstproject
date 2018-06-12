import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';
import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'comp1',
        pathMatch: 'full'
      },
		  {
			path: 'comp1',
			component: Comp1Component
		  },
		  {
			path: 'comp2',
			component: Comp2Component
		  },		  
		  {
		path: 'comp3',
			component: Comp3Component
		  },
		  {
			path: 'comp4',
			component: Comp4Component
		  } 
  ])],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
