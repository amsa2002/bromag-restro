import styled from 'styled-components'

const Wrapper = styled.header`
width: 100vw;
height: 10vh;
background: #0E0E0E;
padding: 10px;
position: fixed;
top:0px;
left:0px;
z-index: 10;
.navbar{
    width: 100%;
    height: 100%;
    display: flex;  
    align-items: center;
    justify-content: center;
    position: relative;
}
.brand{
    width: 70px;
    height: 70px;
    position: absolute;
    left: 0px;
    top: -8px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.nav-links{
    width: 35%;
    display: flex;
    justify-content: space-between;
}
a{
    text-decoration: none;
    color: #fff;
    font-weight: 500;
}
.active{
    color:#DF9300;
    border-bottom: 1px solid #DF9300;
}

.signuplogin-container{
    color:#fff;
    text-transform:capitalize;
    position:fixed;
    right:0;
    margin-right:30px;
    div{
        display:inline-block;
        font-weight: 500;
        padding-right:20px;
        
    }
}
`;

export default Wrapper;