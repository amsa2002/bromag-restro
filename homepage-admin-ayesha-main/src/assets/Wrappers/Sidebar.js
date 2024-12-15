import Styled from 'styled-components'

const Wrapper = Styled.div`
grid-area: sidebar;

.ant-menu{
    height: calc(100vh - 70px);
    border-style: none !important;
    background-color: #000;
    color: #fff;
    overflow-y: auto;
    overflow-x: hidden;
    transition: all 0.2s;

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
     /* Scrollbar styling */
  scrollbar-width: thin; /* For Firefox */
  scrollbar-color: #555 transparent; /* Colors for Firefox scrollbars */

  /* Webkit scrollbars (Chrome, Edge, Safari) */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #555; /* Scrollbar thumb color */
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #777; /* Hover effect for scrollbar thumb */
  }
`;

export default Wrapper