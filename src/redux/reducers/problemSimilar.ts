interface IProblem {
  id: number;
  problemType: string;
  problemURL: string;
  unitName: string;
  isClicked: boolean;
}

interface IState {
  similarModal: boolean;
  problemsState: Array<IProblem>;
  similarsState: Array<IProblem>;
}

export const initialState: IState = {
  problemsState: [],
  similarsState: [],
  similarModal: false,
};

export const SET_PROBLEMS = "SET_PROBLEMS" as const;
export const SET_SIMILARS = "SET_SIMILARS" as const;
export const CLICK_SIMILAR_BTN = "CLICK_SIMILAR_BTN" as const;
export const CLICK_DELETE_BTN = "CLICK_DELETE_BTN" as const;
export const CLICK_ADD_SIMILAR_BTN = "CLICK_ADD_SIMILAR_BTN" as const;
export const CLICK_SWITCH_SIMILAR_BTN = "CLICK_SWITCH_SIMILAR_BTN" as const;

export const setProblems = (payload) => ({ type: SET_PROBLEMS, payload });
export const setSimilars = (payload) => ({ type: SET_SIMILARS, payload });
export const clickSimilarBtn = (id: number) => ({ type: CLICK_SIMILAR_BTN, id });
export const clickDeleteBtn = (id: number) => ({ type: CLICK_DELETE_BTN, id });
export const clickAddSimilarBtn = (id: number) => ({ type: CLICK_ADD_SIMILAR_BTN, id });
export const clickSwitchSimilarBtn = (id: number) => ({ type: CLICK_SWITCH_SIMILAR_BTN, id });

type NextAction = ReturnType<
  typeof setProblems            |
  typeof setSimilars            |
  typeof clickSimilarBtn        |
  typeof clickDeleteBtn         |
  typeof clickAddSimilarBtn     |
  typeof clickSwitchSimilarBtn
>;


export default (prev: IState = initialState, next: NextAction): IState => {
  let isModal = false;
  let index = prev.problemsState.findIndex(obj=>obj.isClicked===true)

  switch (next.type) {
    case SET_PROBLEMS:
      return {
        ...prev,
        problemsState: next.payload
      };
    case SET_SIMILARS:
      return {
        ...prev,
        similarsState: next.payload
      };
    //similar btn + similar modal
    case CLICK_SIMILAR_BTN: 
      return {
        ...prev,
        problemsState: [
          ...prev.problemsState.map(obj=> {
            //해당 버튼 클릭
            if(obj.id === next.id) {
              if(obj.isClicked) isModal = !prev.similarModal;
              else isModal = true;
              return {...obj, isClicked: !obj.isClicked}
            }
            //나머지들은 꺼준다
            else if(obj.isClicked) {
              return {...obj, isClicked: false}
            }
            else 
              return obj;
          })
        ],
        similarModal: isModal
      };
    case CLICK_DELETE_BTN:
      if(index !== -1 && (prev.problemsState[index].id === next.id)) {
        return {
          ...prev,
          problemsState: [
            ...prev.problemsState.filter(obj=> {
              return obj.id !== next.id
            })
          ],
          similarModal: !prev.similarModal
        }
      }
      else {
        return {
          ...prev,
          problemsState: [
            ...prev.problemsState.filter(obj=> {
              return obj.id !== next.id
            })
          ],
          similarModal: prev.similarModal
        };
      }
      
    case CLICK_ADD_SIMILAR_BTN: 
      return {
        ...prev,
        problemsState: [
          ...prev.problemsState.slice(0, index+1),
             {...prev.similarsState.find(obj=> obj.id === next.id)},
          ...prev.problemsState.slice(index+1, prev.problemsState.length)
        ],
        similarsState: [
          ...prev.similarsState.filter(obj=> obj.id !== next.id)
        ]
      }

    case CLICK_SWITCH_SIMILAR_BTN:
      return {
        ...prev,
        problemsState: [
          ...prev.problemsState.map(obj=>{
            if(obj.isClicked === true) {
              return {...prev.similarsState.find(obj=>obj.id === next.id), isClicked: true}
            }
            return obj
          })
        ],
        similarsState: [
          ...prev.similarsState.map(obj=>{
            if(obj.id === next.id) {
              return {...prev.problemsState.find(obj=>obj.isClicked === true), isClicked: false}
            }
            return obj
          })
        ]
      }
    default:
      return prev;
  }
}