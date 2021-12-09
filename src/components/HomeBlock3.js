import styled from "styled-components";

function HomeBlock3({ id, title, image, discription }) {
  return (
    <HomeBlock3Styled key={id}>
      <img src={image} alt="doll" />
      <div className="title">{title}</div>
      <div className="discription">{discription}</div>
    </HomeBlock3Styled>
  );
}

const HomeBlock3Styled = styled.div`
  img {
    width: 100%;
    height: 252px;
    object-fit: cover;
    border-radius: 10px;
  }
  .title {
    width: auto;
    margin-top: 24px;
    font-size: 24px;
    font-weight: bold;
    padding: 0 5px;
  }
  .discription {
    width: auto;
    margin-top: 8px;
    font-size: 16px;
    padding: 0 5px;
  }
`;
export default HomeBlock3;
