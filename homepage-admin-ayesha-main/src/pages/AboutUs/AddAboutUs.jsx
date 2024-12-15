// import React, { useState } from "react";
// import { addAbout } from '../../api/AboutUsApi.js'
// import Wrapper from '../../assets/Wrappers/Form';
// //antd imports
// import { Form } from "antd";
// //react imports
// import { useNavigate } from 'react-router-dom';


// const AddAboutUs = () => {
//     const [title, setTitle] = useState("")
//     const [content, setContent] = useState("")
//     const navigate = useNavigate()

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         await addAbout(title, content)
//         navigate("/dashboard/about")
//     }

//   return (
//         <main className="page">
//             <div className="page-header">
//                 <h1>Add About</h1>
//             </div>

//             <Wrapper>
//                 <Form onSubmit={handleSubmit}>
//                     <div className="form-input">
//                         <label htmlFor="Aboutname">About Title</label>
//                         <br />
//                         <input type="text" placeholder="Enter About title" id="Aboutname" value={title} onChange={(e) => setTitle(e.target.value)} />
//                     </div>

//                     <div className="form-input">
//                         <label htmlFor="aboutContent">About Content</label>
//                         <br />
//                         <textarea type="text" placeholder="Enter about content" id="aboutContent" value={content}
//                         onChange={(e) => setContent(e.target.value)}
//                         required rows="1" />
//                     </div>

//                     <div className='form-buttons'>
//                         <button type='submit'>Submit</button>
//                         <button type='button' className='cancel-btn' onClick={() => navigate('/dashboard/about')}>Cancel</button>
//                     </div>
//                 </Form>
//             </Wrapper>
//         </main>
//     )
// }


// export default AddAboutUs

import React, { useState } from "react";
import { addAbout } from '../../api/AboutUsApi.js';
import Wrapper from '../../assets/Wrappers/Form';
// Ant Design imports
import { Form, Input, Button } from "antd";  // Using Ant Design's Form, Input, Button components
// React imports
import { useNavigate } from 'react-router-dom';

const AddAboutUs = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    // Use Ant Design's onFinish instead of handleSubmit for form submission
    const handleSubmit = async (values) => {
        // Values will contain title and content
        await addAbout(values.title, values.content);
        navigate("/dashboard/about");
    };

    return (
        <main className="page">
            <div className="page-header">
                <h1>Add About</h1>
            </div>

            <Wrapper>
                {/* Use Ant Design's Form component with onFinish */}
                <Form onFinish={handleSubmit}>
                    <div className="form-input">
                        <label htmlFor="Aboutname">About Title</label>
                        <Form.Item
                            name="title"  // Bind this to the title field
                            initialValue={title}
                            rules={[{ required: true, message: "Please enter the About title!" }]}
                        >
                            <Input
                                type="text"
                                placeholder="Enter About title"
                                id="Aboutname"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Item>
                    </div>

                    <div className="form-input">
                        <label htmlFor="aboutContent">About Content</label>
                        <Form.Item
                            name="content"  // Bind this to the content field
                            initialValue={content}
                            rules={[{ required: true, message: "Please enter the About content!" }]}
                        >
                            <textarea
                                placeholder="Enter about content"
                                id="aboutContent"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                rows="1"
                            />
                        </Form.Item>
                    </div>

                    <div className="form-buttons">
                        {/* Use Ant Design's Button component */}
                        <Button type="primary" htmlType="submit">Submit</Button>
                        <Button
                            type="default"
                            onClick={() => navigate('/dashboard/about')}
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Wrapper>
        </main>
    );
};

export default AddAboutUs;
