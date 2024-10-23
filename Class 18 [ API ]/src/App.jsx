import React from 'react'
import axios from './utils/axios'

const App = () => {
    // https://fakestoreapi.com/products
    // https://fakestoreapi.com/carts
    // https://fakestoreapi.com/users
    
    const getuser = async () =>{
     try {
        const {data} =await axios.get("/users");
        console.log(data);
        
     } catch (error) {
         console.log(error);
        }
    }
    const getcart = async () =>{
     try {
        const {data} =await axios.get("/carts");
        console.log(data);
        
     } catch (error) {
         console.log(error);
        }
    }
    const getproduct = async () =>{
     try {
        const {data} =await axios.get("/products");
        console.log(data);
        
     } catch (error) {
         console.log(error);
        }
    }
    // getuser();
    // getcart();
    // getproduct();
    
    return (

        <>
        <div className='flex justify-center items-center flex-col mt-5'>
            <h1 className='text-2xl'>API of User</h1>
            <button className='mt-5 p-2 text-red-50 rounded-md bg-red-400' onClick={getuser}>Get User</button>
        </div>
        <div className='flex justify-center items-center flex-col mt-5'>
            <h1 className='text-2xl'>API of Cart</h1>
            <button className='mt-5 p-2 text-red-50 rounded-md bg-green-400' onClick={getcart}>Get Cart</button>
        </div>
        <div className='flex justify-center items-center flex-col mt-5'>
            <h1 className='text-2xl'>API of Product</h1>
            <button className='mt-5 p-2 text-red-50 rounded-md bg-blue-400' onClick={getproduct}>Get Product</button>
        </div>
    
        </>
)
}

export default App

