import Home from './ui/Home.jsx';
import Menu from './features/menu/Menu.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './features/cart/CartSlice.jsx';
import Order from './features/order/Order.jsx';
import CreateOrder from './features/order/CreateOrder.jsx';


const router= createBrowserRouter([
  {path:'/',
  element: <Home />
  },
  {
    path:'/menu',
    element: <Menu />,
  },
  {
  path:'/cart',
    element: <Cart/>,
  },
  {
    path:'/order/new',
    element: <CreateOrder />,
  },
  {
    path:'/order/:orderId',
    element: <Order/>,
  }
])

function App() {
  return <RouterProvider router={router}/>
}
export default App;
