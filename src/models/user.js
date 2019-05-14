import request from '../utils/request'
import { message } from 'antd'
import api from '../service/api'

const {signIn, signUp, fetchVerifyCode } = api

export default {

  namespace: 'user',

  state: {
    authencated: false,
    token: null,
    username: null,
    email: null,
    phone: null,
    error: null
  },

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },

  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },

  effects: {
    *create({ payload }, { call, put }) {
      const data = yield call(request, signUp, payload);
      if(data.error){
        yield put({type: 'updateState', payload: {
          authencated: false,
          error: data.error
        }})
      }else{
        yield put({type: 'updateState', payload: {
          authencated: true,
          username: data.username,
          email: data.email,
          phone: data.phone
        }})
      }
    },

    *fetchVerifyCode({ payload }, {call, put}){
      const data = yield call(request, fetchVerifyCode, payload);
      if(data.error){
        message.error(data.error)
      } else {
        message.success(data.message)
      }
    }
  },
};
