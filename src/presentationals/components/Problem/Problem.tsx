import React from 'react'
import styled from 'styled-components';
import Button from "presentationals/atoms/Button";

export interface IProblemProps {
  key: number,
  id?: number,
  index?: number,
  mainBtnName: string,
  subBtnName: string,
  problemType: string,
  problemURL: string,
  unitName: string,
  isClicked?: boolean
  mainBtnHandler?: (id:number)=>void
  subBtnHandler?: (id:number)=>void
}

const Problem: React.FC<IProblemProps> = ({id, problemType, problemURL, unitName, index, isClicked, mainBtnHandler, subBtnHandler, mainBtnName, subBtnName}) => {
  return (
    <ProblemBox>
      <Header>
        <ProblemType>{problemType}</ProblemType>
        <UnitName>{unitName}</UnitName>
        <ButtonWrapper>
          <Button name={mainBtnName} 
                  id={id}
                  isClicked={isClicked}
                  onClickHandler={mainBtnHandler}
                  middle />
          <Button name={subBtnName}
                  id={id}
                  onClickHandler={subBtnHandler}
                  middle />
        </ButtonWrapper>
      </Header>
      <Body>
       <ProblemNumber>{index}</ProblemNumber>
        <ImgBox>
          <img src={`${problemURL}`} alt="img"/>
        </ImgBox>
      </Body>
    </ProblemBox>
  )
}

export default React.memo(Problem);

const ProblemBox = styled.div`
  background-color: #FFFFFF;
  margin-bottom: 4px;
  padding-bottom: 64px;
`;
const Header = styled.div`
  display: flex;
  padding: 8px 12px;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: #F5F5F5;
  margin-bottom: 12px;
`;
const ProblemType = styled.h3`
  padding: 8px 0;
  margin-left: 12px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #9F9F9F;
`
const UnitName = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  color: #4C4C4C;
  width: 340px;
  margin-right: 12px;
`
const ButtonWrapper = styled.span`

`
const Body = styled.div`
  padding-bottom: 12px;
  display: flex;
`
const ProblemNumber = styled.div`
  padding: 8px;
  margin-left: 28px;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 35px;
  color: #02C7F2;
`
const ImgBox = styled.div`
  width: 80%;
  margin-left: 32px;
`