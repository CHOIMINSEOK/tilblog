import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const PostListItem = ({ slug, tag }) => (
  <Wrapper>
    <Link to={`/post/${slug}`} style={{ textDecoration: "none" }}>
      <div>{slug}</div>
      <SubTitle>{tag}</SubTitle>
    </Link>
  </Wrapper>
)

const Wrapper = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
`

const SubTitle = styled.div`
  color: #808094
`

export default PostListItem