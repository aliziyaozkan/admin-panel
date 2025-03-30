import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Container } from '@mui/material';

const Inventory = () => {
  // Başlangıçta gösterilecek stok verileri
  const [rows, setRows] = useState([
    { id: 1, productName: 'Klasik Beyaz T-Shirt', category: 'T-shirt', size: 'M', color: 'Beyaz', price: '150 TL', totalStock: 100, sold: 45 },
    { id: 2, productName: 'Kot Pantolon', category: 'Pantolon', size: 'L', color: 'Mavi', price: '200 TL', totalStock: 75, sold: 30 },
    { id: 3, productName: 'Spor Ayakkabı', category: 'Ayakkabı', size: '40', color: 'Siyah', price: '300 TL', totalStock: 50, sold: 20 }
  ]);

  // Kolonlar (başlıklar ve veri alanları)
  const columns = [
    { field: 'productName', headerName: 'Ürün Adı', width: 180, editable: true },
    { field: 'category', headerName: 'Kategori', width: 150, editable: true },
    { field: 'size', headerName: 'Beden', width: 100, editable: true },
    { field: 'color', headerName: 'Renk', width: 150, editable: true },
    { field: 'price', headerName: 'Fiyat', width: 120, editable: true },
    { field: 'totalStock', headerName: 'Toplam Stok', width: 160, editable: true },
    { field: 'sold', headerName: 'Satılan Miktar', width: 160, editable: true },
    {
      field: 'actions', headerName: 'İşlemler', width: 150, renderCell: (params) => {
        return (
          <Button variant="contained" color="secondary" onClick={() => handleDelete(params.row.id)}>
            Sil
          </Button>
        );
      }
    }
  ];

  // Satır ekleme fonksiyonu
  const handleAddRow = () => {
    const newRow = {
      id: rows.length + 1,
      productName: '',
      category: '',
      size: '',
      color: '',
      price: '',
      totalStock: 0,
      sold: 0
    };
    setRows([...rows, newRow]);
  };

  // Satır silme fonksiyonu
  const handleDelete = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };

  // Satır düzenleme (veri değiştiğinde)
  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = rows.map(row =>
      row.id === newRow.id ? { ...row, ...newRow } : row
    );
    setRows(updatedRows);
    return newRow;
  };

  return (
    <div className='flex justify-center items-center align-middle mt-10' style={{ height: '100%', width: '100%' }}>
    <Container style={{ height: 700, width: '100%' }}>
        <h1 className='font-bold text-5xl mb-12 bg-gray-300 rounded-2xl flex justify-center align-middle items-center p-3 w-fit'> Stok Verileri ve Yönetimi </h1>
      <div >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          onProcessRowUpdate={handleProcessRowUpdate}
        />
        <Button  variant="contained" color="gray" onClick={handleAddRow} style={{ marginBottom: 10 , fontWeight:'700', backgroundColor:'Gray' }}>
        Yeni Ürün Ekle
      </Button>
      </div>
    </Container>
    </div>
  );
};

export default Inventory;
