import {useState} from "react";
import {useNavigate} from "react-router-dom";


const UserOrders = () => {
    //@ts-expect-error yet to use
    const [userKRWOrder, setUserKRWOrder] = useState({});
    //@ts-expect-error yet to use
    const [userKZTOrder, setUserKZTOrder] = useState({});

    const navigate = useNavigate();

    const handleEditClick = (e:any) => {
        e.preventDefault();
        //todo
        navigate('/editOrder')
    }

    return(
        <div className="h-screen bg-gradient-to-b from-cyan-300 to-blue-500 p-6 flex flex-col items-center justify-between text-black">
            <h1 className="text-6xl text-center font-semibold mt-20 text-white">Orders Management</h1>
            {userKRWOrder ? <div className="flex flex-col items-center w-full" >
                <h1 className="text-2xl">KRW to KZT</h1>
                <input className="rounded-3xl bg-white text-2xl text-center w-full py-2 mt-3" readOnly disabled value="300,000,000 KRW to KZT"/>
                <div className="flex flex-row w-72 justify-between mt-4">
                    <button onClick={handleEditClick} className="bg-white text-black py-1  rounded-lg text-xl w-1/3">Edit</button>
                    <button className="bg-white text-black py-1  rounded-lg text-xl w-1/3">Remove</button>
                </div>
            </div> : null}
            {
                userKZTOrder ? <div className="flex flex-col items-center w-full">
                    <h1 className="text-2xl">KZT to KRW</h1>
                    <input className="rounded-3xl bg-white text-2xl text-center w-full py-2 mt-3" readOnly disabled
                           value="300,000,000 KZT to KRW"/>
                    <div className="flex flex-row w-72 justify-between mt-4">
                        <button onClick={handleEditClick} className="bg-white text-black py-1  rounded-lg text-xl w-1/3">Edit</button>
                        <button className="bg-white text-black py-1  rounded-lg text-xl w-1/3">Remove</button>
                    </div>
                </div> : null
            }
            <div className="h-1/5 w-65">{
                !userKZTOrder || !userKRWOrder ?
                    <button className="bg-white text-black w-full h-1/3 rounded-3xl text-2xl">Create new order</button> : null
            }</div>
        </div>
    )
}
export default UserOrders;