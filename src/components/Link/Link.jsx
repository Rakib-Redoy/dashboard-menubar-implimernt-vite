import React from 'react';

const Link = ({route}) => {
    return (
        <li className='bg-violet-700 px-3 py-1 my-1 font-semibold text-white rounded'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;