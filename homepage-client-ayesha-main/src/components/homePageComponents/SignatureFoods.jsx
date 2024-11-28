import styled from "styled-components"

//image imports
import line from '../../assets/images/gold-line.svg'
import curvyLine from '../../assets/images/curvy-line.svg'
import signature1 from '../../assets/images/signatureFoodImages/signature1.png'
import signature2 from '../../assets/images/signatureFoodImages/signature2.png'
import signature3 from '../../assets/images/signatureFoodImages/signature3.png'
import signature4 from '../../assets/images/signatureFoodImages/signature4.png'


const Wrapper = styled.div`
width: 100%;
height: 80vh;
background: #F9F9F9;
padding: 20px 0px; 

.top-content{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        width: 50%;
        text-align: center;
    }
}
.heading{
    display: flex;
    column-gap: 20px;
    margin: 20px 0px;
}
.card-deck{
    width: 100%;
    height: 70%;
    position: relative;
}
.curvy-img{
    width: 100%;
    position: absolute;
    top:0px;
}
.signature-card{
    width: 190px;
    height: 200px;
    border: 4px solid #FFF6E4;
    background: #FFF;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 7px;
    position: relative;
    p{
        text-align:center;
        padding-top: 25px;
        font-size: 16px;
        font-weight: 600;
    } 
}
.card-img{
    width: 100%;
    height: 60%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
      
}

.circle{
    width: 20px;
    height: 20px;
    background: #fff;
    border: 3px solid #000;
    border-radius:100px;
    position: absolute;
    left: 45%;
    top: 10px;
}
.card1{
    transform: rotate(-4.5deg);
    position: absolute;
    left: 8.7%;
    top: 18%;
}
.card2{
    transform: rotate(8deg);
    position: absolute;
    left: 30.5%;
    top: 43%;
}
.card3{
    transform: rotate(-9deg);
    position: absolute;
    left: 53.7%;
    top: 16%;
}
.card4{
    transform: rotate(9deg);
    position: absolute;
    left: 78.6%;
    top: 25.7%;
}
`;

const SignatureFoods = () => {
    return (
        <Wrapper>
            <div className="top-content">
                <div className="heading">
                    <img className="line" src={line} alt="" />
                    <h2>Signature Foods</h2>
                    <img className="line" src={line} alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim
                </p>
            </div>

            <div className="card-deck">

                <div className="card1">
                    <div className="signature-card">
                        <div className="card-img">
                            <img src={signature1} alt="" />
                        </div>
                        <p>Biryani</p>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="card2">
                    <div className="signature-card">
                        <div className="card-img">
                            <img src={signature2} alt="" />
                        </div>
                        <p>Chicken Finger</p>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="card3">
                    <div className="signature-card">
                        <div className="card-img">
                            <img src={signature3} alt="" />
                        </div>
                        <p>Sheeq kebab</p>
                        <div className="circle"></div>
                    </div>
                </div>

                <div className="card4">
                    <div className="signature-card">
                        <div className="card-img">
                            <img src={signature4} alt="" />
                        </div>
                        <p>Chicken Gravy</p>
                        <div className="circle"></div>
                    </div>
                </div>
                <img className="curvy-img" src={curvyLine} alt="" />
            </div>

        </Wrapper>
    )
}
export default SignatureFoods