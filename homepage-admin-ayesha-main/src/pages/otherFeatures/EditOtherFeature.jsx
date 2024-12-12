//styled-component imports
import Wrapper from '../../assets/Wrappers/Form';
//antd imports
import { Button, Upload } from 'antd';
import { AiOutlineCloudUpload } from "react-icons/ai";
//react imports
import { useNavigate } from 'react-router-dom';

const EditOtherFeature = () => {

    const navigate = useNavigate();

    return (
        <main className="page">
            <div className="page-header">
                <h1>Edit Other Feature</h1>
            </div>


            <Wrapper>
                <form>
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

                    <div className='form-buttons'>
                        <button type='submit'>Submit</button>
                        <button type='button' className='cancel-btn' onClick={() => navigate('/dashboard/other-features')}>Cancel</button>
                    </div>
                </form>
            </Wrapper>
        </main>
    )
}
export default EditOtherFeature