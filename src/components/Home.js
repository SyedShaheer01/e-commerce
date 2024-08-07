import DrawerAppBar from "../components/AppBar"
import MultiActionAreaCard from "../components/Card"
import axios from 'axios'
import { useEffect, useState } from "react"
import BasicModal from "./modal";
import {useSearchParams} from 'react-router-dom'
// import { Alert } from "@mui/material";



function Home(){
    const [products, setProducts] = useState([]);
    const [open, setOpen] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const [detail, setDetail] = useState({});

    useEffect(() =>{
        const category= searchParams.get('category')
        if(!category || category=='all'){

            axios('https://fakestoreapi.com/products')
            .then((res)=> setProducts(res.data))
            .catch((err)=> console.log(err))
            
            
            
        }
        }, [searchParams])
    // console.log("products",products)


    useEffect(()=>{
        const category= searchParams.get('category')
        if(category && category!=='all'){

            axios(`https://fakestoreapi.com/products/category/${category}`)
            .then((res)=> setProducts(res.data))
            .catch((err)=> console.log(err))
            console.log(category)
        }




    },[searchParams])

    const viewDetails=(id)=>{
        axios(`https://fakestoreapi.com/products/${id}`)
        .then((res)=> {
            setDetail(res.data)
            setOpen(true)
            
        })
        .catch((err)=> console.log(err))
        console.log(id)
        
        

}

    return(
        <div style={{padding:20}}>

         <DrawerAppBar detail={detail} product={products}/>
             <BasicModal products={products} detail={detail} open={open} handleClose={()=>{setOpen(false)}}/>
         <div style={{ display:"flex", flexWrap:"wrap", justifyContent:"space-around"}}>
            {products.map((v,i)=>{
                
                return <MultiActionAreaCard product={v} key={i} viewDetails={viewDetails}/>
               
            })}
            </div>
        </div>
    )
}
export default Home