import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import React from 'react'
const data = [{"a":4}, {"a":5}, {"a":3}, {"a":1}]

export default function Graphic() {
    return (
        <LineChart width={window.screen.width - 100} height={document.body.clientHeight} data={data}>
        <Line type="monotone" stroke="#8884d8" dataKey = "a" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </LineChart>)}