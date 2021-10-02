import styled from 'styled-components'
import { useHistory } from "react-router-dom";
import Single3 from './Single3';

function Block3({title1, title2, data, cat}){
    const history = useHistory();
    console.log(data)
    return (
        <Block3Styled>
            <div className='one'>
                <div className='text1'>{title1}</div>
                <div onClick={() => history.push("/crack")} className='text2'>
                {title2}
                </div>
            </div>
            <div className="two">
                {data.map((el)=>{
                    return <Single3 {...el}/>
                })}
            </div>
        </Block3Styled>
    )
}

const Block3Styled = styled.div`
    /* border: 1px solid black; */
    height: 578px;
    margin-top: 56px;
    .one {
    /* border: 1px solid red; */
    display: flex;
    justify-content: space-between;
    height: 30px;
    .text1 {
      font-size: 24px;
      font-weight: bold;
      color: #3c4852;
      cursor: pointer;
    }
    .text2 {
      font-size: 24px;
      font-weight: bold;
      color: #08bd80;
      cursor: pointer;
    }
  }
  .two{
      /* border: 1px solid red; */
      margin-top: 72px;
      height: 418px;
      display: grid;
      grid-template-columns: 49% 49%;
      grid-column-gap: 2%;
      grid-row-gap: 18px;
  }
`;

export default Block3;