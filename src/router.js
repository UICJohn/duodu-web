exports.routes = {
  path: '/', exact: true, component: '../layouts/index',
  routes: [
    { path: '/', component: './dashboard/index.js'}
  ]
}