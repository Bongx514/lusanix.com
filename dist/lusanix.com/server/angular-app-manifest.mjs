
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/home"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/"
  },
  {
    "renderMode": 2,
    "redirectTo": "/home",
    "route": "/**"
  }
],
  assets: new Map([
['index.csr.html', {size: 2194, hash: 'fab1c89fada9b0dc284edba276c303da26bb3536d0ea6fd37a1d64755d49db68', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1007, hash: 'aa305af9f66570f6ed4379746186b0c89652c9fd2b8d0e836a28a17e67f04f08', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['home/index.html', {size: 28201, hash: 'a4fd02d3d3591b387f8916fd418efb0d4d0ba4d7b8f789644101552c7eb24d0a', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)}], 
['styles-IAQG6KDA.css', {size: 17851, hash: 'OiUNNj1rPug', text: () => import('./assets-chunks/styles-IAQG6KDA_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
