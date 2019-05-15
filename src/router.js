exports.routes = [
  { path: '/', component: '../layouts/index',
    routes: [
      { path: '/', component: './dashboard/index.js' },
      { path: '/users/sign_up', component: './registration/index.js' },
    ]
  }
]