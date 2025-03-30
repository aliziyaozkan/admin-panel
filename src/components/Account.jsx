import React, { useState } from 'react';

const Account = () => {
  // Admin verilerini tanımlıyoruz
  const [adminData] = useState({
    id: 1,
    ad: "Ali Ziya",
    soyad: "Özkan",
    kullaniciAdi: "admin",
    yetkiler: "Yönetici",
    email: "ozkan.aliziya@outlook.com",
    telefon: "+905340581746",
    durum: "Aktif",

  });

  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-5xl font-sans font-semibold bg-gray-300 rounded-2xl w-fit flex align-middle items-center justify-center p-3 mt-10 ml-5' >Admin Verileri</h2>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">

      <table className="min-w-full bg-white border border-gray-200 rounded-lg">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Bilgi</th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Değer</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 text-sm text-gray-700">ID</td>
            <td className="py-3 px-4 text-sm text-gray-700">{adminData.id}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 text-sm text-gray-700">Ad</td>
            <td className="py-3 px-4 text-sm text-gray-700">{adminData.ad}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 text-sm text-gray-700">Soyad</td>
            <td className="py-3 px-4 text-sm text-gray-700">{adminData.soyad}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 text-sm text-gray-700">Kullanıcı Adı</td>
            <td className="py-3 px-4 text-sm text-gray-700">{adminData.kullaniciAdi}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 text-sm text-gray-700">Yetkiler</td>
            <td className="py-3 px-4 text-sm text-gray-700">{adminData.yetkiler}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 text-sm text-gray-700">E-posta</td>
            <td className="py-3 px-4 text-sm text-gray-700">{adminData.email}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 text-sm text-gray-700">Telefon</td>
            <td className="py-3 px-4 text-sm text-gray-700">{adminData.telefon}</td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="py-3 px-4 text-sm text-gray-700">Durum</td>
            <td className="py-3 px-4 text-sm text-gray-700">{adminData.durum}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Account;
