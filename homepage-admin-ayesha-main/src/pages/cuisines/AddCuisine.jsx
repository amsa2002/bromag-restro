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

const AddCuisine = () => {

    const navigate = useNavigate();

    return (
        <main className="page">
            <div className="page-header">
                <h1>Add Cuisine</h1>
            </div>


            <Wrapper>
                <Form>
                    <div className="form-input">
                        <label htmlFor="cuisineName">Cuisine Title</label>
                        <br />
                        <input type="text" placeholder="enter cuisine title" id="cuisineName" />
                    </div>

                    <div className="form-input">
                        <label htmlFor="imageUpload">Upload Images</label>
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
                                            <label htmlFor="cuisineName">Cuisine Title</label>
                                            <br />
                                            <Input placeholder="enter dining feature title" style={{ width: "100%" }} />
                                        </Form.Item>

                                        <Form.Item {...restField} name={[name, "last"]} rules={[{ required: true, message: "Missing last name" }]}>
                                            <label htmlFor="bannerUpload">Upload Image</label>
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
                        <button type='button' className='cancel-btn' onClick={() => navigate('/dashboard/cuisines')}>Cancel</button>
                    </div>
                </Form>
            </Wrapper>
        </main>
    )
}
export default AddCuisine