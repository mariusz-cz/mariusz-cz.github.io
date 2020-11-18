var ghpages = require('gh-pages');

ghpages.publish('dist', {
    message: "new version"
}, function(err) {
    console.log(err);
});