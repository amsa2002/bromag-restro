//antd imports
import { Space, Table } from 'antd';

import avatar2 from '../../assets/images/avatar2.webp'
//react imports
import { Link, useNavigate } from 'react-router-dom';
//react-icon imports
import { FiPlus } from "react-icons/fi";

const columns = [
    {
        title: 'S.No',
        dataIndex: 'key',
    },
    {
        title: 'Image',
        key: 'image',
        render: () => (
            <Space size="middle">
                <img style={{ width: '100px', height: '100px' }} src={avatar2} alt="" />
            </Space>
        ),
    },

    {
        title: 'Actions',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Link to="/dashboard/gallery/edit-gallery-image">Edit</Link>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
    },
    {
        key: '2',

    },
    {
        key: '3',
    },
];


const Gallery = () => {

    const navigate = useNavigate();

    return (
        <main className="page">
            <div className="page-header">
                <h1>Gallery</h1>
                <button type='button' onClick={() => navigate('/dashboard/gallery/add-gallery-image')}><FiPlus className="icon" />Add gallery image</button>
            </div>

            <div className='table-div'>
                <Table columns={columns} dataSource={data} />
            </div>

        </main>
    )
}
export default Gallery