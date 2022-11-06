import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import OrdersItem from './OrdersItem';

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user?.email])

    const handleDelete = id => {
        const proceed = window.confirm("Do you want to delete this Item?");
        if(proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
            .then (res => res.json())
            .then (data => {
                console.log(data);
                if(data.deletedCount) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    setOrders(remaining);
                }
            })
        }
    }

    return (
        <div className='container mx-auto'>
            <h2 className='text-xl'>You have total: <span className=' text-custom-orange font-bold'>{orders.length}</span></h2>
            {/* Please Mark that  */}
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        orders.map(order => <OrdersItem key={order._id} order={order} handleDelete={handleDelete}></OrdersItem>)
                    }
                </table>
            </div>
            {/* End Mark  */}

        </div>
    );
};

export default Orders;