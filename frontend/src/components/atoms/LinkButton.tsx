import React, { memo, ReactNode, VFC } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  font-size: 15px;
  border-radius: 4px;
  color: #fff;
  background-color: #ff333f;
  font-weight: bold;
  cursor: pointer;
`
type Props = {
  children: ReactNode
}
export const LinkButton: VFC<Props> = memo((props) => {
  const { children } = props
  return (
    <Button>
      {children}
    </Button>
  )
})
