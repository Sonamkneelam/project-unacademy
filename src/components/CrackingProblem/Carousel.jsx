/** @format */
import React from "react";
import styled from "styled-components";
// import LoadingBar from "react-top-loading-bar";

export const CauroselDiv = ({ title, detail, change }) => {
  console.log(detail);

  return (
    <div style={{ display: "grid" }}>
      <Title>
        <TitleH2>{title}</TitleH2>
      </Title>
      <SecondComp>
        {!change
          ? DummyData.map(({ img, title, end, name }) => {
              return (
                <InnerSecondCOmp>
                  <InnerTwo>
                    <img src={img} alt='' />
                  </InnerTwo>
                  <InnerTwo2>
                    <InnerTwo22>
                      <Second>
                        <SecondSpan>Hindi</SecondSpan>
                        <SecondSpan1>Beyond School Syllabus</SecondSpan1>
                      </Second>
                      <LinkOne>
                        <h4>{title}</h4>
                      </LinkOne>
                      <InnerTwo22P>{end}</InnerTwo22P>
                    </InnerTwo22>
                    <div style={{ webkitBoxFlex: 1, flexGrow: 1 }}></div>
                    <InnerTwo23>
                      <h4>{name}</h4>
                    </InnerTwo23>
                  </InnerTwo2>
                </InnerSecondCOmp>
              );
            })
          : DummyData2.map(({ img, title, end, name }) => {
              return (
                <InnerSecondCOmp>
                  <InnerTwo>
                    <img
                      src='https://edge.uacdn.net/static/thumbnail/course/5b7412dd14154ae9b1736be89fea72de.png?q=75&w=1920&fm=webp'
                      alt=''
                    />
                  </InnerTwo>
                  <InnerTwo2>
                    <InnerTwo22>
                      <Second>
                        <SecondSpan>Hindi</SecondSpan>
                        <SecondSpan1>Beyond School Syllabus</SecondSpan1>
                      </Second>
                      <LinkOne>
                        <h4>{title}</h4>
                      </LinkOne>
                      <InnerTwo22P>Ended on Oct 18, 2020</InnerTwo22P>
                    </InnerTwo22>
                    <div style={{ webkitBoxFlex: 1, flexGrow: 1 }}></div>
                    <InnerTwo23>
                      <h4>Satish Kumar</h4>
                    </InnerTwo23>
                  </InnerTwo2>
                </InnerSecondCOmp>
              );
            })}
      </SecondComp>
    </div>
  );
};

const Title = styled.div`
  display: flex;
  margin-top: 28px;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px;
  grid-column: span 18 / auto;
`;
const TitleH2 = styled.h2`
  font-weight: bold;
  font-size: 20px;
  line-height: 150%;
  color: #3c4852;
  margin: 0px;
`;

const SecondComp = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  grid-gap: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
`;
const InnerSecondCOmp = styled.div``;
const InnerTwo = styled.div`
  max-height: 100%;
  max-width: 100%;
  & img {
    max-width: 100%;
    object-fit: cover;
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 12px;
    cursor: pointer;
  }
`;
const InnerTwo2 = styled.div`
  max-height: 100%;
  max-width: 100%;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  text-align: left;
  padding: 16px;
`;
const InnerTwo22 = styled.div`
  padding-bottom: 8px;
  display: grid;
  column-gap: 8px;
  -webkit-box-align: center;
  align-items: center;
`;

const InnerTwo23 = styled.a`
  color: #3c4852;
  line-height: 150%;
  font-size: 12px;
  font-weight: normal;
  & h4 {
    padding-top: 8px;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
    margin: 0px;
    color: #3c4852;
  }
`;
const DummyData = [
  {
    img: "https://edge.uacdn.net/static/thumbnail/course/be68717404f44b36bb6220e46ba8222f.png?q=100&w=512",
    title: "Simple robot in 60 minutes",
    end: "Ended on Oct 18, 2020",
    name: "Satish Kumar",
  },
  {
    img: "https://edge.uacdn.net/static/thumbnail/course/0a8f59488b194177a3ef264b8856b644.png?q=100&w=512",
    title: "10 Hacks That Only a Financial Genius Knows",
    end: "Ended on Oct 18, 2020",
    name: "Himanshu Arora",
  },
  {
    img: "https://edge.uacdn.net/static/thumbnail/course/3da7ea360a884cb98a2910e174ee6003.png?q=100&w=512",
    title: "10 Commandments of Salesmanship",
    end: "Ended on Oct 18, 2020",
    name: "Mihair Koltharkar",
  },
  {
    img: "https://edge.uacdn.net/static/thumbnail/course/a6e759f109b547b18f274305548ca828.png?q=100&w=512",
    title: "10 Cool applications of Python",
    end: "Ended on Oct 18, 2020",
    name: "Ishan Sharma",
  },
];
const DummyData2 = [
  {
    img: "https://edge.uacdn.net/static/thumbnail/course/be68717404f44b36bb6220e46ba8222f.png?q=100&w=512",
    title: "Simple robot in 60 minutes",
    end: "Ended on Oct 18, 2020",
    name: "Satish Kumar",
  },
  {
    img: "https://edge.uacdn.net/static/thumbnail/course/0a8f59488b194177a3ef264b8856b644.png?q=100&w=512",
    title: "10 Hacks That Only a Financial Genius Knows",
    end: "Ended on Oct 18, 2020",
    name: "Himanshu Arora",
  },
  {
    img: "https://edge.uacdn.net/static/thumbnail/course/3da7ea360a884cb98a2910e174ee6003.png?q=100&w=512",
    title: "10 Commandments of Salesmanship",
    end: "Ended on Oct 18, 2020",
    name: "Mihair Koltharkar",
  },
  {
    img: "https://edge.uacdn.net/static/thumbnail/course/a6e759f109b547b18f274305548ca828.png?q=100&w=512",
    title: "10 Cool applications of Python",
    end: "Ended on Oct 18, 2020",
    name: "Ishan Sharma",
  },
];

const InnerTwo22P = styled.div`
  padding-top: 4px;
  padding-bottom: 4px;
  font-weight: normal;
  font-size: 12px;
  line-height: 150%;
  margin: 0px;
  color: #3c4852;
`;

const LinkOne = styled.div`
  line-height: 150%;
  font-size: 12px;
  font-weight: normal;
  color: #3c4852;
  & h4 {
    padding-bottom: 4px;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    margin: 0px;
    color: #3c4852;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    overflow-wrap: break-word;
  }
`;

const Second = styled.div`
  display: flex;
  justify-content: start;
`;
const SecondSpan = styled.div`
  margin-right: 5px;
  color: #3c4852;
  font-size: 10px;
  font-weight: bold;
  padding: 6px;
  border-radius: 4px;
  display: inline-block;
  text-transform: uppercase;
  line-height: 1;
  line-height: 15px;
  margin-bottom: 6px;
`;
const SecondSpan1 = styled.div`
  color: #2d81f7;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 0px;
  border-radius: 4px;
  display: inline-block;
  text-transform: uppercase;
  font-family: AvertaStd-Bold;
  font-size: 12px;
  line-height: 14px;
`;
