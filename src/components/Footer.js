import styled from "styled-components";
import Footercomp from "./Footercomp";

const data=[
    {
        title:"COMPANY",
        text1:"About us",
        text2:"Careers",
        text3:"Blogs",
        text4:"Privacy Policy",
        text5:"Terms and Conditions"
    },
    {
        title:"POPULAR GOALS",
        text1:"IIT JEE",
        text2:"UPSC CSE GS",
        text3:"SSC Exams",
        text4:"CBSE Class 12",
        text5:"NEET UG"
    },
    {
        title:"OTHER LINKS",
        text1:"User Guidelines",
        text2:"Site Map",
        text3:"Refund Policy",
        text4:"Legal Notices",
        text5:"Plus subscriptions T&C"
    }
]

function Footer(){
    return(
        <FooterStyled>
            <div className="outer">
            <div className="one">
                <img src="https://static.uacdn.net/production/_next/static/images/logo.svg?q=75&w=256" alt="logo"/>
                <div className="one1">
                    <div>
                        <img src="" alt="logo"/>
                    </div>
                    <div>
                        <img src="" alt="logo"/>
                    </div>
                    <div>
                        <img src="" alt="logo"/>
                    </div>
                    <div>
                        <img src="" alt="logo"/>
                    </div>
                    <div>
                        <img src="" alt="logo"/>
                    </div>
                </div>
                <div className="text1">© 2021 Sorting Hat Technologies Pvt Ltd</div>
            </div>
            <div>
                <Footercomp {...data[0]}/>
            </div>
            <div>
                <Footercomp {...data[1]}/>
            </div>
            <div>
                <Footercomp {...data[1]}/>
            </div>
            <div></div>
            </div>
        </FooterStyled>
    )
}

const FooterStyled =styled.div`
    border: 1px solid blue;
    margin-top: 105px;
    height: 212px;
    .outer{
        width: 80%;
        margin: auto;
        border: 1px solid violet;
        display: grid;
        height: 212px;
        grid-template-columns: 20% 20% 20% 20% 20%;
        div{
            /* border: 1px solid pink; */
        }
        .one{
            margin-top: 32px;
            img{
                width: 50%;
            }
            .text1{
                font-size: 8px;
                margin-top: 26.81px;
            }
            .one1{
                border: 1px solid black;
                width: 60%;
                margin-top: 33.79px;
                display: flex;
                justify-content: space-between;
                div{
                    width: 10.5px;
                    height: 10.5px;
                    border: 1px solid red;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
`;

export default Footer;