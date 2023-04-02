import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div>
            <h1 className='text-5xl text-center text-purple-950 bg-purple-300 font-bold p-4 '>Awesome Affordable Price</h1>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;