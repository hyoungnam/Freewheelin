import React from 'react'
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/reducers';
import { clickAddSimilarBtn, clickSwitchSimilarBtn } from 'redux/reducers/problemSimilar';
import Problem from 'presentationals/components/Problem';

const SimilarContainer: React.FC = () => {

  const dispatch = useDispatch();
  const { similars } = useSelector((reducers: RootState) => ({
    similars: reducers.problemSimilar.similarsState
  }));
  const { problems } = useSelector((reducers: RootState) => ({
    problems: reducers.problemSimilar.problemsState
  }));
  const clickAddSimilarBtnHandler = (id: number) => {
    dispatch(clickAddSimilarBtn(id));
  }
  const clickSwitchSimilarBtnHandler = (id: number) => {
    dispatch(clickSwitchSimilarBtn(id));
  }
  const findCurrentPickProblem = () => {
    const problem = problems.find(item=>{
      return item.isClicked === true
    })
    return problem.unitName
  } 

  return (
    <>
      <H4>{findCurrentPickProblem()}</H4>
      {similars.map((item, index)=>
        {return <Problem key={item.id}
                         id={item.id}
                         index={index+1}
                         problemType={item.problemType}
                         problemURL={item.problemURL}
                         unitName={item.unitName}
                         mainBtnName="추가"
                         subBtnName="교체"
                         mainBtnHandler={clickAddSimilarBtnHandler}
                         subBtnHandler={clickSwitchSimilarBtnHandler}
                         
        />})}
    </>
  )
}

export default React.memo(SimilarContainer)

const H4 = styled.h4`
  padding: 8px 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: #4C4C4C;
  background-color: #F5F5F5;
`