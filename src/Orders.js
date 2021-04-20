/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './Orders.css';
import {db} from "./firebase";
import { useStatevalue } from './StateProvider';
import Order from './Order';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './Reducer';

function Orders() {
    const [{basket , user}, dispatch] = useStatevalue();
    const [orders , setOrders] = useState([]);

    useEffect (() => {
        if(user){
        db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .orderBy('created','desc')
        .onSnapshot(snapshot => (
            setOrders(snapshot.docs.map(doc =>({
                id : doc.id , 
                data : doc.data()
            })))
        ) )
    }   else {
            setOrders([])
            }
    },[user])
    return (
        <div className="orders">
             <h1> Your Orders </h1>

             <div className="oders__order">
                 {orders?.map(order => (
                     <Order order={order} />
                 ))}
                 
             </div>
        </div>
    )
}

export default Orders
