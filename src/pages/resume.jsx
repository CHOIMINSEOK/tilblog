import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../res/color'
import { SectionDivider } from '../components/resume/SectionDivider'
import { Label } from '../components/resume/Label'

const Resume = () => {
  return (
    <BackgroundWrapper>
      <Wrapper>
        <Label>
          최민석(Minseok Choi)
        </Label>
        <Link href="mailto:cms3718@gmail.com">cms3718@gmail.com</Link>
        <Link href={'https://github.com/CHOIMINSEOK'}>https://github.com/CHOIMINSEOK</Link>

        <SectionDivider title="자기소개" />
        <Contents>
          {'도전적인 목표를 설정하고 성취하는 것을 즐깁니다. \n문제해결을 위한 본질적인 고민을 많이 합니다. \n현재 상태를 지표를 통해 파악하고 우선순위에 맞춰 행동해나가는데 익숙합니다.'}
        </Contents>
        
        <SectionDivider title="경력"/>
        <Contents>
          <div className="label">
            (주) 마인딩 / 2017.11 - 2020.6.19
          </div>
          <div className="label">
            :: 마이루틴 <Link href="https://myroutine.kr">(https://myroutine.kr)</Link>
          </div>
          {'작은 실천을 통해 나다운 삶을 살도록 돕기 위해  만든 습관 관리 및 커뮤니티 서비스입니다.'}

          <div className="sublabel">
            웹 프론트 구현
          </div>
          {'- 앱 설계 및 피쳐 개발/ 배포 및 유지보수 \n- 기여도 30% \n- Stack: React, Typescript'}

          <div className="sublabel">
            서버 개발
          </div>
          {'- 앱 설계 및 피쳐 개발/ 배포 및 유지보수 \n- DB 스키마 설계 \n- 기여도 50% \n- Stack: ExpressJs'}

          <div className="label">
            :: 마인딩 <Link href="https://minding.today">(https://minding.today)</Link>
          </div>
          {'온라인 마음관리 서비스를 위한 앱을 개발하였습니다. 심리 상담사인 트레이너와 유저들을 연결하고, 명상 등의 다양한 미션들로 구성된 프로그램을 앱 상으로 수행할 수 있는 서비스 입니다. '}

          <div className="sublabel">
            안드로이드 앱 개발 <Link href="https://play.google.com/store/apps/details?id=today.minding">(https://play.google.com/store/apps/details?id=today.minding)</Link>
          </div>
          {'- 앱 아키텍쳐를 설계하였습니다( MVVM ) \n- 서비스의 다양한 기능을 개발하였습니다. \n- Bitrise를 이용한 테스트 및 배포 자동화를 구축하였습니다. \n- 기여도 80% \n- Stack : Kotlin, RxJava2, Firebase, AAC, MVVM, Databinding,'}

          <div className="sublabel">
            iOS 앱 개발 <Link href="https://apps.apple.com/us/app/마인딩-나를-위한-마음습관/id1447465396">(https://apps.apple.com/us/app/마인딩-나를-위한-마음습관/id1447465396)</Link>
          </div>
          {'- 앱 아키텍쳐를 설계하였습니다(Redux + MVVM) \n- 서비스의 다양한 기능을 개발하였습니다. \n- Bitrise를 이용한 테스트 및 배포 자동화를 구축하였습니다. \n- 기여도 80%. \n- Stack: Swift, ReSwift, RxSwift, MVVM'}
        </Contents>
        

      </Wrapper>
    </BackgroundWrapper>
  )
}

const BackgroundWrapper = styled.div`
  background-color: #f3f3f3;
  display: flex;
  padding: 30px;


  @media ( max-width: 768px ) {
    padding: 2px;
  }
`

const Wrapper = styled.div`
  max-width: 1024px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto;
  background-color: white;
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  line-height: 1.5;
  color: #4a4a4a;
  font-family: 'Noto Sans KR';
`

const Link = styled.a`
  color: ${COLORS.textAccent};
`

const Contents = styled.div`
  white-space: pre-line;

  .label {
    font-size: 20px;
    font-weight: bold;
    margin-top: 12px;
  }

  .sublabel {
    margin-top: 12px;
    font-size: 18px;
    font-weight: bold;
  }
`


export default Resume
