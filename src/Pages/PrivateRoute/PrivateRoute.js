import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextProvider } from '../../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const { userData } = useContext(ContextProvider);
    const location = useLocation();
    if(!userData){
        return <Navigate to={'/login'} state={{from:location}} replace></Navigate>;
    }
    else{
        return children;
    }
};

export default PrivateRoute;