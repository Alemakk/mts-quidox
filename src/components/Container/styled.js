import styled from 'styled-components'

const ThemeContainer = styled.div`
  width: 100%;
  max-width: ${({ small }) => small ? '80rem' : '150rem'};
  padding: 0 1rem;
  margin: 0 auto;
`

export {
  ThemeContainer
}
