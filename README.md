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
console.log(gradients['Purple Love']); // => ["#cc2b5e", "#753a88"]
```

## Contributing

**For now, please continue to make contributions to the original [Ghosh/uiGradients](https://github.com/Ghosh/uiGradients) project.**

### Adding Gradients

If you want to add a new gradient, please add it to `gradients.json`, following the existing format.
Each gradient should have exactly two properties: a `name` and a `colors` array. The name is the
name of the gradient and must be unique in the file. The elements of `colors` should be specified
in any format that can be parsed by the [color](https://www.npmjs.com/package/color) package.

The `.editorconfig` file describes what formatting you should use. If your editor supports
[EditorConfig](http://editorconfig.org/), you should be all set. Otherwise, just make sure:
*   Spaces, not tabs
*   Two spaces per level of indent

To make sure your submission can be accepted, run `npm run test` and address any errors
reported.

To submit your gradient:
1.   Fork this repo (e.g., [on github](https://github.com/mearns/uigradients.gradients))
2.   Create a new branch in the form "gradients/$GRADIENT_NAME"
    * Please don't modify existing gradients, even if you're the one who created it. People may be depending on these gradients.
3.   Submit a pull-request to the [mearns/uigradients.gradients](https://github.com/mearns/uigradients.gradients) repo on github.

### Other Changes

All bugs should have issues created for them on [on github](https://github.com/mearns/uigradients.gradients/issues), and
the issue id should be included in the branch name. Please feel free to create issues for feature requests/improvements
as well.

If you have other changes you'd like to submit to this repo, follow the same guidelines as above,
but name your branch as either "feature/${ISSUE_ID}-$BRIEF_DESCRIPTION" or "bug/${ISSUE_ID}-${BRIEF_DESCRIPTION}"
as appropriate. If there is no issue for a feature, simply omit that issue id portion of the branch name (or
consider creating an issue for it).

Please limit branches and merge requests to **single bugs/features**. Submit as many merge requests as you like.
