import React from 'react'
import styled from 'styled-components'

const Resume = () => {
  return (
    <BackgroundWrapper>
      <Wrapper>
        <h1>Choi Minseok - Résumé</h1>
        {/* Personal Detail */}
        <h2>Personal Detail</h2>
        <Label>Github</Label>
        <a href="https://github.com/CHOIMINSEOK">
          https://github.com/CHOIMINSEOK
        </a>
        <Label>Email</Label>
        <a href="mailto:cms3718@gmail.com">cms3718@gmail.com</a>
        <Label>Website</Label>
        <a href="https://minseok.blog">https://minseok.blog</a>
        <Label>Phone</Label>
        +82 10 9445 3718
        {/* Summary */}
        <h2>Summary</h2>
        <Label>Skills</Label>
        <ul>
          <li>Language: Kotlin, Java, Swift, Typescript, Javascript </li>
          <li>Mobile Development: Native Android, Native iOS, React Native</li>
          <li>Web Framework: React </li>
          <li>CI: Bitrise </li>
        </ul>
        {/* Education */}
        <h2>Education</h2>
        2013- Electronic Engineering/{' '}
        <a href="https://www.hanyang.ac.kr/">Hanyang University</a>
        {/* Career */}
        <h2>Career</h2>
        <Label>
          Sep. 2017- <a href="https://minding.today">Minding</a>
        </Label>
        Native Android / <a href="https://play.google.com/store/apps/details?id=today.minding">MindingApp</a>
        <ul>
          <li>Kotlin</li>
          <li>Retrofit2</li>
          <li>RxJava</li>
          <li>Databinding</li>
        </ul>
        Native iOS / <a href="https://apps.apple.com/us/app/%EB%A7%88%EC%9D%B8%EB%94%A9-%EB%82%98%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%A7%88%EC%9D%8C%EC%8A%B5%EA%B4%80/id1447465396">MindingApp</a>
        <ul>
          <li>Swift</li>
          <li>Moya</li>
          <li>RxSwift, RxCocoa</li>
          <li>ReSwift</li>
        </ul>
        React Native / not deployed


        <h2>Outsourcing Projects</h2>
        <Label>KT BDAS System with Samsung SDS</Label>I implemented a module that
        handled its own databases using Java. The database had millions of
        subscribers and the module reduced the operation time more than half.
        <ul>
          <li>Java</li>
        </ul>
        <h2>Activity</h2>
        <p>2018 25, Jan. 2018 ~ 28, Feb. 2018, Pyeongchang Olympic</p>
        <p>10th Sep. 2017 ~ Dec. 2017, Hanyang Startup Academy </p>
        <p>Mar. 2017 ~ Nov. 2017, LikeLion 5th </p>
        <p>24, Feb. 2017 ~ 26, Feb. 2017, Social Innovation Camp 36 </p>
        <p>16, July. 2016 ~ 20, Aug. 2016, World Friends ICT Volunteer </p>
      </Wrapper>
    </BackgroundWrapper>
  )
}

const BackgroundWrapper = styled.div`
  background-color: #f3f3f3;
  display: flex;
  padding: 30px;
`

const Wrapper = styled.div`
  max-width: 1024px;
  height: 100%;
  margin: auto;
  background-color: white;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  line-height: 1.5;
  color: #4a4a4a;
  font-family: 'Noto Sans KR';
`

const Label = styled.p`
  font-weight: bold;
`

export default Resume
