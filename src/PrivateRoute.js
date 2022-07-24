
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const auth = localStorage.getItem("terminal-info"); // determine if authorized, from context or however you're doing it

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return auth ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;

























// const useAuth = () => {
//     const user = localStorage.getItem('key');
//     return user ;
//   };

// const PrivateRoute=({ children }) =>{
//   const user = localStorage.getItem('terminal-info');

//   if(!user){
//   return <Navigate to="/" />;
// }
// }













// export default PrivateRoute;




// import { Navigate, Outlet } from "react-router-dom";

// const useAuth = () => {
//   const user = localStorage.getItem('terminal-info');
//  return user;
// };

// const PrivateRoute = () => {
//   const isAuth = useAuth();
//   return isAuth ? <Outlet /> : <Navigate to="/" />;
// };

// export default PrivateRoute;


// // import React from 'react'
// // import { Navigate } from 'react-router-dom'

// // class ProtectedRoute extends React.Component {

// //     render() {
// //         const Component = this.props.component;
// //         const isAuthenticated = localStorage.getItem('key');
       
// //         return isAuthenticated ? (
// //             <Component />
// //         ) : (
// //             <Navigate to={{ pathname: '/' }} />
// //         );
// //     }
// // }

// // export default ProtectedRoute;




// import React from "react";
// import { Navigate,Route, Routes } from "react-router-dom";

// function PrivateRoute({ component: Component, ...restOfProps }) {
//   const isAuthenticated = localStorage.getItem("terminal-info");
//   console.log("this", isAuthenticated);

//   return (
//     <Routes>
//     <Route
//       {...restOfProps}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Navigate to="/" />
//       }
//     />
//     </Routes>
//   );
// }

// export default PrivateRoute;


