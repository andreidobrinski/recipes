import React, { useState } from 'react'
import styled from 'styled-components'

const List = ({ children }) => {
  const listItems = children.map(child => <ListItem name={child} key={child} />)
  return (
    <ul style={{ listStyleType: 'none', marginLeft: '16px' }}>{listItems}</ul>
  )
}

const ListItem = ({ name }) => {
  const [checked, setChecked] = useState(false)

  return (
    <li>
      <Label checked={checked}>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {name}
      </Label>
    </li>
  )
}

const Label = styled.label`
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
  display: flex;
  align-items: baseline;
  input {
    margin-right: 8px;
  }
`

export default List
