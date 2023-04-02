import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip,ResponsiveContainer } from 'recharts';

const DashBoard = () => {
    const students = [
        {
            id: 1,
            name: 'Alice',
            physics: 90,
            chemistry: 80,
            math: 95
        },
        {
            id: 2,
            name: 'Bob',
            physics: 85,
            chemistry: 70,
            math: 92
        },
        {
            id: 3,
            name: 'Charlie',
            physics: 75,
            chemistry: 85,
            math: 80
        },
        {
            id: 4,
            name: 'David',
            physics: 80,
            chemistry: 90,
            math: 85
        },
        {
            id: 5,
            name: 'Emily',
            physics: 95,
            chemistry: 95,
            math: 90
        },
        {
            id: 6,
            name: 'Frank',
            physics: 70,
            chemistry: 75,
            math: 80
        },
        {
            id: 7,
            name: 'Grace',
            physics: 90,
            chemistry: 80,
            math: 85
        },
        {
            id: 8,
            name: 'Henry',
            physics: 85,
            chemistry: 90,
            math: 95
        },
        {
            id: 9,
            name: 'Isabella',
            physics: 80,
            chemistry: 85,
            math: 75
        },
        {
            id: 10,
            name: 'Jacob',
            physics: 92,
            chemistry: 80,
            math: 30
        },
        {
            id: 11,
            name: 'Katherine',
            physics: 95,
            chemistry: 95,
            math: 95
        },
        {
            id: 12,
            name: 'Liam',
            physics: 80,
            chemistry: 70,
            math: 85
        }
    ];

    return (
        <div className='border-2 py-5 bg-slate-200 pr-10 my-5 mx-5'>
            <ResponsiveContainer width="100%" height={500}>
            <LineChart
                data={students}
                
            >
                <Line stroke="#8884d8" dataKey="physics" />
                <Line dataKey="math" /> 
                <Line dataKey="chemistry" /> 
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DashBoard;