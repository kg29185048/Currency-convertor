import { useState,useEffect } from "react";

function useCurrencyinfo(currency){
    const[data,setData]=useState({})//to take the object of info of currency
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((prev)=>prev.json())
        .then((prev)=>setData(prev[currency])) //setting the key-value pair to data

    },[currency])
    console.log(data);
    
    return data
}

export default useCurrencyinfo