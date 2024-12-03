import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login.component';
import { FormStepOneComponent } from './form-step-one.component';
import { FormStepTwoComponent } from './form-step-two.component';
import { HomeComponent } from './home.component';
import { AfterLoginComponent } from './afterlogin.component';
import { ProfileComponent } from './profile.component';
import { StateRankingComponent } from './state.ranking.component';
import { NationalRankingsComponent } from './national.rankings.component';
import { AffiliatesComponent } from './affiliates.component';
import { WatchGamesComponent } from './watchgames.component';
import { PlayGamesComponent } from './playgames.component';
import { AIComponent } from './ai.component';
import { PastComponent } from './past.component';
import { UpcomingComponent } from './upcoming.component';
import { ForgotPassComponent } from './forgotpass.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'step-one', component: FormStepOneComponent },
  { path: 'step-two', component: FormStepTwoComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'afterlogin', component: AfterLoginComponent },
    { path: 'profile', component: ProfileComponent },
    //{path: 'rankings',
    //children: [
      { path: 'state', component: StateRankingComponent },
     { path: 'national', component: NationalRankingsComponent },
     { path: 'affiliates', component: AffiliatesComponent },
     { path: 'watchgames', component: WatchGamesComponent },
     { path: 'playgames', component: PlayGamesComponent },
     { path: 'ai', component: AIComponent },
     { path: 'past', component: PastComponent },
     { path: 'upcoming', component: UpcomingComponent },
     { path: 'forgotpass', component:ForgotPassComponent },

     
    //],
  //},
   // { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirect unknown paths to home
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormStepOneComponent,
    FormStepTwoComponent,
    HomeComponent,
    AfterLoginComponent,
    ProfileComponent,
    StateRankingComponent,
   NationalRankingsComponent,
   AffiliatesComponent,
   WatchGamesComponent,
   PlayGamesComponent,
   AIComponent,
   PastComponent,
   UpcomingComponent,
   ForgotPassComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }