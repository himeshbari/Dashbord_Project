import { DollarCircleFilled, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Input, Space, Statistic, Table, Typography } from "antd";
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
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
function Dashbord() {
    return (<div>
        <Typography style={{fontSize:20, color:"red"}}>Dashbord</Typography>


        <Space direction="horizontal" style={{margin:25}}>
            <DashbordCard
                icon={<ShoppingCartOutlined style={{ color: "green", backgroundColor: "blue", borderRadius: 50, fontSize: 30, padding: 5 }} />}
                title={"Order"}
                value={1234} />

            <DashbordCard
                icon={<ShoppingOutlined style={{ color: "green", backgroundColor: "black", borderRadius: 50, fontSize: 30, padding: 5 }} />}
                title={"Country"}
                value={1234} />

            <DashbordCard
                icon={<UserOutlined style={{ color: "green", backgroundColor: "yellow", borderRadius: 50, fontSize: 30, padding: 5 }} />}
                title={"Customer"}
                value={1234} />

            <DashbordCard
                icon={<DollarCircleFilled style={{ color: "green", backgroundColor: "gray", borderRadius: 50, fontSize: 30, padding: 5 }} />}
                title={"Revenue"}
                value={1234} />

        </Space>

        <Space>
            <RecentApi />
            <DashbordChart />
        </Space>


    </div>
    );
}

function DashbordCard({ title, value, icon }) {
    return (
        <Card>

            <Space>
                {icon}
                <Statistic title={title} value={value} />
            </Space>
        </Card>

    )

}

function RecentApi() {
    const [dataSource, setDataSource] = useState([]);
    const [loading, setLoading] = useState([false]);

    useEffect(() => {
        setLoading(true)
        BackendApi().then(res => {
            setDataSource(res.data);
            setLoading(false);

        })
    }, [])
    return (
        <Table 
            columns={[
                {
                    title: "topic",
                    dataIndex: "topic",
                    filters: dataSource.map((item) => ({ text: item.topic, value: item.topic })),
                    onFilter: (value, record) =>
                        record.topic.toString().toLowerCase().includes(value.toString().toLowerCase()),
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
                                placeholder="Search topic"
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
                },
                {
                    title: "intensity",
                    dataIndex: "intensity",
                },
                {
                    title: "region",
                    dataIndex: "region",
                    filters: dataSource.map((item) => ({ text: item.region, value: item.region })),
                    onFilter: (value, record) =>
                        record.region.toString().toLowerCase().includes(value.toString().toLowerCase()),
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
                                placeholder="Search region"
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
                },
                {
                    title: "country",
                    dataIndex: "country",
                },
                {
                    title: "start_year",
                    dataIndex: "start_year",
                    filters: dataSource.map((item) => ({ text: item.start_year, value: item.start_year })),
                    onFilter: (value, record) =>
                        record.start_year.toString().toLowerCase().includes(value.toString().toLowerCase()),
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
                                placeholder="Search start_year"
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
                },
                {
                    title: "end_year",
                    dataIndex: "end_year",
                    filters: dataSource.map((item) => ({ text: item.end_year, value: item.end_year })),
                    onFilter: (value, record) =>
                        record.end_year.toString().toLowerCase().includes(value.toString().toLowerCase()),
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
                                placeholder="Search end_year"
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
                },
                {
                    title: "likelihood",
                    dataIndex: "likelihood",
                },
                {
                    title: "relevance",
                    dataIndex: "relevance",
                }

            ]}
            loading={loading}
            dataSource={dataSource}

            className="RecentApi" ></Table>
    );
}

function DashbordChart() {

    const [sector, setSector] = useState({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        BackendApi().then(res => {
            const labels = res.data.map(data => {
                return `User-${data.sector}`
            });

            const datas = res.data.map(data => {
                return data.intensity
            })

            const dataSource = {

                labels,
                datasets: [
                    {
                        label: 'Sector',
                        data: labels.map(() => Math.random() * 1000),
                        backgroundColor: 'rgba(255, 0, 0, 1)',
                    },

                ],

            };
            setSector(dataSource)
        })
    })
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Chart',
            },
        },
    };


    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


    return <Card style={{ width: 500, height: 500 }}><Bar options={options} data={sector} />
    </Card>;

}
export default Dashbord