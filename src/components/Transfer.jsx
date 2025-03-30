import React from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, LineElement, PointElement } from 'chart.js';
import '../App.css'
// Chart.js modüllerini kaydediyoruz
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const Transfer = () => {
  // 1. Ürünlerin Şehirlere Göre Dağılımı (Bar Chart)
  const barData = {
    labels: ['İstanbul', 'Ankara', 'İzmir', 'Isparta', 'Antalya'],
    datasets: [{
      label: 'Ürünler',
      data: [300, 150, 200, 100, 50],
      backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
      borderWidth: 1
    }]
  };

  const barOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // 2. Şehirlerin Yoğunluk Oranları (Pie Chart)
  const pieData = {
    labels: ['İstanbul', 'Ankara', 'İzmir', 'Isparta', 'Antalya'],
    datasets: [{
      label: 'Şehir Yoğunluk Oranları',
      data: [50, 15, 10, 10, 15],
      backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)', 'rgba(153, 102, 255, 0.8)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)'],
      borderWidth: 1
    }]
  };

  const pieOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          }
        }
      }
    }
  };

  // 3. Zaman İçinde Dağıtım Trendleri (Line Chart)
  const lineData = {
    labels: ['Hafta 1', 'Hafta 2', 'Hafta 3', 'Hafta 4', 'Hafta 5'],
    datasets: [{
      label: 'Dağıtım Trendleri (Kıyafet)',
      data: [100, 200, 150, 300, 250],
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)',
      tension: 0.1
    }]
  };

  const lineOptions = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    responsive: true
  };

  return (
    <div  className='p-6'>
    
      <h2 className='text-5xl font-sans font-semibold bg-gray-300 rounded-2xl w-fit flex align-middle items-center justify-center p-3' >Dağıtım Verileri</h2>
    <div className=' flex flex-row justify-center items-center align-middle'>
      <div style={{width:'500px' , height:'450px'}} className=' flex  text-2xl font-semibold flex-col justify-center items-center align-middle' >
        <h3 className='bg-gray-300 rounded-2xl w-fit p-3'>Şehirlerin Yoğunluk Oranları</h3>
        <Pie data={pieData} options={pieOptions} />
      </div>
      <div style={{width:'900px' , height:'600px'}} className=' flex text-2xl  font-semibold flex-col justify-center items-center align-middle' >
        <h3 className='bg-gray-300 rounded-2xl w-fit p-3'>Ürünlerin Şehirlere Göre Dağılımı</h3>
        <Bar  data={barData} options={barOptions} />
      </div>
      </div> 
    </div>
  );
};

export default Transfer;
