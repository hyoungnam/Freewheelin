import React from 'react'
import styled, { css } from "styled-components";

interface IButton {
  id?: number;
  name: string;
  middle?: boolean;
  isClicked?: boolean;
  onClickHandler?: (id:number) => void
}

const Button: React.FC<IButton> = ({id, name, middle, isClicked, onClickHandler}) => {
  return (
    <Span onClick={()=>onClickHandler(id)}
          isClicked={isClicked}
          middle={middle}>
      {name}
    </Span>
  )
}

export default Button;

interface ISpanProps {
  middle?: boolean;
  isClicked?: boolean;
}

const Span = styled.span<ISpanProps>`
  border: 1px solid #E0E0E0;
  border-radius: 2px;
  padding: 5px 12px;
  margin: 4px;
  color: #00ABFF;
  background-color: #FFFFFF;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  ${props=>props.middle && css`
     padding: 8px 16px;   
  `}
  ${props=>props.isClicked && css`
     border: 1px solid #00ABFF;
     background: #00ABFF;
     color: #FFFFFF;
  `}
`
