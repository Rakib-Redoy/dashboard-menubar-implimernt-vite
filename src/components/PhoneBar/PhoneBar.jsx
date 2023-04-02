import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const [phone, setPhone] = useState([])
    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const loadedData = data.data.data;
            const phonesData = loadedData.map(phone => {
                const parts = phone.slug.split('-')
                const price = parseInt(parts[1])
                const phoneInfo = {
                    name: phone.phone_name,
                    price: price
                }
                return phoneInfo;
            })
            setPhone(phonesData)
        })
    },[])
    return (
        <div className='border-2 py-5 bg-slate-200 pr-10 my-5 mx-5'>
            <ResponsiveContainer width="100%" height={500}>
                <BarChart
                    
                    data={phone}
                >
                    <Bar dataKey="price" fill="#8884d8" />
                    <XAxis dataKey="name" ></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PhoneBar;