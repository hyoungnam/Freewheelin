import React from 'react'
import styled, { css } from "styled-components";

interface ITitleProps {
  name: string;
  alignCenter?: boolean;
}

const Title: React.FC<ITitleProps> = ({name, alignCenter}) => {
  return (
    <header>
      <Div alignCenter={alignCenter}>{name}</Div>
    </header>
  )
}
export default Title;
interface IstyledProps {
  alignCenter?: boolean

}
const Div = styled.h2<IstyledProps>`
  padding: 16px 20px 12px;
  margin-bottom: 4px;
  color: #4C4C4C;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  background-color: #FFFFFF;
  ${(props)=> props.alignCenter && css`
    text-align: center;
  `}
`