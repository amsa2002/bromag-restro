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

const AddOtherFeature = () => {

    const navigate = useNavigate();

    return (
        <main className="page">
            <div className="page-header">
                <h1>Add Other Feature</h1>
            </div>


            <Wrapper>
                <Form>
                    <div className="form-input">
                        <label htmlFor="featureName">Other Feature Title</label>
                        <br />
                        <input type="text" placeholder="enter feature title" id="featureName" />
                    </div>

                    <div className="form-input">
                        <label htmlFor="featureContent">Other Feature Content</label>
                        <br />
                        <textarea type="text" placeholder="enter feature content" id="featureContent" rows="6" />
                    </div>

                    <div className="form-input">
                        <label htmlFor="imageUpload">Upload Image</label>
                        <br />
                        <Upload
                            action=""
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
                                            <label htmlFor="featureName">Other Feature Title</label>
                                            <br />
                                            <Input placeholder="enter dining feature title" style={{ width: "100%" }} />
                                        </Form.Item>

                                        <Form.Item {...restField} name={[name, "first"]} rules={[{ required: true, message: "Missing first name" }]}>
                                            <label htmlFor="featureContent">Other Feature Content</label>
                                            <br />
                                            <textarea type="text" placeholder="enter feature content" id="featureContent" rows="6" style={{ width: "98%" }} />
                                        </Form.Item>

                                        <Form.Item {...restField} name={[name, "last"]} rules={[{ required: true, message: "Missing last name" }]}>
                                            <label htmlFor="imageUpload">Upload Image</label>
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
                        <button type='button' className='cancel-btn' onClick={() => navigate('/dashboard/other-features')}>Cancel</button>
                    </div>
                </Form>
            </Wrapper>
        </main>
    )
}
export default AddOtherFeature