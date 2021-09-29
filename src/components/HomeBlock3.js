import styled from "styled-components";


function HomeBlock3({id,title,image,discription}){
    return(
        <HomeBlock3Styled key={id}>
            <img src={image} alt="doll"/>
            <div className="title">{title}</div>
            <div className="discription">{discription}</div>
        </HomeBlock3Styled>
    )
}

const HomeBlock3Styled =styled.div`
    /* border: 1px solid black; */
    img{
        width: 100%;
        height: 237px;
        object-fit: cover;
    }
    .title{
        margin-top: 24px;
        font-size: 24px;
        font-weight: bold;
    }
    .discription{
        margin-top: 8px;
        font-size: 16px;
    }
`;
export default HomeBlock3;