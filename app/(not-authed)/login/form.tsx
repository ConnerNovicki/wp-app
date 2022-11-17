'use client';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import usePostLogin from '../../../api/usePostLogin';
import { useRouter } from 'next/navigation'

interface LoginFormFields {
  email: string;
  password: string;
}

export default function LoginForm() {
  const { post: postLogin, isSubmitting } = usePostLogin();
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log('done', values);
    postLogin({ payload: values })
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
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button loading={isSubmitting} type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
      <p>Don&lsquo;t have a login? Click <Link href="/register">here</Link> to make an account</p>
    </Form>
  );
}
