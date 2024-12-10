import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import { Login } from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";


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
    path: 'admin-login',
    element: <AdminLogin />
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
