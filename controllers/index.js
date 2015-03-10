/**
 * do something with the user model
 * var User = require('../models/user');
 */

var Repo              = require('../node_modules/git/lib/git').Repo,
    Ref               = require('../node_modules/git/lib/git').Ref,
    Head              = require('../node_modules/git/lib/git').Head,
    Tag               = require('../node_modules/git/lib/git').Tag,
    Remote            = require('../node_modules/git/lib/git').Remote,
    Blob              = require('../node_modules/git/lib/git').Blob,
    Submodule         = require('../node_modules/git/lib/git').Submodule,
    Tree              = require('../node_modules/git/lib/git').Tree,
    Git               = require('../node_modules/git/lib/git').Git,
    Commit            = require('../node_modules/git/lib/git').Commit,
    GitFileOperations = require('../node_modules/git/lib/git').GitFileOperations,
    fs                = require('fs'),
    exec              = require('child_process').exec;

exports.index = function (req, res) {
  var git = new Git('./controllers/repository');
  console.log(git);
  git.init({}, function(err, git) {
    console.log(git);
    if(err) { throw err; }
  });
  // new Repo('./controllers/repository', function(err, repo) {
  //   if(err) { throw err; }
  // });
  res.render('index', {
    title: 'leaven-up'
  });
};
