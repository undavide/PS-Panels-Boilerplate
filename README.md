PS-Panels-Boilerplate
=====================

Boilerplate and Demo code for Adobe Photoshop CC (and following) HTML Panels.

## Overview
This repository is going to gather code related to the new breed of Adobe Creative Cloud **HTML Panels** (Flash panels' support has been dropped with Photoshop CC 2014, version 15.0). 

You'll find here:

- **Boilerplate code** that you can use as a starting point for your own panels.

- **Demo Panels** showing how to implement a particular feature.

I use to [blog](http://davidebarranca.com/category/code/html-panels/) about Photoshop extensions, so chances are you'll find in this repository some code I've written about on my website.

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

## Content
Please see this [index](src/INDEX.md) for a list of all the content. Refer to each folder's readme for extra info.

## Links
If you dig HTML Panels you might be interested in

- The [Adobe CEP](https://github.com/Adobe-CEP/CEP-Resources) page on GitHub, listing lot of resources.

- My **HTML Panels Tip** series:
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