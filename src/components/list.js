import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { CheckmarkButton } from './checkmark-button'

const List = ({ children }) => {
  const listItems = children.map(child => <ListItem name={child} key={child} />)
  return (
    <ul style={{ listStyleType: 'none', marginLeft: '16px' }}>{listItems}</ul>
  )
}

const ListItem = ({ name }) => {
  const [isChecked, setChecked] = useState(false)

  return (
    <Wrap>
      <CheckmarkButton
        isChecked={isChecked}
        handleCheck={() => setChecked(!isChecked)}
        name={name}
      />
      <Label isChecked={isChecked}>{name}</Label>
    </Wrap>
  )
}

const Wrap = styled(motion.li)`
  display: flex;
  align-items: center;
`

const Label = styled.p`
  line-height: initial;
  margin: 0;
  text-decoration: ${props => (props.isChecked ? 'line-through' : 'none')};
`

export default List
