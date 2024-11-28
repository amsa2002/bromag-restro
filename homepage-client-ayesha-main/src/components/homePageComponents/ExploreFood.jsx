import styled from "styled-components"

//image imports
import line from '../../assets/images/gold-line.svg'
import exploreFood from '../../assets/images/explore-food.png'
import coriander from '../../assets/images/coriander.png'


const Wrapper = styled.div`
width: 100%;
height: 70vh;
position: relative;
.top-content{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 50px;
    p{
        width: 50%;
        text-align: center;
    }
}
.heading{
    display: flex;
    column-gap: 20px;
}
a{
    text-decoration: none;
    color: #fff;
    padding: 20px 50px;
    border-radius: 35px;
    background: #DF9300;
}
.explore-food-bg{
    width: 40%;
    height: 100%;
    position: absolute;
    top: 0px;
    right: 0px;
    img{
        width: 100%;
        height:100%;
        object-fit: contain;
    }
}
.top-right-bg{
  top: -280px;
  right: -140px;
}
.outer-circle{
  width: 500px;
  height: 500px;
  background-color: #FBFBFB;
}
.inner-circle{
  width: 60%;
  height: 60%;
  box-shadow: 0px 0px 60px 5px rgba(179, 195, 218, 0.25);
}
.bottom-left-bg{
    position: absolute;
    top: 0px;
    left: -16%;
    z-index: -1;
    .outer-circle{
        width: 450px;
        height: 450px;
    }
    .inner-circle{
        z-index: 1;
    }
}
.coriander{
    width: 30%;
    height: 30%;
    position: absolute;
    top: 3%;
    right: 23%;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
`;


const ExploreFood = () => {
    return (
        <Wrapper>
            <div className="top-content">
                <div className="heading">
                    <img className="line" src={line} alt="" />
                    <h2>Explore Our Foods</h2>
                    <img className="line" src={line} alt="" />
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim
                </p>

                <a href="https://restro-gold.vercel.app//" >Order now</a>
            </div>
            <div className="explore-food-bg">
                <img src={exploreFood} alt="" />
            </div>

            <div className='top-right-bg'>
                <div className='outer-circle'>

                    <div className='inner-circle'>
                    </div>
                </div>
            </div>

            <div className='bottom-left-bg'>
                <div className='outer-circle'>
                    <div className='inner-circle'>
                    </div>
                    <div className="coriander"><img src={coriander} alt="" /></div>
                </div>
            </div>
        </Wrapper>
    )
}

export default ExploreFood