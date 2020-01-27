import React from 'react'

import {
  About,
  HowToUse,
  ESCCheck,
  News,
  AuthorizationType,
  HowItsWork
} from './parts'

export default function Home () {
  return (
    <>
      <HowItsWork />

      <AuthorizationType />

      <About />

      <HowToUse />

      <ESCCheck />

      <News />
    </>
  )
}
