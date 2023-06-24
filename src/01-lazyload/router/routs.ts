import { lazy } from "react";


interface Route{  
    to:string; 
    path:string;
    Component:React.FC | React.LazyExoticComponent<() => JSX.Element>;
    name:string;
    exact:boolean
}

const lazy1=  lazy(()=> import(/* webpackChunkName: "LaziPage1" */'../pages/LazyPage1'));
const lazy2=  lazy(()=> import(/* webpackChunckName: "LaziPage2" */'../pages/LazyPage2'));
const lazy3=  lazy(()=> import(/* webpackChunckName: "LaziPage3" */'../pages/LazyPage3'));

export const  routs:Route[] =[
    {
        to: "/lazy1",
        path:"/lazy1",
        Component: lazy1,
        name:'lazy-1',
        exact:false
    },
    {
        to: "/lazy2",
        path:"/lazy2",
        Component: lazy2,
        name:'lazy-2',
        exact:false
    },
    {
        to: "/lazy3",
        path:"/lazy3",
        Component: lazy3,
        name:'lazy-3',
        exact:false
    }
] 