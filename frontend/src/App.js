import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import NavBar from './components/Navbar';

const Layout = () => {
  return(
    <>
      <main className='flex flex-col min-h-dvh'>
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
