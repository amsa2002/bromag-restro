import styled from "styled-components"


const Wrapper = styled.footer`
width: 99%;
background: #252525;
padding: 60px 0px;
border-radius:30px 30px 2px 2px;
clip-path: url(#clip);
.footer-title{
    text-align:center;
    h1{
        font-size:132px;
        text-align:center;
        color: #FFFFFF3D;
        font-family: "STIX Two Text", serif;
        font-weight:700;
        font-style: normal;
        margin:0px;

        img{
            position:relative;
            top:-9px;
        }
    }
    p{
        color:#C42125;
        font-size:28px;
        font-weight:400;
    }
}
// .footer-content{
//     // text-align:center;
//     padding:30px 133px;
//     h3{
//         color:#FFFF;
//     }
//     img{
//         width:200px;
//     }
//     .footer-buttons{
//         float:right;
//         width:500px;
//         right:0px;
//         button{
//             background:transparent;
//             border:0px;
//             text-transform:uppercase;
//             display:block;
//             color:#FFFFFF3D;
//         }
//     }
//     .download-icons{
//         float:left;
//         width:500px;
//     }
//     .float{
//         clear:both;
//     }
// }

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 40px 133px;
    font-family:'Poppins';
}

.footer-buttons {
border:0px solid red;
    flex: 1;
    margin-right: 20px;
    h3 {
        color: #FFF;
        font-size: 24px;
        margin-bottom: 15px;
        text-transform: uppercase;
    }
    button {
        width:215px;
        background: #FFFFFF33;
        border: none;
        color: white;
        padding: 10px 20px;
        margin-bottom: 15px;
        margin-right:15px;
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
        text-transform: uppercase;
        transition: all 0.3s ease;
    }
    button:hover {
        background: #ff7402;
        transform: translateY(-3px);
    }
}

.footer-icons {
border:0px solid red;
    flex: 1;
    margin-left: 20px;
    text-align:right;
    h3 {
        color: #FFFF;
        font-size: 24px;
        margin-bottom: 15px;
    }
    img {
        width: 170px;
        border-radius: 10px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    img:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2);
    }

    .social-icons {
            display: flex;
            gap: 48px;
            margin-top:35px;
            justify-content:right;
    }

    .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        border-radius: 10px;
        background-color: #FFFFFF33;
        color: #FFFF;
        font-size: 23px;
        cursor: pointer;
        border:none;
        transition: all 0.3s ease;
    }
        .icon:hover {
            transform: scale(1.1);    
            color: white;             
        }

}

.float {
    clear: both;
}




`;

export default Wrapper;