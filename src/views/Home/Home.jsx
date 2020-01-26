import React from 'react'

import {
  About,
  HowToUse,
  ESCCheck,
  News,
  AuthorizationType
} from './parts'

export default function Home () {
  return (
    <>
      <About />

      <HowToUse />

      <ESCCheck />

      <News />

      <AuthorizationType />
    </>
  )
}
