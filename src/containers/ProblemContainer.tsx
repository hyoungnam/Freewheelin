import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/reducers';
import { setProblems, clickSimilarBtn, clickDeleteBtn } from 'redux/reducers/problemSimilar';
import { useDataFetch } from 'hooks/useDataFetch';
import Problem from 'presentationals/components/Problem';

const ProblemContainer: React.FC = () => {

  const dispatch = useDispatch();
  useDataFetch(`http://localhost:3000/data/problems.json`, setProblems);
  const { problems } = useSelector((reducers: RootState) => ({
    problems: reducers.problemSimilar.problemsState
  }));
  const clickSimilarBtnHandler = (id: number) => {
    dispatch(clickSimilarBtn(id));
  }
  const clickDeleteBtnHandler = (id: number) => {
    dispatch(clickDeleteBtn(id));
  }
  return (
    <>
      {problems.map((item, index)=>
        {return <Problem key={item.id}
                         id={item.id}
                         index={index+1}
                         problemType={item.problemType}
                         problemURL={item.problemURL}
                         unitName={item.unitName}
                         isClicked={item.isClicked}
                         mainBtnName="유의문항"
                         subBtnName="삭제"
                         mainBtnHandler={clickSimilarBtnHandler}
                         subBtnHandler={clickDeleteBtnHandler}
                         
                />})
      }
    </>
  )
}

export default React.memo(ProblemContainer)
