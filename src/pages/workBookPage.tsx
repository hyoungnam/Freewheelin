import React from 'react'
import styled, { css } from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/reducers';
import Button from "presentationals/atoms/Button";
import Title from "presentationals/atoms/Title";
import ProblemContainer from 'containers/ProblemContainer';
import SimilarContainer from 'containers/SimilarContainer';
import { setSimilars, getSimilarsLoading, getSimilarsError } from 'redux/reducers/problemSimilar';
import { useDataFetch } from 'hooks/useDataFetch';

const WorkBookPage: React.FC = () => {
  
  useDataFetch(`http://localhost:3000/data/similars.json`, setSimilars, getSimilarsLoading, getSimilarsError)
  const { similarModal } = useSelector((reducers: RootState) => ({
    similarModal: reducers.problemSimilar.similarModal,
  }));

  return (
    <>
      <Background>
        <PageLayout>    
          <Section>
            <Title name="학습지 상세 편집" />
            <Wrapper>
              <ProblemContainer />
            </Wrapper>
          </Section>
          
          <Section>
            <Title name="문항 교체/추가" alignCenter />
            <Wrapper color="#FFFFFF" center={!similarModal}>
              {similarModal ? <SimilarContainer />
                            : <p>
                                <Button onClickHandler={()=>{window.alert("왼쪽 유의문항 버튼을 누르세요")}} name="유의문항"/>버튼을 누르면<br></br> 
                                해당 문제의 유사 문항을 볼 수 있습니다.
                              </p>
              }
              
            </Wrapper>
          </Section>
        </PageLayout>
      </Background>
    </>
  )
}
export default WorkBookPage;

const Background = styled.main`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #F5F5F5;
`
const PageLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 1300px;
  max-width: 1300px;
  margin: 0 auto;
`
const Section = styled.section`
  width: 49.6%;
  margin-left: 8px;
  padding: 0px 4px;
`

interface IWrapperProps {
  color?: string
  center?: boolean
}
const Wrapper = styled.div<IWrapperProps>`
  height: 100vh;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    display: none;
  }
  ${(props=>props.color && css`
    background: ${props.color};
  `)}
  ${(props=>props.center && css`
    display: flex;
    justify-content: center;
    align-items: center;
  `)}
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 28px;
    color: #9F9F9F;
    text-align: center;
  }
`


