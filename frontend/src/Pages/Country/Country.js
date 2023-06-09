import { Space, Table, Typography, Card, Input, Button } from "antd";
import { useEffect, useState } from "react";
import { BackendApi } from "../../API";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function Country() {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([])

  useEffect(() => {
    setLoading(true)
    BackendApi().then(res => {
      setDataSource(res.data);
      setLoading(false);

    })
  }, [])
  return <div>
    <Space size={20} direction="verticle">
      <Typography style={{fontSize:20, color:"red"}}>Country</Typography>
      <DashbordChart />
      <Table style={{ marginTop: 50 }}
        columns={[
          {
            title: "country",
            dataIndex: "country",
          },
          {
            title: "start_year",
            dataIndex: "start_year",
          },
          {
            title: "end_year",
            dataIndex: "end_year",
          },
          {
            title: "sector",
            dataIndex: "sector",
            filters: dataSource.map((item) => ({ text: item.sector, value: item.sector })),
            onFilter: (value, record) =>
              record.sector.toString().toLowerCase().includes(value.toString().toLowerCase()),
            render: (text) => <span>{text}</span>,
            filterMultiple: false,
            filterDropdown: ({
              setSelectedKeys,
              selectedKeys,
              confirm,
              clearFilters,
            }) => (
              <div style={{ padding: 8 }}>
                <Input
                  placeholder="Search sector"
                  value={selectedKeys[0]}
                  onChange={(e) =>
                    setSelectedKeys(e.target.value ? [e.target.value] : [])
                  }
                  onPressEnter={() => confirm()}
                  style={{ width: 188, marginBottom: 8, display: "block" }}
                />
                <Space>
                  <Button
                    type="primary"
                    onClick={() => confirm()}
                    size="small"
                    style={{ width: 90 }}
                  >
                    Search
                  </Button>
                  <Button onClick={() => clearFilters()} size="small" style={{ width: 90 }}>
                    Reset
                  </Button>
                </Space>
              </div>
            ),

          }

        ]}
        loading={loading}
        dataSource={dataSource}
      ></Table>
    </Space>
  </div>
}

function DashbordChart() {

  const [country, setCountry] = useState({
    labels: [],
    datasets: []
  })
  useEffect(() => {
    BackendApi().then(res => {
      const labels = res.data.map(data => {
        return `User-${data.country}`
      });

      const datas = res.data.map(data => {
        return data.country
      })

      const dataSource = {

        labels,

        datasets: [
          {
            label: 'Country',
            data: labels.map(() => Math.random() * 1000),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],

      };
      setCountry(dataSource)
    })
  })
  const options = {
    indexAxis: 'y',
    elements: {
      bar: {
        borderWidth: 5,


      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



  return <Card style={{ width: 500, height: 500 }}><Bar options={options} data={country} style={{ fontSize: 20, margin: 10, height:500 }} />
  </Card>;

}


export default Country