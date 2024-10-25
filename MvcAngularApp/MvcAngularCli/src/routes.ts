import { Routes } from "@angular/router";
import { SimpleComponentComponent } from "./components/simple-component/simple-component.component";
const routeConfig:Routes =[
    {
        path:'',
        pathMatch: 'full',
        component:SimpleComponentComponent,
        title:'Simple Page',
       
    },
    {
        path:'/simple',
        pathMatch: 'full',
        component:SimpleComponentComponent,
        title:'Simple Page',
       
    }
];console.log(routeConfig);
    export default routeConfig;