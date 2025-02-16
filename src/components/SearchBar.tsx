import {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {GlobalContext, userOrder} from "../App.tsx";
import {findOrders} from "../service/orderService.ts";

const SearchBar = () => {
    const [amount, setAmount] = useState('')

    const {currency, setResults,setLoader} = useContext(GlobalContext);

    const navigate = useNavigate();

    const handleChange = (e:any) => {
        setAmount(e.target.value);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoader(true);
        try{
            if(currency && amount) {
                const result: userOrder[] = await findOrders({
                    amount: Number(amount),
                    currency: currency,
                })
                if(result) {
                    const sortedResult = result
                        .filter((order): order is NonNullable<userOrder> => order !== undefined)
                        .sort((a, b) => a.amount - b.amount);
                    setResults(sortedResult);
                }


                navigate('/searchResults')
            }
        }
        catch(error) {
            console.log(error);
            navigate('/')
        }
        finally {
            setLoader(false);
        }
    }

    return (
        <div className="h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 text-white p-6 flex flex-col items-center justify-around overflow-hidden">
            <h1 className="text-5xl text-center font-semibold"></h1>
            <div className="flex flex-col h-1/3 justify-evenly items-center w-full">
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-around h-3/4" >
                    <h3 className="text-3xl text-center">Enter the amount of {currency} you want to get:</h3>
                    <input value={amount} onChange={handleChange} type="number"
                           className="bg-white rounded-2xl w-80  h-1/6 border-1 border-black text-black pl-2 text-xl"/>
                    <button type="submit"
                            className="bg-white text-black py-2 px-10 rounded-xl text-xl">Search
                    </button>
                </form>
            </div>
            <h3 className="text-center text-2xl h-1/2 ">Please note that only orders with an amount of at least the
                entered value will be displayed</h3>

        </div>
    )
}
export default SearchBar;