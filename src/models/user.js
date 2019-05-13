export default {

  namespace: 'user',

  state: {},

  // subscriptions: {
  //   setup({ dispatch, history }) {  // eslint-disable-line
  //   },
  // },
  reducers: {
    
  },

  effects: {
    *create({ payload }, { call, put }) {  // eslint-disable-line
      
      yield put({ type: 'save' });
    },
  },


};
