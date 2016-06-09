# grunt-slm
[![Travis](https://img.shields.io/travis/MichaelDanilov/grunt-slm.svg?maxAge=2592000)](https://travis-ci.org/MichaelDanilov/grunt-slm) [![GitHub issues](https://img.shields.io/github/issues/MichaelDanilov/grunt-slm.svg)](https://github.com/MichaelDanilov/grunt-slm/issues) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/MichaelDanilov/grunt-slm/master/LICENSE)
[![David](https://img.shields.io/david/MichaelDanilov/grunt-slm.svg?maxAge=2592000)]() [![David](https://img.shields.io/david/MichaelDanilov/grunt-slm.svg?maxAge=2592000)]()
[![npm](https://img.shields.io/npm/dm/grunt-slm.svg?maxAge=2592000)](https://www.npmjs.com/package/grunt-slm) [![npm](https://img.shields.io/npm/dt/grunt-slm.svg?maxAge=2592000)](https://www.npmjs.com/package/grunt-slm)

> [slm](https://github.com/slm-lang/slm) Slm is a template language for js. Port of [Slim](http://slim-lang.com/) but slimmer :)

## For potential contributors or maintainers
I don't use it every day, so if you are well versed in Slm and Grunt, I can give you maintainer status.

## Getting Started

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-slm --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-slm');
```

## The "slm" task

### Overview
In your project's Gruntfile, add a section named `slm` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  slm: {
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options
You can pass data to template which can be accessed through `this`.

### Usage Examples

```js
grunt.initConfig({

  slm: {
    options: {
      data: {
        author: 'Jane Doe',
				year: 2016,
				items: [
					{
						name: 'milk',
						price: '$1',
					},
					{
						name: 'bread',
						price: '$3',
					}
				]
      }
    },

    // prefix the specified file
    single_file: {
      src: 'src/file.slm',
      dest: 'dest/index.html'
    },

    // prefix all files
    multiple_files: {
      src: 'src/*.slm', // -> src/file1.slm, src/file2.slm
      dest: 'dest/' // -> dest/file1.html, dest/file2.html
    },

  }

});
```

```slim
doctype html
html
  head
    title My store
    meta name="keywords" content="template language"
    meta name="author" content=this.author
    javascript:
      alert('Welcome to my store!')

  body
    h1 I'm selling some food

    #content
      p All or this food are organic and healthy ;).

    - if this.items.length
      table#items
        - this.items.forEach(function(item))
          tr
            td.name = item.name
            td.price = item.price
    - else
      p All food are as gone. Sorry!

    div id="footer"
      | Copyright &copy; ${this.year} ${this.author}

```

## Thanks
 - [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) for base for this readme :)
