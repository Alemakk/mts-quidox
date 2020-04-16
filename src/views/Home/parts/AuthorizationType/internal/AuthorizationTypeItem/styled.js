import styled from 'styled-components'
import { Link } from 'react-router-dom'

const AuthorizationItem = styled(Link)`
  text-align: center;
  cursor: pointer;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
