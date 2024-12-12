//styled-component imports
import Wrapper from '../../assets/Wrappers/Form';
//antd imports
import { Button, Upload } from 'antd';
import { AiOutlineCloudUpload } from "react-icons/ai";
//react imports
import { useNavigate } from 'react-router-dom';

const EditBlog = () => {

    const navigate = useNavigate();


    return (
        <main className="page">
            <div className="page-header">
                <h1>Edit Blog</h1>
            </div>


            <Wrapper>
                <form>
                    <div className="form-input">
                        <label htmlFor="blogName">Blog Title</label>
                        <br />
                        <input type="text" placeholder="enter blog title" id="blogName" />
                    </div>

                    <div className="form-input">
                        <label htmlFor="blogContent">Blog Content</label>
                        <br />
                        <textarea type="text" placeholder="enter blog content" id="blogContent" rows="6" />
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

                    <div className='form-buttons'>
                        <button type='submit'>Submit</button>
                        <button type='button' className='cancel-btn' onClick={() => navigate('/dashboard/blogs')}>Cancel</button>
                    </div>
                </form>
            </Wrapper>
        </main>
    )
}
export default EditBlog