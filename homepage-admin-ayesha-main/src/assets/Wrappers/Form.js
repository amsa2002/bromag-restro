import Styled from "styled-components";

const Wrapper = Styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 20px;
form{
    width: 70%;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 1px 1px 3px 3px rgba(0,0,0, 0.2);
    margin-bottom: 100px;
}
.form-input{
    width: 100%;
    margin-bottom: 15px;
}
label{
    font-weight: 500;
    font-size: 22px;
}
input{
    width: 97%;
    padding: 10px 0px 10px 10px;
    border-radius: 7px;
    border: 1px solid #000;
    margin-top: 10px;
    font-size: 16px;
}
input:focus{
    border: 1px solid #FF9D02;
    outline: none;
}
input:hover{
    border: 1px solid #FF9D02;
}
input::placeholder{
     color:  #dcdcdc !important;
}
textarea{
    width: 97%;
    padding: 10px 0px 10px 10px;
    border-radius: 7px;
    border: 1px solid #000;
    margin-top: 10px;
    resize: none;
    font-size: 16px;
}
textarea:focus{
    border: 1px solid #FF9D02;
    outline: none;
}
textarea:hover{
    border: 1px solid #FF9D02;
}
.ant-upload{
    width: 100%;
}

.upload-btn{
    width: 100%;
    height: 100px;
    font-size: 20px;
    color: #000 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    border: 1px solid #000;
}
// .upload-input{
//     width: 100%;
//     height: 46px;
//     margin-top: 10px;
// }
.ant-space-item{
    width: 100%;
}
.ant-form-item {
    margin-bottom: 0px;
}
.minus-div{
    // width:60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: red;
    font-size: 15px;
    cursor: pointer;
    // margin-top: 30px;
}
.minus-circle{
    color: red;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 7px;
}
.upload-btn:hover{
    color: #FF9D02 !important;
    border: 1px solid #FF9D02 !important;
}
.form-buttons{
    display: flex;
}
.cancel-btn{
    background: #000;
    margin-left: 20px;
}
.add-more-btn{
    color: #000 !important;
    margin-bottom: 30px;
}
`;

export default Wrapper;