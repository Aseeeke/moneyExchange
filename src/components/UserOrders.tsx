import {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {GlobalContext} from "../App.tsx";
import {fetchUserOrders, orderRemove} from "../service/orderService.ts";


const UserOrders = () => {

    const {userKZTOrder,setUserKZTOrder,
        userKRWOrder, setUserKRWOrder,setCurrentEditOrder, setLoader} = useContext(GlobalContext);

    useEffect(() => {
        const fetchOrders = async () => {
            setLoader(true);
            try {
                const orders = await fetchUserOrders();
                console.log("Fetched orders:", orders);
                setUserKZTOrder(orders.find(order => order.currency === 'KZT'));
                setUserKRWOrder(orders.find(order => order.currency === 'KRW'));
            } catch (error) {
                console.error("Error fetching orders:", error);
            } finally {
                setLoader(false);
            }
        };

        fetchOrders();
    }, []);



    const navigate = useNavigate();

    const handleEditClickKRW = (e:any) => {
        e.preventDefault();
        if(userKRWOrder) setCurrentEditOrder(userKRWOrder)
        //todo
        navigate('/editOrder')
    }
    const handleDeleteClickKRW = async (e:any) => {
        e.preventDefault();
        setLoader(true);
        if(userKRWOrder) {
            await orderRemove({orderId: userKRWOrder._id})
            setUserKRWOrder(undefined)
            console.log('deleted')
            setLoader(false);
        }
        else {
            setLoader(false);
            throw Error
        }

    }
    const handleEditClickKZT = (e:any) => {
        e.preventDefault();
        if(userKZTOrder) setCurrentEditOrder(userKZTOrder)
        //todo
        navigate('/editOrder')
    }
    const handleDeleteClickKZT = async (e:any) => {
        e.preventDefault();
        setLoader(true);
        if(userKZTOrder) {
            await orderRemove({orderId: userKZTOrder._id})
            setUserKZTOrder(undefined);
            setLoader(false);
        }
        else {
            setLoader(false);
            throw Error
        }
    }

    const handleCreateClick = () => {
        navigate('/createOrder')
    }

    return(
        <div className="h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-red-400 p-6 flex flex-col items-center justify-between text-black">
            <h1 className="text-6xl text-center font-semibold mt-20 text-white">Orders Management</h1>
            {userKRWOrder ? <div className="flex flex-col items-center w-full" >
                <h1 className="text-3xl text-white">KRW to KZT</h1>
                <input className="rounded-3xl bg-white text-2xl text-center w-full py-2 mt-3" readOnly disabled value={`${userKRWOrder.amount} KRW to KZT `}/>
                <div className="flex flex-row w-72 justify-between mt-4">
                    <button onClick={handleEditClickKRW} className="bg-white text-black py-1  rounded-lg text-xl w-1/3">Edit</button>
                    <button onClick={handleDeleteClickKRW} className="bg-white text-black py-1  rounded-lg text-xl w-1/3">Remove</button>
                </div>
            </div> : null}
            {
                userKZTOrder ? <div className="flex flex-col items-center w-full ">
                    <h1 className="text-3xl text-white">KZT to KRW</h1>
                    <input className="rounded-3xl bg-white text-2xl text-center w-full py-2 mt-3" readOnly disabled
                           value={`${userKZTOrder.amount} KZT to KRW `}/>
                    <div className="flex flex-row w-72 justify-between mt-4">
                        <button onClick={handleEditClickKZT} className="bg-white text-black py-1  rounded-lg text-xl w-1/3">Edit</button>
                        <button onClick={handleDeleteClickKZT} className="bg-white text-black py-1  rounded-lg text-xl w-1/3">Remove</button>
                    </div>
                </div> : null
            }
            <div className="h-1/5 w-65">{
                !userKZTOrder || !userKRWOrder ?
                    <button onClick={handleCreateClick} className="bg-white text-black w-full h-1/3 rounded-3xl text-2xl">Create new order</button> : null
            }</div>
        </div>
    )
}
export default UserOrders;