# grunt-slm

> [slm](https://github.com/slm-lang/slm) Slm is a template language for js. Port of [Slim](http://slim-lang.com/) but slimmer :)

## For potential contributors or maintainers
I don't use it every day, so if you are well versed in Slm and Grunt, I can give you maintainer status.

## Getting Started
This plugin requires Grunt `~0.4.0`

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
Now I need only to compile, without some options and data.


### Usage Examples

```js
grunt.initConfig({

  slm: {

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

## Thanks
 - [grunt-autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) for base for this readme :)
