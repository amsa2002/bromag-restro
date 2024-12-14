//import ant designs
import { Space, Table, Button, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FiPlus } from "react-icons/fi";
//import api
import { getBanners, deleteBanner } from '../../api/BannersApi.js';

const Banners = () => {
    const [banners, setBanners] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                const data = await getBanners();
                setBanners(data);
            } catch (error) {
                message.error("Failed to fetch banners.");
            }
        };
        fetchBanners()
    }, [])

    const handleDelete = async (id) => {
        try {
            await deleteBanner(id);
            setBanners(banners.filter(banner => banner._id !== id))
            message.success("Banner deleted successfully.")
        } catch (error) {
            console.error("Error deleting banner:", error)
            message.error("Failed to delete banner.")
        }
    };

    const columns = [
        {
            title: "S.No",
            dataIndex: "key",
            render: (text, record, index) => index + 1,
        },
        {
            title: "Banner Image",
            dataIndex: "imageUrl",
            render: (url) => <img src={url} alt="Banner" style={{ width: 100 }} />,
        },
        {
            title: "Title",
            dataIndex: "title",
        },
        {
            title: "Actions",
            render: (_, record) => (
                <Space>
                    <Link to={`/dashboard/banners/edit/${record._id}`}>Edit</Link>
                    <a type="link" className='delete-btn'  danger onClick={() => handleDelete(record._id)}>
                        Delete
                    </a>
                </Space>
            ),
        },
    ];

    return (
        <main className="page">
            <div className="page-header">
                <h1>Banners</h1>
                <button onClick={() => navigate('/dashboard/banners/add-banner')}><FiPlus className="icon" />Add Banner</button>
            </div>

            <Table columns={columns} dataSource={banners} rowKey="_id" />
        </main>
    );
};

export default Banners;
