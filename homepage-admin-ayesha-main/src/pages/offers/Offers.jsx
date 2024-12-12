//antd imports
import { Space, Table } from 'antd';
//image imports
import logo from '../../assets/images/logo.svg'
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
                <img src={logo} alt="" />
            </Space>
        ),
    },

    {
        title: 'Actions',
        key: 'action',
        render: () => (
            <Space size="middle">
                <Link to="/dashboard/offers/edit-offer">Edit</Link>
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


const Offers = () => {

    const navigate = useNavigate();

    return (
        <main className="page">
            <div className="page-header">
                <h1>Offers</h1>
                <button type='button' onClick={() => navigate('/dashboard/offers/add-offer')}><FiPlus className="icon" />Add offer</button>
            </div>

            <div className='table-div'>
                <Table columns={columns} dataSource={data} />
            </div>

        </main>
    )
}
export default Offers