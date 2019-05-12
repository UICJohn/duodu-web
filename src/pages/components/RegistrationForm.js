import { connect } from 'dva';
import {
  Form, Input, Row, Col, Checkbox, message, Button
} from 'antd';

function RegistrationForm({dispatch, values}) {

  const { getFieldDecorator } = this.props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  // sendVerficationCode = (e) => {

  // }

  // handleSubmit = (e) => {
  //   props.dispatch({ type: 'user/create' });
  // }


  return(
    <Form {...formItemLayout} className="form">
      <Form.Item
        label="手机号码"
      >
        <Row gutter={8}>
          <Col span={12}>
            {getFieldDecorator('phone', {
              rules: [{
                required: true,
                pattern: new RegExp(/^[1-9]\d*$/, "g"),
                message: '请输入正确的手机号码!'
              }],
            })(
              <Input style={{ width: '100%' }} />
            )}
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        label="验证码"
      >
        <Row gutter={8}>
          <Col span={8}>
            {getFieldDecorator('verification_code', {
              rules: [{
                required: true,
                pattern: new RegExp(/^[1-9]\d*$/, "g"),
                message: '请输入正确验证码!'
              }],
            })(
              <Input style={{ width: '100%' }} />
            )}
          </Col>
          <Col span={3}>
            <Button>获取验证码</Button>
          </Col>
        </Row>
      </Form.Item>

      <Form.Item
        label="密码"
      >
        <Row gutter = {8}>
          <Col span = {12}>
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: 'Please input your password!',
              }],
            })(
              <Input type="password" />
            )}
          </Col>
        </Row>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        {getFieldDecorator('agreement', {
          valuePropName: 'checked',
        })(
          <Checkbox>I have read the <a href="">agreement</a></Checkbox>
        )}
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">Register</Button>
      </Form.Item>
    </Form>
  );
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(RegistrationForm);