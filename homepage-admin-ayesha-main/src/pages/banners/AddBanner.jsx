//styled-component imports
import Wrapper from '../../assets/Wrappers/Form';
//antd imports
import { Button, Upload } from 'antd';
import { Form, Input, Space } from "antd";
import { AiOutlineCloudUpload } from "react-icons/ai";
//react imports
import { useNavigate } from 'react-router-dom';
//react-icon imports
import { FiMinusCircle } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const AddBanner = () => {

    const navigate = useNavigate();

    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // };

    // const fileList = [
    //     {
    //         uid: '0',
    //         name: 'xxx.png',
    //         status: 'uploading',
    //         percent: 33,
    //     },
    //     {
    //         uid: '-1',
    //         name: 'yyy.png',
    //         status: 'done',
    //         url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //         thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //     },
    //     {
    //         uid: '-2',
    //         name: 'zzz.png',
    //         status: 'error',
    //     },
    // ];
    return (
        <main className="page">
            <div className="page-header">
                <h1>Add Banner</h1>
            </div>


            <Wrapper>
                <Form>
                    <div className="form-input">
                        <label htmlFor="bannerName">Banner Title</label>
                        <br />
                        <input type="text" placeholder="enter banner title" id="bannerName" />
                    </div>

                    <div className="form-input">
                        <label htmlFor="bannerUpload">Upload Banner Image</label>
                        <br />
                        <Upload
                            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                            listType="picture"
                        // defaultFileList={[...fileList]}
                        >
                            <Button className='upload-btn' icon={<AiOutlineCloudUpload />}>Upload</Button>
                        </Upload>
                    </div>


                    <Form.List name="users">
                        {(fields, { add, remove }) => (
                            <>
                                {fields.map(({ key, name, ...restField }) => (
                                    <Space key={key} style={{ display: "flex", flexDirection: "column", marginBottom: 8, }} align="baseline">

                                        <Form.Item {...restField} name={[name, "first"]} rules={[{ required: true, message: "Missing first name" }]}>
                                            <label htmlFor="bannerName">Banner Title</label>
                                            <br />
                                            <Input placeholder="enter banner title" style={{ width: "100%" }} />
                                        </Form.Item>

                                        <Form.Item {...restField} name={[name, "last"]} rules={[{ required: true, message: "Missing last name" }]}>
                                            <label htmlFor="bannerUpload">Upload Banner Image</label>
                                            <br />
                                            <Upload
                                                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                                                listType="picture"
                                            // defaultFileList={[...fileList]}
                                            >
                                                <Button className='upload-btn' icon={<AiOutlineCloudUpload />}>Upload</Button>
                                            </Upload>
                                        </Form.Item>

                                        <div className='minus-div' onClick={() => remove(name)}>
                                            Remove <FiMinusCircle className="minus-circle" />
                                        </div>

                                    </Space>
                                ))}
                                <Form.Item>
                                    <Button className='add-more-btn' type="dashed" onClick={() => add()} block icon={<FaPlus />}>
                                        Add More
                                    </Button>
                                </Form.Item>
                            </>
                        )}
                    </Form.List>


                    <div className='form-buttons'>
                        <button type='submit'>Submit</button>
                        <button type='button' className='cancel-btn' onClick={() => navigate('/dashboard/banners')}>Cancel</button>
                    </div>
                </Form>
            </Wrapper>
        </main>
    )
}
export default AddBanner