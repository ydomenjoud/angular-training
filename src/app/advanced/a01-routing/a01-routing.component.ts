import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-a01-routing',
  templateUrl: './a01-routing.component.html',
  styleUrls: ['./a01-routing.component.css']
})
export class A01RoutingComponent implements OnInit {

  routerModuleCode = `
const routes: Routes = [
  {
    path: 'auth', component: AuthContainerComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
    ]
  },
  {
    path: 'todo', children: [
      { path: 'list', component: TodoListComponent},
      { path: 'detail/:id', component: TodoDetailComponent},
      { path: 'delete', component: TodoDeleteComponent},
      { path: 'create', component: TodoCreateComponent},
      { path: '**', redirectTo: '/todo/list'},
    ]
  },
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
`;
  moduleCode = `
@NgModule({
  imports: [
    CommonModule,
    AdvancedRoutingModule,
  ],
  declarations: [
  ]
})
export class AdvancedModule {
}

`;

  constructor() { }

  ngOnInit() {
  }

}
