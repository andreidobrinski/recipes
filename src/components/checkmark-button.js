import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const iconMotion = {
  hidden: {
    pathLength: 0,
    fill: 'rgba(255, 255, 255, 0)',
  },
  visible: {
    pathLength: 1,
    fill: 'rgba(255, 255, 255, 1)',
  },
}

const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    role="img"
  >
    <title>checkmark</title>
    <motion.path
      d="M9 21.035l-9-8.638 2.791-2.87 6.156 5.874 12.21-12.436 2.843 2.817z"
      variants={iconMotion}
      initial="hidden"
      animate="visible"
    />
  </svg>
)

const Button = styled(motion.button).attrs(() => ({
  type: 'button',
}))`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #41b300;
  border-radius: 50%;
  padding: 6px;
  background-color: ${props => (props.isChecked ? '#41b300' : '#fff')};
  margin-right: 8px;
`
const CheckmarkButton = ({ isChecked, handleCheck, name }) => (
  <Button
    onClick={handleCheck}
    aria-label={`checkbox for ${name}`}
    aria-pressed={isChecked}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.7 }}
    isChecked={isChecked}
  >
    {isChecked && <Icon />}
  </Button>
)

export { CheckmarkButton }
