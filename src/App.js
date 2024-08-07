import AppRouter from "./router/Router";
import cartContext from "./contex/Context";
import { useEffect, useState } from "react";

function App() {

  const [cart,setCart]= useState([])

  // useEffect(()=>{

  //   const cartData= JSON.parse(localStorage.getItem('cart')) || []
  //   setCart(cartData.length)

  // },[])
  return (
    <cartContext.Provider value={{cart,setCart}}>

      <AppRouter/>
    </cartContext.Provider>
  
  );
}

export default App;