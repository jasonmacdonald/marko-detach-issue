/**
 * @author  jason.macdonald
 * @created 2017-10-12
 */
'use strict';

let comp,
    pages = require('./theme/pages');


class Router {

  registerController(ctrl) {
    comp = ctrl;

    comp.subscribeTo(window).on('click', e => this.onClickHandler(e));
    comp.subscribeTo(window).on('popstate', e => this.onPopstate(e));
  }

  getHomepage() {
    return pages.initialPage;
  }

  goTo(url) {
    let exp = /[^\/]([a-z]*)[^\d\.html]/g;

    // quick hack to get pageType from url;
    let pageType = String(url.href).match(exp)[0];

    pages[pageType]().then((tpl) => {
      comp.doRoute(tpl, url.href);
    });
  }

  onClickHandler(event) {
    // ensure target is a link
    let el = event.target;
    while (el && el.nodeName !== 'A') {
      el = el.parentNode;
    }

    if (!el || el.nodeName !== 'A') {return;}

    // rebuild path
    let path = el.pathname + el.search + ( el.hash || '' );

    // stop link from loading
    event.preventDefault();

    this.currentID++;
    history.pushState({location: path, count: this.currentID}, null, path);

    this.goTo({href: path});
  }

  onPopstate(event) {
    if (!event.state) {
      return;
    } // hashchange, or otherwise outside control

    let target = {
      href: location.pathname + location.search + ( location.hash || '' ),
      popstate: true // so we know not to manipulate the history
    };

    this.goTo(target);

  }
}

module.exports = new Router();