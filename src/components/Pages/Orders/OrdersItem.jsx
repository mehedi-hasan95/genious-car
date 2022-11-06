import React, { useEffect, useState } from 'react';

const OrdersItem = ({order, handleDelete}) => {
    const {_id, email, name, title, price, service} = order;

    const [orderImg, setOrderImg] = useState([])

    useEffect( () => {
        fetch(`http://localhost:5000/services/${service}`)
        .then (res => res.json())
        .then (data => setOrderImg(data))
    }, [service])

    return (
        <tbody>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)}>X</button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask rounded-lg w-36 h-36">
                                {
                                    orderImg?.img && <img src={orderImg?.img} alt={title} />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <p>{title}</p>
                    <br />
                    <span className="badge badge-ghost badge-sm text-lg">{price}</span>
                </td>
                <td>{email}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </tbody>
    );
};

export default OrdersItem;