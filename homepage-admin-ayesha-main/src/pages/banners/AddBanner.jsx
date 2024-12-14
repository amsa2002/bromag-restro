import Wrapper from '../../assets/Wrappers/Form'
//antd imports
import { Button, Upload, Form, Input, message, Space } from "antd"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { FiMinusCircle } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addBanner } from "../../api/BannersApi.js"

const AddBanner = () => {
    const [form] = Form.useForm();
    const [imageUrl, setImageUrl] = useState(null); // For preview
    const [file, setFile] = useState(null); // For file upload
    const navigate = useNavigate();

    const handleUpload = ({ file }) => {
        const isImage = file.type.startsWith("image/");
        if (!isImage) {
            message.error("Please upload an image file!");
            return;
        }
        setFile(file); // Store the selected file
        const previewUrl = URL.createObjectURL(file);
        setImageUrl(previewUrl); // Set preview URL
        message.success(`${file.name} uploaded successfully.`);
    };

    const handleRemove = () => {
        setFile(null);
        setImageUrl(null);
        message.info("Image removed.");
    };

    const onFinish = async (values) => {
        if (!file) {
            message.error("Please upload a banner image.");
            return;
        }

        const formData = new FormData();
        formData.append("context", values.context); // Add the banner title
        formData.append("image", file); // Add the selected file

        try {
            await addBanner(formData); // Call the backend API
            message.success("Banner added successfully!");
            navigate("/dashboard/banners"); // Navigate back to Banners page
        } catch (error) {
            console.error("Error adding banner:", error);
            message.error("Failed to add banner. Please try again.");
        }
    };

    return (
        <main className="page">
            <div className="page-header">
                <h1>Add Banner</h1>
            </div>

            <Wrapper>
                <Form form={form} onFinish={onFinish}>
                    <div className="form-input">
                        <label htmlFor="bannerTitle">Banner Title</label>
                        <Form.Item
                            name="title"
                            rules={[{ required: true, message: "Please enter a banner title" }]}
                        >
                            <Input placeholder="Enter banner title" />
                        </Form.Item>
                    </div>

                    <div className="form-input">
                        <label htmlFor="bannerUpload">Upload Banner Image</label>
                        <Upload
                            beforeUpload={() => false}
                            onRemove={handleRemove}
                            customRequest={() => {}}
                            onChange={handleUpload}
                            listType="picture"
                            showUploadList={{ showRemoveIcon: true }}
                        >
                            <Button icon={<AiOutlineCloudUpload />}>Upload Image</Button>
                        </Upload>
                        {imageUrl && (
                            <img
                                src={imageUrl}
                                alt="Preview"
                                style={{ marginTop: "15px", width: "100%", maxHeight: "200px", objectFit: "contain" }}
                            />
                        )}
                    </div>

                    {/* <Form.List name="users">
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
                                                beforeUpload={() => false}
                                                onRemove={handleRemove}
                                                customRequest={() => {}}
                                                onChange={handleUpload}
                                                listType="picture"
                                                showUploadList={{ showRemoveIcon: true }}
                                            >
                                                <Button icon={<AiOutlineCloudUpload />}>Upload Image</Button>
                                            </Upload>
                                            {imageUrl && (
                                                <img
                                                    src={imageUrl}
                                                    alt="Preview"
                                                    style={{ marginTop: "15px", width: "100%", maxHeight: "200px", objectFit: "contain" }}
                                                />
                                            )}
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
                    </Form.List> */}


                    <div className="form-buttons">
                        <button type="submit">Submit</button>
                        <button type="button" className="cancel-btn" onClick={() => navigate('/dashboard/banners')}>
                            Cancel
                        </button>
                    </div>
                </Form>
            </Wrapper>
        </main>
    );
};

export default AddBanner;
