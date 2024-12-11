import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import { Login } from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import MailInfo from "./components/Adminlogin/MailInfo";
import DualLogin from "./components/Adminlogin/DualLogin";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/register',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin-login',
    element: <AdminLogin />
  },
  {
    path:'/mail-info',
    element:<MailInfo/>
  },
  {
    path:'/dual-login',
    element:<DualLogin/>
  }
  
]);


function App() {


  return (
    <>
      <RouterProvider router={router} />
    </>
    // <BrowserRouter>
    //   <Home />
    // </BrowserRouter>

  )
}

export default App
