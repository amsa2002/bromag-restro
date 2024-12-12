import Styled from 'styled-components'

const Wrapper = Styled.div`
width: 100vw;
height:  100vh;
display: flex;
align-items: center;
justify-content: center;
background:#252525;
color: #fff;
.img-div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
}
.logo-div{
    width: 80px;
    height:80px;
    img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
}
form{
    width: 25%;
    padding: 50px;
    backdrop-filter: blur(15px);
    background: rgba(255,255,255,0.01);
    border-radius: 20px; 
    box-shadow: 0px 0px 14px 4px rgba(0,0,0,0.4);
}
.form-input{
    width: 100%;
    margin-bottom: 20px;
    position: relative;
}

input{
    width: 95%;
    margin-top: 10px;
    padding: 10px;
    border-radius: 7px;
    border-style: none;
}
input:focus{
    outline: none;
    border: 1px solid #000;
}
span{
    color: #000;
    font-size: 20px;
    position: absolute;
    right: 15px;
    bottom: 3px;
}
.btn-div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
button{
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 600;
    margin-top: 20px;
}

`;

export default Wrapper