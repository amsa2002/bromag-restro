import Styled from 'styled-components'

const Wrapper = Styled.header`
grid-area: header;
background: #000;
color: #fff;
display: flex;
align-items: center;
justify-content: center;
position: relative;
.toggle-div{
    position: absolute;
    left: 4px;
    top: 20px;
}
button{
    font-size: 40px;
    display: flex;
    align-items: center;
    margin: 0px !important;
    color: #fff !important;
    background-color: transparent;
    border: none;
}
button:hover{
    color: #FF9D02 !important;
}
img{
    width: 50px;
    height: 50px;
    margin-right: 10px;
}
h1{
    text-transform: uppercase;
    font-size: 22px;
    font-weight: 700;
}
`;

export default Wrapper