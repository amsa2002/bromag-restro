import styled from "styled-components"

//image imports
import line from '../../assets/images/line.svg'
import aboutImg1 from '../../assets/images/about-img1.png'
import aboutImg2 from '../../assets/images/about-img2.png'



const Wrapper = styled.div`
padding: 20px;
.heading{
    display: flex;
    justify-content: center;
    column-gap: 20px;
    margin-top: 20px;
    h2{
        color: #A0A0A0;
        text-transform: uppercase;
        font-size: 50px;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 3.5px;
    }
}
.about-div{
    display: flex;
    align-items: center;
}
.about-img{
    width: 25%;
    height: 400px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 25px;
    }
}
.about-content{
    width: 55%;
    padding: 40px;
    text-align: center;
    background: #F4F4F4;
    h4{
        color: #DF9300;
        text-transform: capitalize;
        margin-bottom: -8px;
    }
    h3{
        color: #494949;
        font-size: 40px;
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: capitalize;
    }
    p{
        color: #5B5B5B;
        font-size: 20px;
        text-align: start;
    }
}
`;

const About = () => {
    return (
        <Wrapper>
            <div className="heading">
                <img src={line} alt="" />
                <h2>about us</h2>
                <img src={line} alt="" />
            </div>

            <div className="about-div">
                <div className="about-img">
                    <img src={aboutImg1} alt="" />
                </div>
                <div className="about-content">
                    <h4>discover</h4>
                    <h3> our story</h3>
                    <p>Welcome to Bromag Restro, where innovation meets the art of dining. We specialize in delivering next-generation restaurant management solutions that simplify operations, inspire customer loyalty, and empower restaurateurs to focus on creating unforgettable dining experiences </p>
                </div>
                <div className="about-img">
                    <img src={aboutImg2} alt="" />
                </div>
            </div>
        </Wrapper>
    )
}
export default About