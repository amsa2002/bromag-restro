//styled-component imports
import Wrapper from '../../assets/Wrappers/Form';
//antd imports
import { Button, Upload } from 'antd';
import { AiOutlineCloudUpload } from "react-icons/ai";
//react imports
import { useNavigate } from 'react-router-dom';

const EditDiningFeature = () => {

    const navigate = useNavigate();

    return (
        <main className="page">
            <div className="page-header">
                <h1>Edit Dining Feature</h1>
            </div>


            <Wrapper>
                <form>
                    <div className="form-input">
                        <label htmlFor="diningFeatureName">Dining Feature Title</label>
                        <br />
                        <input type="text" placeholder="enter banner title" id="diningFeatureName" />
                    </div>


                    <div className="form-input">
                        <label htmlFor="imageUpload">Upload upto 4 Banner Images</label>
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
                        <button type='button' className='cancel-btn' onClick={() => navigate('/dashboard/dining-features')}>Cancel</button>
                    </div>
                </form>
            </Wrapper>
        </main>
    )
}
export default EditDiningFeature