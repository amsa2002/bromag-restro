import Styled from 'styled-components'

const Wrapper = Styled.main`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
.img-div{
    width: 45%;
    height: 75%;
    img{
        width: 100%;
        height: 100%:
        object-fit: cover;
    }
}
`;

export default Wrapper;