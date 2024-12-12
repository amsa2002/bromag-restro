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
        title: 'Content',
        dataIndex: 'content',
        key: 'content',
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
                <Link to="/dashboard/other-features/edit-other-feature">Edit</Link>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        context: "qwertyuioiuytrsd",
        content: "werfgthyjuuuuhtgrewrtgrfewdfewdfvdewfvdevdevfdewvfewcvwcvswcvdscswdcdsaxc sadcdswdcv",
    },
    {
        key: '2',
        name: 'Jim Green',
        context: "ghvjbkiu98765rtydcghvjbkiu978r6dtfcghvbjiu",
        content: "werfgthyjuuuuhtgrewrtgrfewdfewdfvdewfvdevdevfdewvfewcvwcvswcvdscswdcdsaxc sadcdswdcvwerfgthyjuuuuhtgrewrtgrfewdfewdfvdewfvdevdevfdewvfewcvwcvswcvdscswdcdsaxc sadcdswdcv",
    },
    {
        key: '3',
        name: 'Joe Black',
        context: "qwertyuioiuytrsd",
        content: "werfgthyjuuuuhtgrewrtgrfewdfewdfvdewfvdevdevfdewvfewcvwcvswcvdscswdcdsaxc sadcdswdcv",
    },
];

const OtherFeatures = () => {

    const navigate = useNavigate();

    return (
        <main className="page">
            <div className="page-header">
                <h1>Other Features</h1>
                <button type='button' onClick={() => navigate('/dashboard/other-features/add-other-feature')}><FiPlus className="icon" />Add other feature</button>
            </div>

            <div className='table-div'>
                <Table columns={columns} dataSource={data} />
            </div>

        </main>
    )
}
export default OtherFeatures