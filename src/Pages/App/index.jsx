import { useRoutes, BrowserRouter} from 'react-router-dom'
import { ShoopingCartProvider} from '../../Context'
import Home from '../Home'
import {MyOrders} from '../MyOrders'
import { MyOrder} from '../MyOrder'
import { MyAccount} from '../MyAccount'
import {SignIn} from '../SignIn'
import { NotFound} from '../NotFound'
import { Navbar } from '../../Components/Navbar'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes([
    {path: '/',element: <Home/>},
    {path: '/category/:category',element: <Home/>},
    {path: '/my-orders',element: <MyOrders/>},
    {path: '/my-order',element: <MyOrder/>},
    {path: '/my-account',element: <MyAccount/>},
    {path: '/sig-in',element: <SignIn/>},
    {path: "/*",element: <NotFound/>}
  ]);

  return routes;
}


const App = () =>{
  return (
    <ShoopingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoopingCartProvider>
    
  )
}

export default App
