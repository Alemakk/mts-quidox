import styled from 'styled-components'

const ThemeHeader = styled.header`
  position: relative;
  box-shadow: 0px 10px 50px rgba(152, 152, 152, 0.18);
`

ThemeHeader.Top = styled.div`
  text-align: center;
  padding: 0.5rem 0;
  background-color: ${({ color }) => color};
`

ThemeHeader.Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;
`

ThemeHeader.Logo = styled.div`
  width: 18rem;
  height: 8rem;
  background: url(${({ src }) => src}) no-repeat center;
  background-size: cover;
  cursor: pointer;
`

ThemeHeader.Text = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 2.6rem;
  color: #fff;

  span {
    color: #000;
  }
`

export {
  ThemeHeader
}
