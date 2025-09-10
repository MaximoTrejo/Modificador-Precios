import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: "",loadComponent: () => import("./pages/login/login").then((module)=> module.Login)},
    {path: "articulos",loadComponent: () => import("./pages/articulos/articulos").then((module)=> module.Articulos)},
    {path: "servicios",loadComponent: () => import("./pages/servicios/servicios").then((module)=> module.Servicios)},
    {path: "reservas",loadComponent: () => import("./pages/reservas/reservas").then((module)=> module.Reservas)},
    {path: "registro",loadComponent: () => import("./pages/sing-up/sing-up").then((module)=> module.SingUp)},
    {path: "***",loadComponent: () => import("./pages/errores/errores").then((module)=> module.Errores)},

];
