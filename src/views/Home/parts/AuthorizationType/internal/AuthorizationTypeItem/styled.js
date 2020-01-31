import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AuthorizationItem = styled(Link)`
  display: block;
  text-align: center;
  cursor: pointer;
`

AuthorizationItem.Image = styled.div`
  display: inline-block;
  width: 17rem;
  height: 17rem;
  background: url(${({ src }) => src}) center no-repeat;
  background-size: cover;
  margin-bottom: 4rem;
`

export {
  AuthorizationItem
}
