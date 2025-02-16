import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {GlobalContext} from "../App.tsx";
import {TelegramUser} from "../../types";


const HomePage = () => {
    const [user] = useState<TelegramUser | null>(window.Telegram.WebApp.initDataUnsafe.user);

    const {setCurrency} = useContext(GlobalContext)

    const navigate = useNavigate();

    const handleCurrencyClickKZT = () => {
        setCurrency('KZT')
        navigate("/searchBar")
    }
    const handleCurrencyClickKRW = () => {
        setCurrency('KRW')
        navigate("/searchBar")
    }

    if(!user || !user.username) {
        return (
            <div className="h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 text-white p-6 flex flex-col items-center justify-evenly text-center overflow-hidden text-4xl">
                <div>
                    Please create Telegram username to use this app
                </div>
                <div className="text-6xl">
                    Sorry!
                </div>
            </div>
        )
    }

    return (
       <div className="h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 text-white p-6 flex flex-col items-center justify-evenly overflow-hidden ">
           <div className="flex flex-col h-1/3 justify-around ">
           <h1 className="text-4xl text-center font-semibold">Hello, {user?.username || 'unknown user'}!</h1>
           </div>
           <div className=" w-full text-center">
               <h1 className="text-2xl">What do you need?</h1>
               <div className="flex flex-row justify-around mt-7 text-2xl ">
                   <button onClick={handleCurrencyClickKZT} className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-3xl active:bg-gray-200">KZT</button>
                   <button onClick={handleCurrencyClickKRW} className="bg-white hover:bg-gray-200 text-black py-2 px-12 rounded-3xl active:bg-gray-200">KRW</button>
               </div>
           </div>
           <div className="mt-30 flex flex-col h-1/5 justify-around text-2xl">
               <button onClick={() => navigate('/ordersManagement')} className="bg-white hover:bg-gray-200 text-black py-4 px-10 rounded-3xl active:bg-gray-200">Manage my orders</button>
           </div>
           <h1 className="text-center text-xl" onClick={() => {window.Telegram.WebApp.openTelegramLink(`https://t.me/@aseeeeke`)}}>If you find any bugs, please let me know @aseeeeke</h1>
       </div>
    )
}

export default HomePage;