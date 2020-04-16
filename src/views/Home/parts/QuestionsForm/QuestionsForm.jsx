import React from 'react'
import MaskedInput from 'antd-mask-input'

import formItems from './static'
import { Form, Input, notification } from 'antd'
import { Heading, Text, Button, Container } from '../../../../components'
import { QuestionFormSection, QuestionForm } from './styled'

const tel = 'tel:+375296696969'

export default function () {

  const sendForm = value => {
    notification.success({
      message: `Уважаемый ${value.name}`,
      description: `В скором времени вам перезвонят на номер +375 ${value.phone}`
    })
  }
  return (
    <QuestionFormSection>
      <Container>
        <Heading
          level={2}
          brandText='Остались'
        >
          вопросы?
        </Heading>

        <Text gray>Звоните по номеру</Text>
        <QuestionForm.Link href={tel}>+375 29-669-69-69</QuestionForm.Link>
        <Text gray>или закажите звонок</Text>

        <Form
          onFinish={sendForm}
          layout='vertical'
          className='theme-form theme-form--home'
          hideRequiredMark
        >
          {formItems.map((item, idx) => {
            const { name, label, rules, type, placeholder, phoneRules: { mask, addonBefore } } = item
            return (
              <Form.Item name={name} label={label} rules={[rules]} key={idx}>
                {type === 'text'
                  ? <Input size='large' placeholder={placeholder} />
                  : <MaskedInput size='large' placeholder={placeholder} addonBefore={addonBefore} mask={mask} />}
              </Form.Item>
            )
          })}

          <Form.Item>
            <Button
              type='secondary'
              htmlType='submit'
              style={{ margin: '0 auto', display: 'block' }}
              ghost
            >
              Заказать звонок
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </QuestionFormSection>
  )
}
