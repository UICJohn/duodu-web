import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva';
import {
  Form, Input, Row, Col, Checkbox, message, Button
} from 'antd'
import request from '../../../utils/request'
import router from 'umi/router';

@connect(({user, loading }) => ({user, loading }))
@Form.create()
class RegForm extends PureComponent {

  render() {

    const {dispatch, user, form} = this.props
    const { getFieldDecorator } = form

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


    const handleSubmit = (e) => {
      const {dispatch, form} = this.props
      e.preventDefault();
      form.validateFieldsAndScroll((err, values) => {
        if (!err){
          dispatch({ type: 'user/create', payload: {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({user: values})
          }}).then(() => {
            handleServerError(values);
          });;       
        }
      })
    }

    const handleServerError = (values) => {
      const {user, form} = this.props
      if(user.error){
        let errors = {}
        Object.entries(user.error).forEach(function(error){
          errors[`${error[0]}`] = {
            value: values[`${error[0]}`],
            errors: [new Error(`${error[0]} ${error[1]}`)]
          }
        });
        form.setFields(errors);
      } else {
        router.push( '/', user.payload)
      }
    }

    const sendVerficationCode = (e) => {
      e.preventDefault();
      const {dispatch, form} = this.props
      form.validateFieldsAndScroll(['phone'], (err, values) => {
        if (!err) {
          dispatch({ type: 'user/fetchVerifyCode', payload: { 
            method: 'POST', 
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(values)} 
          })
        }
      })
    }

    return (
      <Form {...formItemLayout} onSubmit={handleSubmit} className="reg-form">
        <Form.Item label="手机号码">
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
        <Form.Item label="验证码">
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
              <Button onClick={sendVerficationCode}>获取验证码</Button>
            </Col>
          </Row>
        </Form.Item>

         <Form.Item label="密码">
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
          <Button type="primary" htmlType="submit">注册</Button>
        </Form.Item>

      </Form>
    )
  }
}

RegForm.propTypes = {
  form: PropTypes.object,
  dispatch: PropTypes.func,
  user: PropTypes.object,
  loading: PropTypes.object,
}

export default RegForm