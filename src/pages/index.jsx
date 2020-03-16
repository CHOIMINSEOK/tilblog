import React from 'react'
import styled from 'styled-components'
import * as base from '../components/base/index.js'
import RoundedOutlinBox from '../components/RoundedOutlineBox'

export default () => {
  return (
    <Wrapper>
      <Header>
        <base.VerticalSpacer size={40} />
        <Title>
          최민석
          <Subtitle>/ Minseok Choi</Subtitle>
        </Title>
        <base.VerticalSpacer size={10} />
        <Description>Get motivated from every challenges. </Description>
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
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Apple SD Gothic Neo', 'Helvetica', 'Arial';
`
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
  margin-bottom: 2px;
  align-self: flex-end;
`

const Description = styled.div`
  font-size: 20px;
  color: #333333;
`

const LI = styled.li`
  margin-left: 0px;
`
