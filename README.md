# uigradients

A package of community contributed gradients.

This is taken directly from [Ghosh/uiGradients](https://github.com/Ghosh/uiGradients);
the intent of this package is to separate the gradients themselves from the
[uigradients.com](http://uigradients.com/) website, which is currently hosted in
the same repo. For now, please continue to make contributions to the original project,
at <https://github.com/Ghosh/uiGradients>. I hope to get a pull-request in to that
project soon to deprecate the gradients from there, in which case contributions
will be migrated to this repo.

## Install

```console
> npm install --save uigradients.gradients
```

## Usage

```javascript
const gradients = require('uigradients.gradients').gradients;

const colors = g.gradients['Sulphur'];  // colors = ['#CAC531', '#F3F9A7']
```


