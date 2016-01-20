import Ember from 'ember';
import markdownFiles from 'ember-fr-markdown-file/markdownFiles';

export function frMarkdownFile([path]) {
  let markdown = Ember.get(markdownFiles, path.replace(/\//g, '.'));
  return markdown;
}

export default Ember.Helper.helper(frMarkdownFile);
