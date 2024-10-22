import React, { useEffect, useState } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import Accessibility from 'highcharts/modules/accessibility';
import Nav from './Nav/Nav';
import MobileNav from './MobileNav/MobileNav';
import Footer from './Footer/Footer';

// Initialize the module
Accessibility(Highcharts);
const Dashboard = () => {
  const [chartOptions, setChartOptions] = useState({
    chart: {
      type: 'column',
      backgroundColor: '#f4f4f8', // Light grey background
      borderRadius: 10, // Rounded corners
      
      style: {
        fontFamily: 'Arial, sans-serif', // Custom font
      },
    },
    title: {
      text: 'Cryptocurrency Prices (USD)',
      style: {
        color: 'white', // Dark grey text color
        fontSize: '12px', // Font size
        fontWeight: 'bold',
      },
    },
    xAxis: {
      type: 'category',
      title: {
        text: 'Cryptocurrency',
        style: {
          color: 'white',
          fontSize: '12px',
        },
      },
      labels: {
        style: {
          color: '#333',
        },
      },
    },
    yAxis: {
      title: {
        text: 'Price (USD)',
        style: {
          color: 'white',
          fontSize: '10px',
        },
      },
      labels: {
        style: {
          color: 'white',
        },
      },
      gridLineColor: '#eaeaea', // Grid line color
    },
    legend: {
      backgroundColor: '#ffffff', // White background for the legend
      borderColor: '#ccc', // Light grey border
      borderWidth: 1,
      shadow: true, // Enable shadow for legend box
      itemStyle: {
        color: '#333', // Legend text color
        fontWeight: 'normal',
      },
    },
    tooltip: {
      backgroundColor: 'white', // Dark background
      style: {
        color: '#fff', // White text
        fontSize: '14px',
      },
      borderRadius: 10,
      borderWidth: 0,
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        borderRadius: 1, // Rounded bars
        colorByPoint: true, // Different colors for each point
        dataLabels: {
          enabled: true,
          style: {
            color: '#333', // Label color
            textOutline: 'none',
            fontWeight: 'bold',
          },
        },
      },
    },
    colors: ['#7cb5ec', '#434348', '#90ed7d', '#f7a35c', '#8085e9'], // Custom colors for series
    series: [],
  });

  useEffect(() => {
    const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd';
  
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const processedData = Object.keys(data).map((key) => ({
          name: key,
          y: data[key].usd,
        }));
  
        setChartOptions((prevOptions) => ({
          ...prevOptions,
          series: [
            {
              name: 'Price',
              data: processedData,
            },
          ],
        }));
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please check your network or try again later.');
      });
  }, []);
  

  return (
    <div>
        <Nav/>
        <MobileNav/>
        <div className="w-75 mt-3 mx-auto">
            <h5 className='text-black text-center'>Crypto Prices Chart using API</h5>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      </div>
      <Footer/>
    </div>
  );
};

export default Dashboard;
