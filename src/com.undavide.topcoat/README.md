Topcoat Panel Boilerplate
=========================

Implements [Topcoat CSS](http://www.topcoat.io) in HTML Panels.

## Topcoat CSS
A project originally sponsored by Adobe: *"CSS for clean and fast web apps"*.
Topcoat is a CSS framework that fits incredibly well in Photoshop Panels.

## Features
Topcoat originally comes in four flavors: 

- desktop-light.css
- desktop-dark.css
- ~~mobile-light.css~~
- ~~mobile-dark.css~~

I've stripped the two mobile versions since they feature too big GUI elements for Panels (imho).

Following Garth Braithwaite's [tutorial](http://topcoat.io/posts/color-me-topcoat/)  I've been able to build a different set of versions with modified colors, to better match Photoshop original GUI. Then, I've mildly hacked the `Grunt.js` and added two more `.styl` files, so that eventually the compilation led to:

- desktop-lightlight.css
- desktop-light.css
- desktop-dark.css
- desktop-darkdark.css

Using my own [topcoat blogpost](http://www.davidebarranca.com/2014/02/html-panels-tips-6-integrating-topcoat-css/) as a starting point, I've then refactored `themeManager.js` to load the right CSS among the four available. I've then used David Deraedt's idea to inject into the CSS both the Font Family and Font Size (but I do so in a blank CSS).

No need to change anything else since either Panel's and elements' background colors are handled in the four CSS.

## Installation
Please see the shared [installation instruction](../../README.md#installation).

## Changelog
**V1.0** June 2014.