import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({children}) => {
  const user = localStorage.getItem('user');
  const location = useLocation();
  // console.log(first)

  if(user){
    return children;
  }
  return <Navigate state={{ from: location.pathname }} to={'/login'} replace></Navigate>
};

export default PrivateRoute;