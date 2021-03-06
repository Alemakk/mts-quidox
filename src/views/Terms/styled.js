import styled from 'styled-components'
import { Collapse } from 'antd'

import { styleguide } from '../../constants'

const { Panel } = Collapse
const { colors } = styleguide

const TermsContent = styled.section``

const ThemeCollapse = styled(Collapse)`
  && {
    border-radius: 0;
    .ant-collapse-item {
      .ant-collapse-header {
        font-size: 1.8rem;
        font-weight: bold;
        padding: 2rem 2rem 2rem 7rem;
        color: ${colors.rolling_stone};
        
        .ant-collapse-arrow {
          font-size: 2rem;
          left: 4rem;
        }
      }
    }
    
    .ant-collapse-content {
      .ant-collapse-content-box {
        background-color: ${colors.alabaster};
      }
    }
    
    .ant-collapse-item-active {
      .ant-collapse-header {
        background-color: ${({ color }) => color};
        color: ${colors.white};
      }
    }
  }
`

const ThemePanel = styled(Panel)``

export {
  TermsContent,
  ThemeCollapse,
  ThemePanel
}
