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
        title: 'Title',
        dataIndex: 'context',
        key: 'context',
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
                <Link to="/dashboard/cuisines/edit-cuisine">Edit</Link>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        context: "qwertyuioiuytrsd"
    },
    {
        key: '2',
        name: 'Jim Green',
        context: "ghvjbkiu98765rtydcghvjbkiu978r6dtfcghvbjiu",
    },
    {
        key: '3',
        name: 'Joe Black',
        context: "qwertyuioiuytrsd"
    },
];


const Cuisines = () => {

    const navigate = useNavigate();

    return (
        <main className="page">
            <div className="page-header">
                <h1>Cuisines</h1>
                <button type='button' onClick={() => navigate('/dashboard/cuisines/add-cuisine')}><FiPlus className="icon" />Add cuisine</button>
            </div>

            <div className='table-div'>
                <Table columns={columns} dataSource={data} />
            </div>

        </main>
    )
}
export default Cuisines