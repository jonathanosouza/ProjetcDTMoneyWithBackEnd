import { Outlet } from "react-router-dom";
import { Home } from "../../pages/Home/Home";
import { Header } from "../Header/Header";
import { LayoutContainer } from "./DefaultLayoutstyles";


export function DefaultLayout(){
  return(
    <LayoutContainer>
      <Header/>
      <Home/>
      <Outlet/>
    </LayoutContainer>

  )
}