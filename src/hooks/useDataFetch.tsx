import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetcher from 'api/fetcher';

export const useDataFetch = (url: string, actionFunc: Function, getLoading: Function, getError: Function) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      dispatch(getLoading());
      try {
        const resolved = await fetcher(`${url}`);
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
      } catch (err) {
        dispatch(getError(err));
      } 
    }
    getData();

  }, [dispatch, url, actionFunc, getLoading, getError])
}