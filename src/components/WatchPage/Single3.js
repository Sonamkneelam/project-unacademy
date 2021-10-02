import styled from "styled-components"

function Single3({Followers,Watchmins,desc,id,img,name}){
    console.log(Followers,Watchmins,desc,id,img,name)
    return (
        <Single3Styled>
            <div className="one3">
                <img src={img} alt="people"/>
            </div>
            <div className="two3">
                <div className="two31">{name}</div>
                <div className="two32">{desc}</div>
                <div className="two33">
                    <div className="two331">
                        <div className="text31">{Watchmins}</div>
                        <div className="text32">Watch mins</div>
                    </div>
                    <div className="two331">
                        <div className="text31">{Followers}</div>
                        <div className="text32">Followers</div>
                    </div>
                </div>
            </div>
        </Single3Styled>
    )
}

const Single3Styled =styled.div`
    /* border: 1px solid black; */
    height: 200px;
    display: grid;
    grid-template-columns: 20% 75%;
    .one3{
        margin-left: 20% ;
        /* border: 1px solid black; */
        height: 152px;
        margin-top: 24px;
        img{
            width: 100%;
            object-fit: cover;
            height: 56px;
        }
    }
    .two3{
        /* border: 1px solid black; */
        margin-left: 2%;
        height: 152px;
        margin-top: 24px;
        .two31{
            font-size: 14px;
            font-weight: bold;
            color: #3C4852;

        }
        .two32{
            font-size: 14px;
            color: #3C4852;
            margin-top: 16px;
            height: 68px;
            /* border: 1px solid blue; */
        }
        .two33{
            /* border: 1px solid blue; */
            margin-top: 14px;
            display: flex;
            .two331{
                width: 30%;
                /* border: 1px solid red; */
                .text31{
                    font-weight: bold;
                    font-size: 14px;
                    color: #3C4852;
                }
                .text32{
                    font-size: 14px;
                    color: #7A8B94;
                }
            }
        }
    }
`;

export default Single3;