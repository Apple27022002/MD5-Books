import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TimelinesComponent} from "./timelines/timelines.component";
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./youtube-player/youtube-player.component";
import {ListBookComponent} from "./list-book/list-book.component";
import {CreateBookComponent} from "./create-book/create-book.component";
import {DetailBookComponent} from "./detail-book/detail-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";


const routes: Routes = [
  // {
  //   path: 'timelines',
  //   component: TimelinesComponent
  //
  // },
  // {
  //   path: 'youtube',
  //   component: YoutubePlaylistComponent
  // },
  // {
  //   path: 'youtube',
  //   component: YoutubePlaylistComponent,
  //   children: [{
  //     path: ':id',
  //     component: YoutubePlayerComponent
  //   }]
  // }
  {
    path:"",
    component:ListBookComponent
  },
  {
    path:'create-book',
    component:CreateBookComponent
  },
  {
  path:'detail-book/:id',
    component:DetailBookComponent
  },{
  path:'edit-book/:id',
    component:EditBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
