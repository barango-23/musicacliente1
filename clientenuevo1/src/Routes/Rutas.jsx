import { Route, Routes } from "react-router-dom"
import { Home } from "../Home/Home"
import { Members } from "../Members/Members"
import { Menu } from "../Shared/Menu/Menu"//traimos el menu del home para definirlo como ruta
import { Tienda } from "../Shop/Tienda"
//importamos el router y demas carpetas//
export function Rutas(){
    return(
       <>
       <Menu/>
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/integrantes"element={<Members/>}/>
   </Routes>
       </>
   //aprendimos a renderizar o abrir una ruta fija se usa route path="/nombre"
    )
}