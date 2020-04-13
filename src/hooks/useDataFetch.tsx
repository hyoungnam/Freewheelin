import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProblems, setSimilars } from 'redux/reducers/problemSimilar';
import fetcher from 'api/fetcher';

export const useDataFetch = (url: string, actionFunc) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetcher(`${url}`)
      .then((resolved)=>{
        const processedData = resolved.data.map(obj => {
          return  {
            id: obj["id"],
            problemType: obj["problemType"],
            problemURL: obj["problemURL"],
            unitName: obj["unitName"],
            isClicked: false
          }
        });
        dispatch(actionFunc(processedData));
      })
  }, [dispatch, url])
}