import axios from 'axios';
const baseURL = '/api/orders'

const telegramUser = window.Telegram.WebApp.initDataUnsafe.user

export type detailsPost = {
    firstCurrency: string,
    amount : number
}
export type detailsEdit = {
    orderId: string,
    amount: number
}
export type detailsDelete = {
    orderId: string,
}
export type detailsFind = {
    amount: number,
    currency: string
}


export const orderPost = async (details: detailsPost) => {
    const order = {
        userId: String(telegramUser.id),
        name: telegramUser.first_name,
        username: telegramUser.username,
        firstCurrency: details.firstCurrency,
        amount: details.amount,
    }
    try {
        const response = await axios.post(baseURL, order);
        return response.data;
    }
    catch (error) {
        console.error('Error posting order', error)
        throw error;
    }

}

export const orderEdit = async (details: detailsEdit) => {
    const response = await axios.put(`${baseURL}/${details.orderId}`, {
        amount: details.amount,
        userId: telegramUser.id
    });
    return response.data;
}
export const orderRemove = async (details: detailsDelete) => {
    const response = await axios.delete(`${baseURL}/${details.orderId}/${telegramUser.id}`);
    return response.data;
}
export const findOrders = async (details: detailsFind) => {
    const response = await axios.get(`${baseURL}/${telegramUser.id}/${details.currency}/${details.amount}`)
    return response.data;
}
export const fetchUserOrders = async () => {
    const response = await axios.get(`${baseURL}/${telegramUser.id}`);
    return response.data;
}

