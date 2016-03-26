# Ember-fr-markdown-file

Imports md files located in <project>/markdown.  File contents can be accessed using the helper `{{fr-markdown-file 'path/in/markdown/dir'}}`.  This is primarily useful as a way to keep markdown in separate files when using markdown components such as [ ember-cli-showdown](https://github.com/gcollazo/ember-cli-showdown)

## Example usage

{{markdown-to-html markdown=(fr-markdown-file 'test')}}

## Installation

* `ember install ember-fr-markdown-file`
