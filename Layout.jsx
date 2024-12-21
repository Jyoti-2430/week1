import React from "react";
const Layout =({children}) =>{
  return(
    <div>
        <sidebar /> 
        {children}
    </div>
  )
}
export default Layout
