import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CreateOrder = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        //todo

        navigate('/ordersManagement')
    }

    const handleChange = (e: any) => {
        setAmount(e.target.value);
    }

    return(
        <div className="h-screen bg-gradient-to-b from-cyan-300 to-blue-500 text-white p-6 ">
            <h1 className="text-6xl text-center font-semibold mt-20">Create Order</h1>
            <div className="flex flex-col h-1/2 justify-around mt-10">
            <div className="flex flex-col items-center justify-around w-full">
                <h2 className="text-3xl">What do you need?</h2>
                <div className="flex flex-row  w-full justify-around mt-7 text-xl">
                <button className="bg-white text-black py-2 px-6 rounded-xl" onClick={() => setSelectedCurrency('KZT')}>KZT to KRW</button>
                <button className="bg-white text-black py-2 px-6 rounded-xl" onClick={() => setSelectedCurrency('KRW')}>KRW to KZT</button>
                </div>
            </div>
            {(selectedCurrency) ? <div className="flex flex-col items-center justify-evenly h-1/2">
                <h2 className="text-2xl text-center">Type the amount of {selectedCurrency} you want to exchange:</h2>
                <input type="number" className="bg-white rounded-2xl w-72 py-2 pl-2 border-1 border-black text-black" value={amount} onChange={handleChange}/>
                <button className="bg-white text-black py-2 px-6 rounded-xl text-xl" onClick={handleClick}>Create order</button>
            </div> : null}
            </div>
        </div>
    )
}
export default CreateOrder;