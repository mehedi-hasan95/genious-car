import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { price, title, _id } = useLoaderData();

    const handleCheckOut = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const message = form.message.value;

        const order = {
            service: _id, title, name, email, phone, message, price
        }

        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then((response) => response.json())
            .then((data) => {
                if(data.acknowledged) {
                    toast.success('You have sucessfully added this product', {autoClose: 500});
                    form.reset();
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }


    return (
        <div className='container mx-auto'>
            <form onSubmit={handleCheckOut} className="bg-[#F3F3F3] max-w-xl p-8 mx-auto space-y-6 rounded-md shadow">
                <h2 className="w-full text-3xl font-bold leading-tight text-center mb-10">Buy Now</h2>
                <h2 className="w-full text-2xl font-bold leading-tight">{title}</h2>
                <h3 className='text-xl font-semibold text-custom-orange'>Price: ${price}</h3>
                <div>
                    <label className="block mb-1 ml-1">Name</label>
                    <input type="text" placeholder="Your name" name='name' required="" className="block w-full p-2 rounded" />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Email</label>
                    <input type="email" name='email' placeholder="Your email" required="" className="block w-full p-2 rounded" />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Phone</label>
                    <input type="tel" placeholder="Your Phone" required="" name='phone' className="block w-full p-2 rounded" />
                </div>
                <div>
                    <label className="block mb-1 ml-1">Message</label>
                    <textarea type="text" placeholder="Message..." name='message' className="block w-full p-2 rounded autoexpand"></textarea>
                </div>
                <div>
                    <button type="submit" className="w-full bg-custom-orange text-white px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 ">Send</button>
                </div>
            </form>
        </div>
    );
};

export default CheckOut;