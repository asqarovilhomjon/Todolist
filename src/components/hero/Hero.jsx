import React, { useState } from 'react';
import rasm from "../../assets/profile.png";
import { FaTrash } from "react-icons/fa";

const Hero = () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = (e) => {
        e.preventDefault();
        let date = new Date();
        let hours = String(date.getHours()).padStart(2, '0');
        let minutes = String(date.getMinutes()).padStart(2, '0');
        
        let object = {
            id: new Date().getTime(),
            text,
            price,
            description,
            time: `${hours}:${minutes}`
        };
        
        setData((prev) => [...prev, object]);
        setText("");
        setPrice("");
        setDescription("");
    };
    const handleDelete = (id)=>{
        setData(data.filter(item=> item.id !== id))
    }

    return (
        <div className='bg-gray-100'>
            <div className='container mx-auto py-20'>
                <form
                    className='flex flex-col items-center gap-5 w-96 m-auto border border-gray-500 p-4 shadow-xl bg-zinc-50 rounded-2xl'
                    onSubmit={handleCreate}
                >
                    <input
                        className='border border-gray-300 pl-5 w-full rounded-lg outline-none text-xl py-2'
                        type="text"
                        placeholder='Word'
                        required
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                    />
                    <input
                        className='border border-gray-300 pl-5 w-full rounded-lg outline-none text-xl py-2'
                        type="number"
                        placeholder='Price'
                        required
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    <input
                        className='border border-gray-300 pl-5 w-full rounded-lg outline-none text-xl py-2'
                        type="text"
                        placeholder='About'
                        required
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <button className='w-1/2 border rounded-xl bg-blue-800 py-1 text-gray-50 hover:bg-blue-900 hover:scale-[1.02] active:scale-[.95] text-2xl text-center'>
                        Create
                    </button>
                </form>
                <div className="w-full flex gap-5 mt-10 mb-12 p-6 grid-cols-1">
                    {data.map((item) => (
                        <div className='p-4 shadow-md bg-gray-300 rounded-2xl w-76' key={item.id}>
                            <div className='w-full'>
                                <img
                                    className='size-30 w-full rounded-lg transform-gpu cursor-pointer opacity-90'
                                    src={rasm}
                                    alt=""
                                />
                            </div>
                            <div className='text-center pt-3 flex flex-col gap-3'>
                                <p className='text-2xl text-slate-900'>{item.text}</p>
                                <p className='text-2xl font-semibold'>{item.price}$</p>
                                <p className='text-xl'>{item.description}</p>
                                <div className='flex justify-between'>
                                <span>{item.time}</span>
                                <button onClick={()=> handleDelete(item.id)}><FaTrash/></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Hero;
