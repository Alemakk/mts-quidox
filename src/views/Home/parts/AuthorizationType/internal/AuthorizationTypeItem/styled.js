import styled from 'styled-components'

const AuthorizationItem = styled.div`
  text-align: center;
  cursor: pointer;
`

AuthorizationItem.Image = styled.div`
  display: inline-block;
  width: 17rem;
  height: 17rem;
  background: url(${({ src }) => src}) center no-repeat;
  background-size: cover;
  margin-bottom: 6rem;
`

export {
  AuthorizationItem
}
