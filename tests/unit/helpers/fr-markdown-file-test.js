/* jshint expr:true */
import { expect } from 'chai';
import {
  describe,
  it
} from 'mocha';
import {
  frMarkdownFile
} from 'ember-fr-markdown-file/helpers/fr-markdown-file';

describe('FrMarkdownFileHelper', function() {
  // Replace this with your real tests.
  it('works', function() {
    var result = frMarkdownFile(['test']);
    expect(result).to.be.ok;
  });
});
