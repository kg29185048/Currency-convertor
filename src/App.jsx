import { useState } from 'react'
import './App.css'
import InputBox from './inputbox';
import useCurrencyinfo from './useCurrencyinfo'

function App() {
    const [amount,setamount] = useState(0)
    const [from,setFrom]=useState("usd")
    const [to,setTo] = useState("inr")
    const[convertedAmount,setConvertedAmount] = useState(0)
    
    const currencyinfo = useCurrencyinfo(from)
    const currOptions = Object.keys(currencyinfo || {})

    const swap=()=>{
        setFrom(to)
        setTo(from)
        setConvertedAmount(amount)
        setamount(convertedAmount)
    }

    const convert = ()=>{
        setConvertedAmount(amount * currencyinfo[to])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://c7.alamy.com/comp/GDJPF4/abstract-finance-world-currency-background-GDJPF4.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full h-[280px] max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e)=>{
                          e.preventDefault();
                          convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount ={amount}
                                CurrencyOptions={currOptions}
                                onCurrencyChange={(currency) => {
                                    setFrom(currency);
                                }}
                                onAmountChange={(amount) => {
                                    setamount(amount);
                                }}
                                currentCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 active:bg-blue-300"
                                onClick={swap}
                            >
                            swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                CurrencyOptions={currOptions}
                                onCurrencyChange={(currency)=>{
                                    setTo(currency)
                                }}  
                                onAmountChange={(amount)=>{
                                    setamount(amount)
                                }}
                                currentCurrency={to} 
                                                       
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg active:bg-blue-300">
                        Convert {(from || "").toUpperCase()} to {(to || "").toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
  }

export default App 
