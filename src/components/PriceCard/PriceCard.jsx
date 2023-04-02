import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    console.log()
    return (
        <div className=' my-3 p-3 rounded-xl bg-slate-300 flex flex-col'>
            <h1 className=''>
                <span className='text-7xl font-extrabold text-violet-700'>{price.price}</span>
                <span className='text-2xl font-bold'>/Month</span></h1>
            <h1 className='text-3xl my-6 font-bold'>{price.name}</h1>
            <div className='mb-8'>
                <p className='underline font-bold text-slate-900 text-xl'>Features: </p>
                {
                    price.features.map((feature, index) => <Feature
                        feature={feature}
                        key={index + 1}
                    ></Feature>)
                }
            </div>
            <button className="btn btn-sm btn-outline btn-danger mt-auto">Buy now</button>

        </div>
    );
};

export default PriceCard;