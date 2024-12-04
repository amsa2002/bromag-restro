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
    flex: 1;
    margin-right: 20px;
    h3 {
        color: #FFF;
        font-size: 24px;
        margin-bottom: 15px;
        text-transform: uppercase;
    }
    button {
        background: #FFFFFF33;
        border: none;
        color: white;
        padding: 10px 20px;
        margin-bottom: 10px;
        margin-right:10px;
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

.download-icons {
    flex: 1;
    margin-left: 20px;
    text-align:right;
    h3 {
        color: #FFFF;
        font-size: 24px;
        margin-bottom: 15px;
    }
    img {
        width: 150px;
        border-radius: 10px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    img:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 8px rgba(255, 255, 255, 0.2);
    }
}

.float {
    clear: both;
}



// .svg {
//   position: absolute;
//   width: 0;
//   height: 0;
// }
// .logo{
//     width: 150px;
//     height: 150px;
//     margin-left: -40px;
//     img{
//         width: 100%;
//         height:100;
//         object-fit: cover;
//     }
// }
// .footer-parent-div{
//     width: 100%;
//     display: flex;
//     row-gap: 20px;
//     column-gap: 50px;
//     margin-bottom: 50px;
// }
// .footer-left-div{
//     width: 50%;
// } 
// h3{
//     color: #F6F6F6;
//     font-size: 30px;
//     font-weight: 700;
//     text-transform: uppercase;
//     margin-bottom: 30px;
// }
// .footer-left-div p{
//     color: #fff;
//     margin-bottom: 40px;
//    span{
//     margin-right: 20px;
//     font-size: 25px;
//     color: #FF9D02;
//     vertical-align: middle;
//    }
// }
// .footer-right-div{
//     width:50%;
//     h3{
//         text-transform: capitalize;
//     }
// }
// form{
//     width: 70%;
//     display: flex;
//     flex-direction: column;
//     row-gap: 20px;  
// }
// input{
//     background:#313131;
//     height: 40px;
//     box-shadow: none;
//     border-style: none;
//     padding: 0px 20px;
//     color: #fff;
// }
// /* Apply styles to hide the default number input arrows */
// input[type="number"] {
//     -moz-appearance: textfield; /* Firefox */
// }

// input[type="number"]::-webkit-inner-spin-button,
// input[type="number"]::-webkit-outer-spin-button {
//     -webkit-appearance: none;
//     margin: 0;
// }
// button{
//     width: 30%;
//     padding: 10px 0px;
//     background: #FF9D02;
//     border-radius: 8px;
//     border-style: none;
//     color: #fff;
// }
// .socials{
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     align-items:center;
//     flex-direction: column;
//     padding: 30px 0px;
//     border-bottom: 1px solid #FF9D02;
//     h3{
//         color: #FF9D02;
//         font-size: 30px;
//         font-weight: 500;
//     }
// }
// .social-icons{
//     color: #fff;
//     width: 8%;
//     display: flex;
//     justify-content: space-between;
//     span{
//         font-size: 20px;
//     }
// }


// .twitter:hover{
//     color: #FF9D02;
//     font-size: 30px;
//     transition: all 0.2s;
// }
// .facebook:hover{
//     color: #FF9D02;
//     font-size: 30px;
//     transition: all 0.2s;
// }
// .instagram:hover{
//     color: #FF9D02;
//     font-size: 30px;
//     transition: all 0.2s;
// }

// .copyright{
//     width: 100%;
//     display: flex;
//     justify-content:  space-between;
//     padding-top: 40px;
//     margin: 0px auto;

// }
// .copyright p, a{
//     color: #FFF;
//     font-size: 14px;
//     text-decoration: none;
// }
`;

export default Wrapper;