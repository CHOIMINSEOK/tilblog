import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const RoundedOutlinBox = ({ label, to, external }) => {
  return external ? (
    <a href={to} style={{ textDecoration: 'none' }}>
      <Wrapper>{label}</Wrapper>
    </a>
  ) : (
    <Link to={to} style={{ textDecoration: 'none' }}>
      <Wrapper>{label}</Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  display: flex;
  border: 1px solid #999999;
  border-radius: 5px;
  align-items: center;
  justify-contents: center;
  color: #999999;
  padding: 4px 8px 4px 8px;
`

export default RoundedOutlinBox
