//antd imports
import { Space, Table } from 'antd';
import { Modal } from 'antd';
import { useState } from 'react';



const Enquiries = () => {

    //modal code start
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    //modal code end


    const columns = [
        {
            title: 'S.No',
            dataIndex: 'key',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email ID',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Mobile No.',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: 'Actions',
            key: 'action',
            render: () => (
                <Space size="middle">
                    <button type="button" onClick={showModal}>View</button>
                </Space>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'John Brown',
            email: "example@gmail.com",
            mobile: "0987654321",
        },
        {
            key: '2',
            name: 'John Brown',
            email: "example@gmail.com",
            mobile: "0987654321",
        },
        {
            key: '3',
            name: 'John Brown',
            email: "example@gmail.com",
            mobile: "0987654321",
        },
    ];


    return (
        <main className="page">
            <div className="page-header">
                <h1>Enquiry Details</h1>
            </div>

            <div className='table-div'>
                <Table columns={columns} dataSource={data} />
            </div>

            <Modal title="Enquiry Details" centered open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

                <p>Name: name</p>
                <p>Email ID: example@gmail.com</p>
                <p>Mobile No.: 1234567890</p>
            </Modal>

        </main>
    )
}
export default Enquiries