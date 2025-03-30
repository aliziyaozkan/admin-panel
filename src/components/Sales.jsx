import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Ocak', Satış: 1855, Beklenen : 2000 },
  { name: 'Şubat', Satış: 3100, Beklenen : 2000 },
  { name: 'Mart', Satış: 1950, Beklenen : 2000 },
  { name: 'Nisan', Satış: 2780, Beklenen : 2000 },
  { name: 'Mayıs', Satış: 3450, Beklenen : 2000 },
  { name: 'Haziran', Satış: 3000, Beklenen : 2000 },
  { name: 'Temmuz', Satış: 3654, Beklenen : 2000 },
];


const BestSelling = [
  { ad: 'Ürün A', sales: 1257 },
  { ad: 'Ürün B', sales: 832 },
  { ad: 'Ürün C', sales: 648 },
  { ad: 'Ürün D', sales: 451 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347'];


const Channels = [
  { isim: 'Instagram', saless: 4500 },
  { isim: 'Trendyol', saless: 900 },
  { isim: 'Websitesi', saless: 2800 },
  { isim: 'Mağaza', saless: 2000 },
];

function Sales() {
  return (
    <div className="sales-chart-container">
      <h3 className='font-sans font-semibold text-4xl ml-5 mt-3 bg-gray-300 rounded-2xl  w-3/12 items-center justify-center flex h-16'>Satış Verileri</h3>
      <div className='mt-5 '>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart className='font-bold' data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Satış" fill='#008000' name='Satış' />
          <Bar dataKey="Beklenen" fill="#ff0000" name='Beklenen Satış' />

        </BarChart>
      </ResponsiveContainer>
      </div>



      <div className='flex flex-row'> 
        {/****** EN ÇOK SATILANLAR */}
        <h1 className='ml-3 font-sans font-semibold text-2xl   bg-gray-300 rounded-2xl h-4/12 w-2/12 flex justify-center'> En Çok Satanlar</h1>
      <ResponsiveContainer  width="30%" height={325}>
        <PieChart className='font-bold text-2xl'>
          <Pie
            data={BestSelling}
            dataKey="sales"
            nameKey="ad"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>

      {/****** SATIŞ KANALLARI */}
        <h1  className='ml-3 font-sans font-semibold text-2xl   bg-gray-300 rounded-2xl h-4/12 w-2/12 flex justify-center'> Satış Kanalları </h1>
      <ResponsiveContainer  width="50%" height={325}>
          <BarChart className='font-bold' data={Channels}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="isim" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="saless" fill="#FF6347" name="Satış " />
          </BarChart>
        </ResponsiveContainer>
         </div>


    </div>
  );
}

export default Sales;
