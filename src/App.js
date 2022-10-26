import { RouterProvider } from "react-router-dom";
import { router } from "./Router's/Router";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { ContextProvider } from "./UserContext/UserContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {theme} = useContext(ContextProvider);
  return (
    <div className={`${theme?'bg-light':'bg-secondary'}`} style={{minHeight:'100vh'}}>
      <ToastContainer />
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
