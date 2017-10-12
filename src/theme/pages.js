/**
 * TODO: Add a @desc for pages.js
 *
 * @author  jason.macdonald
 * @created 2017-10-12
 */
'use strict';
let home = require('./home/index.marko');

module.exports = {

  'initialPage': home,

  // please ignore the fact that home is not async, this is just to get past the initial render which can't be async
  'home': () => {
    return Promise.resolve(home);
  },
  'article': () => import(/* webpackChunkName: "home" */ './article/index.marko'),
  'faq': () => import(/* webpackChunkName: "faq" */ './faq/index.marko')
};