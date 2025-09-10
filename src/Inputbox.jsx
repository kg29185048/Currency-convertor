import { useId } from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    CurrencyOptions=[],
    currentCurrency="usd",
    amountDisable = false,
    currencyDisable=false,
    className = "",
}) {
   const amountinputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountinputId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id= {amountinputId}//to bind label and input using useId hook 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} //jaha se func call hoga usme usestate ka onamountchange pass krenge
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currentCurrency}
                    disabled={currencyDisable}
                    onChange={(e)=>(onCurrencyChange && onCurrencyChange(e.target.value))}
                >
                   {CurrencyOptions.map((currency)=>(
                        <option value={currency}
                                key = {currency}>   
                            {currency}
                        </option>//always use key to enhance the performance of loop
                   ))} 

                
                </select>
            </div>
        </div>
    );
}

export default InputBox;