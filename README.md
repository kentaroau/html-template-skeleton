# ✨ HTML template skeleton
[![npm version](https://img.shields.io/npm/v/html-template-skeleton?style=plastic)](https://www.npmjs.com/package/html-template-skeleton)

A modern skeleton for starting HTML template designs.

* [Features](#features)
* [Installation](#installation)
* [Quick start](#quick-start)
* [Making changes](#making-changes)

## Features

* `SASS` to compile CSS. Usage of 7-1 architecture. Autoprefix to add vendor prefixes.
* Minify `HTML`, `CSS` and `JavaScript`
* Use `NPM` as the build tool

## Installation

There are 3 options to install and build on top of this package. First, ensure that **node.js** & **npm** are both installed. If not, choose your OS and installation method from [this page](https://nodejs.org/en/download/package-manager/) and follow the instructions.

### Option 1 - use npx (prefered)

This is my prefered option when starting new HTML projects:

```
mkdir new-site
cd new-site
npx html-template-skeleton .
npm install
npm run serve
```

### Option 2 - use npm

```
npm install html-template-skeleton
```
Go to the html-template-skeleton folder and take out which files you need.

### Option 3 - use git clone

Clone the git repo with the following command:

```
git clone https://github.com/kentaroau/html-template-skeleton
```
Similar to option 2, just take out the files you need.

## Quick start

To build the project, first make sure you are in the directory with `package.json`. Run the following commands:

1. Install npm packages

```
npm install
```

2. Build the project

```
npm run build
```

3. Preview the page by opening up the index.html in `/public` folder

## Making changes

This project uses npm as the build tool. To make changes:

* Make code changes in the `/src` folder and 
* deploy code generated in `/public` folder

For development purposes, run the following command:

```
npm run serve
```
