import styled from "styled-components";

function Block2({title1,title2}){
    return (
        <Block2Styled>
            <div className="one">
                <div className="text1">{title1}</div>
                <div className="text2">{title2}</div>
            </div>
            <div className="two">
                {[1,2,3].map((el)=>{
                    return(<div className="main">
                        <div className="img"></div>
                        <div className="main1"></div>
                        <div className="main2">Sentence Structures For Spoken</div>
                        <div className="main3">Sentence Structures For Spoken</div>
                        <div className="main4">Sentence Structures For Spoken</div>
                    </div>)
                })}
            </div>
        </Block2Styled>
    )
}

const Block2Styled =styled.div`
    border: 1px solid black;
    margin-top: 64px;
    height: 390px;
    .one{
        border:1px solid red;
        display: flex;
        justify-content: space-between;
        height: 30px;
        .text1{
            font-size: 24px;
            font-weight: bold;
            color: #3C4852;
        }
        .text2{
            font-size: 24px;
            font-weight: bold;
            color: #08BD80;
        }
    }
    .two{
        border: 1px solid red;
        margin-top: 72px;
        height: 288px;
        display: grid;
        grid-template-columns: 31% 31% 31%;
        grid-column-gap: 3.5%;
        .main{
            box-shadow: 0px 14px 50px rgba(0, 0, 0, 0.05);
            border-radius: 6px;
            .img{
                border: 1px solid pink;
                height: 148px;
                width: 100%;
                border-radius: 6px 6px 0px 0px;
            }
            .main2{
                margin-left: 17px;
                font-size: 14px;
                font-weight: bold;
                margin-top: 20px;
                color: #3C4852;
            }
            .main3{
                margin-left: 17px;
                font-size: 14px;
                margin-top: 8px;
                color: #7A8B94;
            }
            .main4{
                margin-left: 17px;
                font-size: 14px;
                margin-top: 24px;
                color: #3C4852;
            }
        }
    }
`;
export default Block2;