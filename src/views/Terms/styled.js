import styled from 'styled-components'
import { Collapse } from 'antd'

import { styleguide } from '../../constants'

const { Panel } = Collapse
const { colors } = styleguide

const FAQContent = styled.section``

const ThemeCollapse = styled(Collapse)`
  && {
    border-radius: 0;
    .ant-collapse-item {
      .ant-collapse-header {
        font-size: 2.6rem;
        font-weight: bold;
        padding: 4rem 4rem 4rem 10rem;
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
  FAQContent,
  ThemeCollapse,
  ThemePanel
}
