'use client';

import { Form, Input, Button, Select } from 'antd';
import Link from 'next/link';
import usePostRegister from '../../../api/usePostRegister';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';

export default function RegisterForm() {
  const { post: postRegister, isSubmitting } = usePostRegister();
  const router = useRouter()

  const onFinish = (values: any) => {
    console.log('done', values);
    postRegister({ payload: values })
      .then(() => {
        router.push('/dashboard')
      })
  };
  const onFinishFailed = (values: any) => {
    console.log('done', values);
  };

  return (
    <Form
      name='Basic'
      layout='vertical'
      labelCol={{ span: 32 }}
      wrapperCol={{ span: 32 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label='Country'
        name='country'
        rules={[{ required: true, message: 'Please select a country' }]}
      >
        <Select>
          <Select.Option value="us">United States</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label='First Name'
        name='firstName'
        rules={[{ required: true, message: 'Please input your first name' }]}
      >
        <Input placeholder='First Name' />
      </Form.Item>
      <Form.Item
        label='Last Name'
        name='lastName'
        rules={[{ required: true, message: 'Please input your last name' }]}
      >
        <Input placeholder='Last Name' />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={(
          <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }} defaultValue="1">
              <Select.Option value="1">+1</Select.Option>
              {/* <Option value="87">+87</Option> */}
            </Select>
          </Form.Item>
        )} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        label='Email'
        name='email'
        rules={[
          { required: true, message: 'Please input your email' },
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className='site-form-item-icon' />} placeholder='Email' />
      </Form.Item>
      <Form.Item
        label='Password'
        name='password'
        rules={[{ required: true, message: 'Please input your password' }]}
      >
        <Input.Password
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item
        label='Confirm Password'
        name='passwordConfirm'
        rules={[{ required: true, message: 'Please confirm your password' }]}
      >
        <Input.Password
          prefix={<LockOutlined className='site-form-item-icon' />}
          type='password'
          placeholder='Password'
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button loading={isSubmitting} type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
      <p>
        Already have an account? Click <Link href='/login'>here</Link> to sign in.
      </p>
    </Form>
  );
}
