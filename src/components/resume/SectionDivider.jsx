import React from 'react'
import styled from "styled-components"
import { Label } from './Label'
import { VerticalSpacer } from '../base'

export const SectionDivider = ({ title }) => {
  return (
    <>
      <VerticalSpacer size={40}/>
      <Label>{title}</Label>
      <Divider />
    </>
  )
}

const Divider = styled.div`
  height: 1px;
  background-color: #eaeaea;
  width: 100%;
  margin-bottom: 12px;
`