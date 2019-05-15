PS-Panels-Boilerplate
=====================

Boilerplate and Demo code for Adobe Photoshop CC (and following) HTML Panels.

## Overview
This repository is going to gather code related to the new breed of Adobe Creative Cloud **HTML Panels** (Flash panels' support has been dropped with Photoshop CC 2014, version 15.0). 

You'll find here:

- **Boilerplate code** that you can use as a starting point for your own panels.

- **Demo Panels** showing how to implement a particular feature.

I use to [blog](http://davidebarranca.com/category/code/html-panels/) about Photoshop extensions, so chances are you'll find in this repository some code I've written about on my website.

## INDEX - Repository Content
Please see this [INDEX.md](src/INDEX.md) for a list of all the content. Refer to each folder's readme for extra info.

## Installation
There's nothing to actually *install*; in the `/src` you'll mostly find panels (i.e. folders that uses the following naming convention: `com.undavide.panelName`).

Just grab the one you're interested into and copy to the following folder:

**\[WIN - user\]**: `C:\<username>\AppData\Roaming\Adobe\CEP\extensions`

**\[MAC - user\]**: `~/Library/Application Support/Adobe/CEP/extensions` 

In case you want the panel to be available to all the users, these are the System paths:

**\[WIN\]**: `C:/Program Files (x86)/Common Files/Adobe/CEP/extensions/`

**\[MAC\]**: `/Library/Application Support/Adobe/CEP/extensions` 

### Debug flag
For an unsigned panel to work on your system, you have to set a debug flag (do it once and will be ok)

**\[WIN\]**: `regedit > HKEY_CURRENT_USER/Software/Adobe/CSXS.5`

**\[MAC\]**: `/Users/<username>/Library/Preferences/com.adobe.CSXS.5.plist` 

Add a new entry **PlayerDebugMode** of type **"string"** with the value of **"1"**. This enables debug extensions to be displayed in the host applications.

**Special notes for Mac 10.9** - Starting with Mac 10.9, Apple introduced a caching mechanism for plist files. Your modifications to plist files does not take effect until the cache gets updated (on a periodic basis, you cannot know exactly when the
update will happen). To make sure your modifications take effect, there
are two methods.

- Kill `cfprefsd` process. It will restart automatically. Then the update
takes effect.

- Restart your Mac, or log out the current user and re-log in.
For more information, [see here](http://hints.macworld.com/article.php?story=20130908042828630).

---

## External Links
If you dig HTML Panels you might be interested in

- The [Adobe CEP](https://github.com/Adobe-CEP/CEP-Resources) page on GitHub, listing lot of resources.

- My **HTML Panels Tip** series:

  - \#25 [CC 2018 Survival Guide](https://www.davidebarranca.com/2017/10/html-panel-tips-25-cc-2018-survival-guide/)
  - \#24 [Fixing ZXP Timestamping errors](https://www.davidebarranca.com/2017/04/html-panel-tips-24-fixing-zxp-timestamping-errors/)
  - \#23 [JavascriptObfuscator API Gulp.js Plugin](https://www.davidebarranca.com/2017/02/html-panel-tips-23-javascriptobfuscator-api-gulp-js-plugin/)
  - \#22 [Protecting your Code](https://www.davidebarranca.com/2016/07/html-panel-tips-22-protecting-your-code/)
  - \#21 [Photoshop CC 2015.5 survival guide](https://www.davidebarranca.com/2016/06/html-panel-tips-21-photoshop-cc2015-5-2016-survival-guide/)
  - \#20 [Javascript Frameworks](https://www.davidebarranca.com/2016/06/html-panel-tips-20-javascript-frameworks-angularjs-vuejs/)
  - \#19 [CC2015.1 (CEP6.1) Node.js Fixes](https://www.davidebarranca.com/2015/12/html-panel-tips-19-cc2015-1-cep6-1-node-js-fixes/)
  - \#18 [Photoshop JSON Callback](https://www.davidebarranca.com/2015/09/html-panel-tips-18-photoshop-json-callback/)
  - \#17 [CC2015 Survival Guide](https://www.davidebarranca.com/2015/06/html-panel-tips-17-cc2015-survival-guide/)
  - \#16 [AngularJS Binding bug patch](https://www.davidebarranca.com/2014/12/html-panels-tips-16-angularjs-input-binding-bug-patch/)
  - \#15 [Asynchronous vs. Synchronous](https://www.davidebarranca.com/2014/12/html-panels-tips-15-asynchronous-vs-synchronous-evalscript/)
  - \#14 [Flyout Menu](http://www.davidebarranca.com/2014/10/html-panels-tips-14-flyout-menu/)
  - \#13 [Automate ZXP Packaging with Gulp.js](http://www.davidebarranca.com/2014/08/html-panels-tips-13-automate-zxp-packaging-with-gulp-js/)
  - \#12 [CEP Application Events](http://www.davidebarranca.com/2014/07/html-panels-tips-12-cep-application-events/)
  - \#11 [CEP Events (ExternalObject)](http://www.davidebarranca.com/2014/07/html-panels-tips-11-externalobject-cep-events/)
  - \#10 [Packaging and ZXP installers](http://www.davidebarranca.com/2014/05/html-panels-tips-10-packaging-zxp-installers/)
  - \#09 [Persistence](http://www.davidebarranca.com/2014/02/html-panels-tips-9-persistence/)
  - \#08 [Photoshop Events, take 2](http://www.davidebarranca.com/2014/02/html-panels-tips-8-photoshop-events-pshostadapter-libraries/)
  - \#07 [Photoshop Events, take 1](http://www.davidebarranca.com/2014/02/html-panels-tips-7-events-photoshopregisterevent-photoshopcallback/)
  - \#06 [Integrating Topcoat CSS](http://www.davidebarranca.com/2014/02/html-panels-tips-6-integrating-topcoat-css/)
  - \#05 [Passing Objects from JSX to the Panel](http://www.davidebarranca.com/2014/02/html-panels-tips-5-passing-objects-from-jsx-to-html-json/)
  - \#04 [Passing Objects from the Panel to JSX](http://www.davidebarranca.com/2014/01/html-panels-tips-4-passing-objects-from-html-to-jsx/)
  - \#03 [Passing simple data from JSX to the Panel](http://www.davidebarranca.com/2014/01/html-panels-tips-3-get-data-from-jsx-send-it-to-html/)
  - \#02 [Including multiple JSX](http://www.davidebarranca.com/2014/01/html-panels-tips-2-including-multiple-jsx/)
  - \#01 [Debugging](http://www.davidebarranca.com/2014/01/html-panels-tips-1-debugging/)
  
- David Deraedt [GitHub page](https://github.com/davidderaedt?tab=repositories) - he's doing a great work with a Sublime Text package and a Brackets extensions, that help in the creation of new projects based on his own templates. Recommended!

## License
Copyright (c) 2014 Davide Barranca, [MIT license](license.md).
