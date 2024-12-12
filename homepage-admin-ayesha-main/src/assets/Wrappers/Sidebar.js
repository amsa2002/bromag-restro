import Styled from 'styled-components'

const Wrapper = Styled.div`
grid-area: sidebar;
// height: calc(100vh - 70px);
// background-color: blue;
// transition: all 0.2s;
.ant-menu{
    height: calc(100vh - 70px);
    border-style: none !important;
    background-color: #000;
    color: #fff;
}
.ant-menu-item, .ant-menu-submenu-title{
    width: 100%;
    height: 50px !important;
    margin: 0px !important;
    display: flex;
    align-items: center;
}

.ant-menu-item:hover, .ant-menu-submenu-title:hover{
    background: #323232 !important;
    color: #fff !important;
}

.ant-menu-item-selected{
    color: #000;
    background-color: #FF9D02;
}
`;

export default Wrapper