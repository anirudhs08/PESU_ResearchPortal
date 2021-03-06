import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { MakeGroupComponent } from './make-group/make-group.component';
import { MakeProjectComponent } from './make-project/make-project.component';
import { GroupsComponent } from './groups/groups.component';
import {RecommendationComponent} from './recommendation/recommendation.component';
import { ReimbursementsComponent } from './reimbursements/reimbursements.component';

const routes: Routes = [
  {
    path : '' , component : MainComponent,
    children : [
      {
        path : 'posts/:id',
        component : PostComponent
      },
      {
        path : 'profile',
        component : PostsComponent
      },
      {
        path : 'aboutus',
        component: AboutusComponent
      },
      {
        path : 'home',
        component: HomeComponent
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'makeGroup',
        component: MakeGroupComponent
      },
      {
        path: 'makeProject',
        component: MakeProjectComponent
      },
      {
        path : 'groups',
        component : GroupsComponent
      },
     
     {
        path : 'recommendation',
        component : RecommendationComponent
      },
      {
        path : 'reimbursements',
        component: ReimbursementsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), NbLayoutModule, NbSidebarModule
  ],
  providers : [ NbSidebarService ],
  exports: [RouterModule]
})
export class MainRoutingModule { }
