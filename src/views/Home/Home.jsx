import React from 'react'

import {
  About,
  HowToUse,
  ESCCheck,
  News,
  AuthorizationType,
  ServicePackage,
  HowItsWork,
  QuidoxProcess,
  QuestionsForm
} from './parts'

export default function () {
  return (
    <>
      <About />
      <QuidoxProcess />
      <HowToUse />
      <HowItsWork />
      <ESCCheck />
      <ServicePackage />
      <QuestionsForm />
      <News />
      <AuthorizationType />
    </>
  )
}
