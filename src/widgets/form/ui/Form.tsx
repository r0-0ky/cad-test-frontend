'use client'

import * as stylex from '@stylexjs/stylex';
import { styles } from './stylex.module';
import { Button, Form, Input, message } from 'antd';

export const CustomForm: React.FC = () => {
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success('Submit success!');
  };

  return (
    <Form
      {...stylex.props(styles.form)}
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      style={{padding: 20, margin: '0px auto'}}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true }, { type: 'string', warningOnly: true }]}
      >
        <Input placeholder="Value" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true }, { type: 'email', warningOnly: true }]}
      >
        <Input placeholder="Value" />
      </Form.Item>
      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true }, { type: 'string', warningOnly: true }]}
      >
        <Input.TextArea autoSize={false} placeholder="Value" />
      </Form.Item>
      <Form.Item style={{ margin: 0}}>
        <Button {...stylex.props(styles.formButton)} type="primary" block htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}