import React, { memo, VFC } from 'react'
import styled from 'styled-components'

const Button = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  font-size: 15px;
  border-radius: 4px;
  color: #fff;
  background-color: black;
  font-weight: bold;
  cursor: pointer;
`
type Props = {
  value: string
}

export const SubmitButton: VFC<Props> = memo((props) => {
  const { value } = props
  return (
    <Button type="submit" value={value} />
  )
})
