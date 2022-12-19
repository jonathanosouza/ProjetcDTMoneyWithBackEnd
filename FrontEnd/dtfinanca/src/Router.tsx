import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Home } from "./pages/Home/Home";
import { DashBoard } from "./pages/DashBoard/DashBoard";



export function Router() {

return (

    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/transition" element={<DashBoard/>} />
      </Route>
    </Routes>


)


}