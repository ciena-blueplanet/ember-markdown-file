/* globals module */
/* jshint node: true */

'use strict';

var flatiron = require('broccoli-flatiron');
var fs = require('fs');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var path = require('path');

module.exports = {
  name: 'ember-fr-markdown-file',

  included: function (app) {
    this._super.included(app);
    let addonOptions = (this.parent && this.parent.options) ||
                       (this.app && this.app.options);
    let config = addonOptions[this.name] || {};
    this.markdownRoot = path.resolve(this.project.root, config.markdownRoot) ||
                        path.join(this.project.root, 'markdown'); // original default
  },

  treeForAddon: function (tree) {
    var mdPaths = [];

    if (this.project.name() !== 'ember-fr-markdown-file') {
      var appMdRoot = this.markdownRoot;
      if (fs.existsSync(appMdRoot)) {
        mdPaths.push(appMdRoot);
      }
    }

    var dummyMdRoot = path.join(this.project.root, 'tests', 'dummy', 'markdown');
    if (fs.existsSync(dummyMdRoot)) {
      mdPaths.push(dummyMdRoot);
    }

    if (mdPaths.length > 0) {
      var mdFunnel = new Funnel(mergeTrees(mdPaths), {
        include: [new RegExp(/\.md/)]
      });

      var mdFlattened = flatiron(mdFunnel, {
        outputFile: 'markdownFiles.js',
        trimExtensions: true
      });

      tree = mergeTrees([tree, mdFlattened]);
    }

    return this._super.treeForAddon.call(this, tree);
  }
};
