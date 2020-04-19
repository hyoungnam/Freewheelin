import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'redux/reducers';
import { setProblems, getProblemsLoading, getProblemsError, clickSimilarBtn, clickDeleteBtn } from 'redux/reducers/problemSimilar';
import { useDataFetch } from 'hooks/useDataFetch';
import Problem from 'presentationals/components/Problem';

const ProblemContainer: React.FC = () => {

  const dispatch = useDispatch();
  useDataFetch(`http://localhost:3000/data/problems.json`, setProblems, getProblemsLoading, getProblemsError);
  const { problems, problemsLoading, problemsError } = useSelector((reducers: RootState) => ({
    problems: reducers.problemSimilar.problemsState,
    problemsLoading: reducers.problemSimilar.problemsLoading,
    problemsError: reducers.problemSimilar.problemsError,
  }));
  const clickSimilarBtnHandler = (id: number) => {
    dispatch(clickSimilarBtn(id));
  }
  const clickDeleteBtnHandler = (id: number) => {
    dispatch(clickDeleteBtn(id));
  }

  if(problemsLoading && !problems) return <div>로딩중...</div>
  if(problemsError) return <div>에러 발생...</div>
  return (
    <>
      {problems && problems.map((item, index)=>
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
