import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomemadeComponent } from './homemade/homemade.component';
import { VideoComponent } from './video/video.component';


const routes: Routes = [
  
  { path: '', component: HomemadeComponent },
  { path: 'videos', component: VideoComponent },
  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
