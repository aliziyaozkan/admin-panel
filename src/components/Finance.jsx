import React, { useState } from 'react';
import { Container, Button } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const initialData = [
  { id: 1, month: 'Ocak', gelir: 50000, gider: 30000, ciro: 45000, kar: 15000 },
  { id: 2, month: 'Şubat', gelir: 60000, gider: 35000, ciro: 55000, kar: 20000 },
  { id: 3, month: 'Mart', gelir: 70000, gider: 40000, ciro: 65000, kar: 25000 },
  { id: 4, month: 'Nisan', gelir: 65000, gider: 38000, ciro: 62000, kar: 24000 },
  { id: 5, month: 'Mayıs', gelir: 80000, gider: 42000, ciro: 75000, kar: 28000 },
];

const FinancialManagement = () => {
  const [financialData, setFinancialData] = useState(initialData);

  // Yeni veri ekleme
  const handleAddData = () => {
    const newData = {
      id: financialData.length + 1,
      month: 'Haziran',
      gelir: 100000,
      gider: 45000,
      kar: 55000
    };
    setFinancialData([...financialData, newData]);
  };

  // Veri silme
  const handleDeleteData = (id) => {
    setFinancialData(financialData.filter(data => data.id !== id));
  };

  return (
    <Container className="py-8">
      {/* Başlık */}
      <h1 className='font-bold text-5xl mb-3 bg-gray-300 rounded-2xl flex justify-center items-center p-3 w-fit'>Finans Verileri</h1>

      {/* Finansal Veriler Tablosu */}
      <div className="overflow-x-auto mb-3">
        <table className="min-w-full table-auto border-collapse border border-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-3 py-1 text-left">Ay</th>
              <th className="px-3 py-1 text-left">Gelir</th>
              <th className="px-3 py-1 text-left">Gider</th>
              <th className="px-3 py-1 text-left">Ciro</th>
              <th className="px-3 py-1 text-left">Kar</th>
              <th className="px-3 py-1 text-left">İşlemler</th>
            </tr>
          </thead>
          <tbody>
            {financialData.map((data) => (
              <tr key={data.id} className="border-b hover:bg-gray-50">
                <td className="px-3 py-1">{data.month}</td>
                <td className="px-3 py-1">{data.gelir} TL</td>
                <td className="px-3 py-1">{data.gider} TL</td>
                <td className="px-3 py-1">{data.ciro} TL</td>
                <td className="px-3 py-1">{data.kar} TL</td>
                <td className="px-3 py-1">
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleDeleteData(data.id)}
                    size="small"
                  >
                    Sil
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Yeni Veri Ekle */}
      <Button variant="contained" color="gray" onClick={handleAddData} style={{ marginBottom: 10, fontWeight: '700', backgroundColor: 'Gray' }}>
        Yeni Veri Ekle
      </Button>

      {/* Gelir, Gider, Kar Grafiği */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">Gelir, Gider ve Kar Grafiği</h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={financialData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="gelir" stroke="blue" strokeWidth={3} />
            <Line type="monotone" dataKey="gider" stroke="red" strokeWidth={3} />
            <Line type="monotone" dataKey="kar" stroke="green" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Container>
  );
};

export default FinancialManagement;
