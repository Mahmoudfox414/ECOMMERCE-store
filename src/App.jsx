import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Component/Layout/Layout"
import Home from "./Component/Home/Home"
import Movie from "./Component/Movie/Movie"
import Tv from "./Component/Tv/Tv"
import Login from "./Component/Login/Login"
import Register from "./Component/Register/Register"
import Logout from "./Component/Logout/Logout"
import Hot from "./Component/Hot/Hot"

let routers= createBrowserRouter([
  {path:"",element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:"movie",element:<Movie/>},
  {path:"tv",element:<Tv/>},
  {path:"hot",element:<Hot/>},
  {path:"login",element:<Login/>},
  {path:"register",element:<Register/>},
  {path:"logout",element:<Logout/>},

  ]}
])
export default function App() {
  return <>
<RouterProvider router={routers}></RouterProvider>
  
  </>
}
