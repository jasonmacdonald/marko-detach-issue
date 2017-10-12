/**
 * @author  jason.macdonald
 * @created 2017-10-10
 */
'use strict';

let tpl = require('./src/index.marko');
tpl.renderSync({ name:'Marko' }).appendTo(document.body);