import styled from "styled-components"

//image imports
import gallery1 from '../../assets/images/galleryImages/gallery1.png'
import gallery2 from '../../assets/images/galleryImages/gallery2.png'
import gallery3 from '../../assets/images/galleryImages/gallery3.png'
import gallery4 from '../../assets/images/galleryImages/gallery4.png'
import gallery5 from '../../assets/images/galleryImages/gallery5.png'



const Wrapper = styled.div`
width: 100%;
height: 100vh;
padding: 0px 180px;
.gallery{
    width: 100%;
    height: 100%;
    padding: 30px 0px;
    display: grid;
    grid-template-rows: repeat(4,20%); 
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
}
.img{
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 20px;

    }
}

.img1{
    grid-row: 1/3;
    grid-column:1/3;
}
.img2{
    grid-row: span 4;
    grid-column: span 1;
}
.img3{
    grid-row: 3/5;
    grid-column: 1/2;
}
.img4{
    grid-row: 3/4;
    grid-column: 2/3;
}
.img5{
    grid-row: 4/5;
    grid-column: 2/3;
}
${'' /* .img3{
    grid-row: 3/5;
    grid-col: 1/3;
}
.img4{
    grid-row: 3/4;
    grid-col: 3/4;
}
.img5{
    grid-row: 4/5;
    grid-col: 3/4;
} */}

`;

const Gallery = () => {
    return (
        <Wrapper>
            <h2>Gallery</h2>

            <div className="gallery">
                <div className="img img1">
                    <img src={gallery1} alt="" />
                </div>
                <div className="img img2">
                    <img src={gallery2} alt="" />
                </div>
                <div className="img img3">
                    <img src={gallery3} alt="" />
                </div>
                <div className="img img4">
                    <img src={gallery4} alt="" />
                </div>
                <div className="img img5">
                    <img src={gallery5} alt="" />
                </div>
            </div>
        </Wrapper>
    )
}
export default Gallery