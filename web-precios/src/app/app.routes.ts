import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: "",loadComponent: () => import("./pages/home/home").then((module)=> module.Home)},
    {path: "Login",loadComponent: () => import("./pages/login/login").then((module)=> module.Login)},
    {path: "registro",loadComponent: () => import("./pages/sing-up/sing-up").then((module)=> module.SingUp)},
    {path: "***",loadComponent: () => import("./pages/errores/errores").then((module)=> module.Errores)},

];
