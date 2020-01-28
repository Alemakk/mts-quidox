import React from 'react'

import {
  About,
  HowToUse,
  ESCCheck,
  News,
  AuthorizationType,
  ServicePackage,
  HowItsWork,
  QuidoxProcess
} from './parts'

export default function Home () {
  return (
    <>
      <QuidoxProcess />

      <HowItsWork />

      <AuthorizationType />

      <About />

      <HowToUse />

      <ESCCheck />

      <ServicePackage />

      <News />
    </>
  )
}
