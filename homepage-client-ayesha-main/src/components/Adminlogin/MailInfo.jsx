import React from 'react'
import styled from 'styled-components'

import mail_sent from '../../assets/images/mail-1.png'


const MailInfo = () => {
  return (
    <MailInfoStyled>
        <div className='mailinfo-container'>
            <div className="row justify-content-center">
                <div className="text-center">
                     <img src={mail_sent} alt="" /> 
                    <p>We have sent an Email link to you, kindly check your Email to login.</p>
                </div>
            </div>
        </div>
    </MailInfoStyled>
  )
}

const MailInfoStyled = styled.div`
    width: 100%;
    height: 100vh;
    background: radial-gradient(74.39% 74.39% at 50% 50%, #890E06 0%, #000000 100%);
    display: flex;
    justify-content: center; 
    align-items: center;
    font-family: "poppins", serif;

        .mailinfo-container{
            border:0px solid red;
            p{
                color:#FFFF;
                margin-top:20px;
            }

        }

`;

export default MailInfo