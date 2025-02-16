import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {CurrencyContext} from "../App.tsx";


const HomePage = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        console.log(window.Telegram.WebApp.initDataUnsafe.user)
    }, [])

    const {currency, setCurrency} = useContext(CurrencyContext)

    const navigate = useNavigate();

    const handleCurrencyClickKZT = () => {
        setCurrency('KZT')
        navigate("/searchBar")
    }
    const handleCurrencyClickKRW = () => {
        setCurrency('KRW')
        navigate("/searchBar")
    }

    return (
       <div className="h-screen bg-gradient-to-b from-cyan-300 to-blue-500 text-white p-6 flex flex-col items-center">
           <div className="flex flex-col h-1/3 justify-around mt-8">
           <h1 className="text-6xl text-center font-semibold ">Money Exchange</h1>
           <h1 className="text-5xl text-center ">Hello, {user.username}!</h1>
           </div>
           <div className="mt-5 w-full text-center">
               <h1 className="text-4xl">What do you need?</h1>
               <div className="flex flex-row justify-around mt-7 text-2xl ">
                   <button onClick={handleCurrencyClickKZT} className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-3xl active:bg-gray-200">KZT</button>
                   <button onClick={handleCurrencyClickKRW} className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-3xl active:bg-gray-200">KRW</button>
               </div>
           </div>
           <div className="mt-30 flex flex-col h-1/5 justify-around text-2xl">
               <button onClick={() => navigate('/ordersManagement')} className="bg-white hover:bg-gray-200 text-black py-4 px-10 rounded-3xl active:bg-gray-200">Manage my orders</button>
           </div>
           <h1 className="text-center text-xl">If you find any bugs, please let me know @aseeeeke</h1>
       </div>
    )
}

export default HomePage;