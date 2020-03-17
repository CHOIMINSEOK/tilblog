import React from 'react'
import styled from 'styled-components'
import * as base from '../components/base/index.js'
import RoundedOutlinBox from '../components/RoundedOutlineBox'
import { graphql, useStaticQuery, Link } from 'gatsby'
import PostListItem from '../components/PostListItem.jsx'

export default () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          subtitle
          description
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              keyword
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)


  return (
    <Wrapper>
      <ContentWrapper>
      <Header>
        <base.VerticalSpacer size={40} />
        <Title>
          {data.site.siteMetadata.title}
          <Subtitle>{data.site.siteMetadata.subtitle}</Subtitle>
        </Title>
        <base.VerticalSpacer size={10} />
        <Description>{data.site.siteMetadata.description} </Description>
        <base.VerticalSpacer size={10} />
        <div style={{ display: 'flex' }}>
          <RoundedOutlinBox label="Résumé" to="/resume" external={false} />
          <div style={{ width: '4px' }} />
          <RoundedOutlinBox
            label="Github"
            to="https://github.com/CHOIMINSEOK"
            external
          />
          <div style={{ width: '4px' }} />
          <RoundedOutlinBox
            label="Brunch"
            to="https://brunch.co.kr/@dotori"
            external
          />
        </div>
      </Header>
      <base.VerticalSpacer size={20} />
    
      <PostListWrapper>
        {data.allMarkdownRemark.edges.map(({node}) => (
          <PostListItem slug={node.fields.slug} tag={node.frontmatter.keyword} />
        ))}
      </PostListWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Apple SD Gothic Neo', 'Helvetica', 'Arial';
`

const ContentWrapper = styled.div``

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

const Title = styled.div`
  font-weight: 10;
  font-size: 50px;
  color: #555555;
  display: flex;
  flex-direction: row;
`

const Subtitle = styled.div`
  font-weight: 10;
  font-size: 30px;
  color: #999999;
  margin-left: 12px;
  align-self: flex-end;
  margin-bottom: 2px;
`

const Description = styled.div`
  font-size: 20px;
  color: #333333;
`

const PostListWrapper = styled.div`
`
