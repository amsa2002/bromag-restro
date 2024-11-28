import styled from "styled-components"

//image imports
import parking from '../../assets/images/otherFeaturesImages/parking.png'
import party from '../../assets/images/otherFeaturesImages/party.png'
import meeting from '../../assets/images/otherFeaturesImages/meeting.png'
import children from '../../assets/images/otherFeaturesImages/children.png'


const Wrapper = styled.div`
.bottom-left{
  width: 250px;
  height: 250px;
  box-shadow: 0px 0px 70px 20px rgba(232, 235, 239, 0.436);
  position: absolute;
  top: 0px;
  left: 10%;
  z-index: -1;
}
.heading{
    text-align: center;
}
.card-deck{
    margin-top: 140px;
    padding: 0px 100px;
}
.feature-card{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
}
.right-card{
    margin-left: 12%;
}
.left-card{
    margin-right: 12%;
}
.card-img{
    width: 40%;
    img{
        width: 100%;
        height:  100%;
        object-fit: cover;
        border-radius: 20px;
    }
}
.card-content{
    text-align: center;
    padding: 50px 100px;
    border-radius: 7px;
    background: #F9F9F9;
}
h3{
    color: #494949;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
}

`;

const OtherFeatures = () => {
    return (
        <Wrapper>
            <div className='bottom-left'>
                <div className='heading'>
                    <h4>other</h4>
                    <h2>Features</h2>
                </div>
            </div>


            <div className="card-deck">
                <div className="feature-card right-card">
                    <div className="card-img">
                        <img src={parking} alt="" />
                    </div>

                    <div className="card-content">
                        <h3>Parking Area</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim
                        </p>
                    </div>

                </div>

                <div className="feature-card left-card">
                    <div className="card-content">
                        <h3>Party Hall</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim
                        </p>
                    </div>

                    <div className="card-img">
                        <img src={party} alt="" />
                    </div>
                </div>

                <div className="feature-card right-card">
                    <div className="card-img">
                        <img src={meeting} alt="" />
                    </div>

                    <div className="card-content">
                        <h3>Meeting Area</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim
                        </p>
                    </div>

                </div>

                <div className="feature-card left-card">
                    <div className="card-content">
                        <h3>Children Playing Area</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim
                        </p>
                    </div>

                    <div className="card-img">
                        <img src={children} alt="" />
                    </div>
                </div>

            </div>

        </Wrapper>
    )
}
export default OtherFeatures