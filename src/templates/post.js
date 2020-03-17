import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      frontmatter {
        date
        keyword
      }
      html
    }
  }
`

const Post = (props) => {
  return ( 
  <Wrapper>
    <div style={{ width: 600 }} dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
  </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Post