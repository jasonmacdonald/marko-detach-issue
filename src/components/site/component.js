/**
 * TODO: Add a @desc for component.js
 *
 * @author  jason.macdonald
 * @created 2017-10-12
 */
'use strict';

let router = require('../../router');

module.exports = class {

  onCreate() {
    router.registerController(this);

    this.state = {
      tpl: router.getHomepage(),
      text: 'initial render'
    }
  }

  onInput(input) {

  }

  doRoute(tpl, url){
    let textForPage = {'/home.html': 'HomePage', '/article1.html': 'Article 1', '/article2.html': 'Article 2', '/faq.html': 'FAQ'};
    this.state.tpl = tpl;
    this.state.text = textForPage[url]; // just trying to create some random input

    this.forceUpdate();
    this.update();
  }
};