import  styled  from "styled-components";

function Single({icon,text}){
    return(
        <SingleStyled>
            {icon}
            <div className="text">{text}</div>
        </SingleStyled>
    )
}

const SingleStyled = styled.div`
                display: flex;
                padding: 2%;
                color: #7A8B94;
                .text{
                    font-size: 14px;
                    font-weight: bold;
                    color: #3C4852;
                }
                &:hover{
                    cursor: pointer;
                    background-color: #E9EEF2;
                    box-shadow: rgb(0 0 0 / 10%) 0px 2px 6px;
                }
`;

export default Single;