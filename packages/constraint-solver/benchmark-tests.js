// "Benchmarks" here are just slow tests of the constraint solver.
// You can see roughly how long they take by looking at how long the
// test takes to run.  Because they are slow, they don't run when you
// run tests unless you turn them on with an environment variable.

var runBenchmarks = !!process.env.CONSTRAINT_SOLVER_BENCHMARK;


runBenchmarks && Tinytest.add("constraint solver - benchmark on gems - sinatra", function (test) {
  var r = new ConstraintSolver.PackagesResolver(getCatalogStub(sinatraGems));

  var args = splitArgs({
    'capistrano': '2.14.2',
    'data-mapper': '1.2.0',
    'dm-core': '1.2.0',
    'dm-sqlite-adapter': '1.2.0',
    'dm-timestamps': '1.2.0',
    'haml': '3.1.7',
    'sass': '3.2.1',
    'shotgun': '0.9.0',
    'sinatra': '1.3.5',
    'sqlite3': '1.3.7'
  });

  r.resolve(args.dependencies, args.constraints);
});

// Add a few versions that are referenced by other versions but don't exist. We
// now require referenced versions to exist.
railsGems.push({name: "bcrypt", number: "3.0.0", dependencies: []});
railsGems.push({name: "mime-types", number: "1.16.0", dependencies: []});
railsGems.push({"name":"pyu-ruby-sasl","number":"0.3.1","platform":"ruby","dependencies":[]});
railsGems.push({"name":"backports","number":"3.0.0","platform":"ruby","dependencies":[]});
railsGems.push({"name":"diff-lcs","number":"1.1.0","platform":"ruby","dependencies":[]});
var railsCatalog = getCatalogStub(railsGems);
runBenchmarks && Tinytest.add("constraint solver - benchmark on gems - rails", function (test) {
  var r = new ConstraintSolver.PackagesResolver(railsCatalog);

  var args = splitArgs({
    'rails': '4.0.4'
  });

  r.resolve(args.dependencies, args.constraints);
});

runBenchmarks && Tinytest.add("constraint solver - benchmark on gems - rails, gitlabhq", function (test) {
  var r = new ConstraintSolver.PackagesResolver(railsCatalog);

  var args = splitArgs({
    'rails': '4.0.0',
    'protected-attributes': null,
    'rails-observers': null,
    'actionpack-page-caching': null,
    'actionpack-action-caching': null,
    'default-value-for': '3.0.0',
    'mysql2': null,
    'devise': '3.0.4',
    'devise-async': '0.8.0',
    'omniauth': '1.1.3',
    'omniauth-google-oauth2': null,
    'omniauth-twitter': null,
    'omniauth-github': null,
    'gitlab-git': '5.7.1',
    'gitlab-grack': '2.0.0',
    'gitlab-omniauth-ldap': '1.0.4',
    'gitlab-gollum-lib': '1.1.0',
    'gitlab-linguist': '3.0.0',
    'grape': '0.6.1',
    'rack-cors': null,
    'email-validator': '1.4.0',
    'stamp': null,
    'enumerize': null,
    'kaminari': '0.15.1',
    'haml-rails': null,
    'carrierwave': null,
    'fog': '1.3.1',
    'six': null,
    'seed-fu': null,
    'redcarpet': '2.2.2',
    'github-markup': null,
    'asciidoctor': null,
    'unicorn': '4.6.3',
    'unicorn-worker-killer': null,
    'state-machine': null,
    'acts-as-taggable-on': null,
    'slim': null,
    'sinatra': null,
    'sidekiq': null,
    'httparty': null,
    'colored': null,
    'settingslogic': null,
    'foreman': null,
    'version-sorter': null,
    'redis-rails': null,
    'tinder': '1.9.2',
    'hipchat': '0.14.0',
    'gemnasium-gitlab-service': '0.2.1',
    'slack-notifier': '0.2.0',
    'd3-rails': '3.1.4',
    'underscore-rails': '1.4.4',
    'sanitize': null,
    'rack-attack': null,
    'ace-rails-ap': null,
    'sass-rails': null,
    'coffee-rails': null,
    'uglifier': null,
    'therubyracer': null,
    'turbolinks': null,
    'jquery-turbolinks': null,
    'select2-rails': null,
    'jquery-atwho-rails': '0.3.3',
    'jquery-rails': '2.1.3',
    'jquery-ui-rails': '2.0.2',
    'modernizr': '2.6.2',
    'raphael-rails': '2.1.2',
    'bootstrap-sass': '3.0.0',
    'font-awesome-rails': '3.2.0',
    'gitlab-emoji': '0.0.1',
    'gon': '5.0.0'
  });

  r.resolve(args.dependencies, args.constraints);
});

runBenchmarks && Tinytest.add("constraint solver - benchmark on gems - rails, gitlabhq, additions to the existing smaller solution", function (test) {
  var r = new ConstraintSolver.PackagesResolver(railsCatalog);

  var args = splitArgs({
    'rails': '4.0.0',
    'protected-attributes': null,
    'rails-observers': null,
    'actionpack-page-caching': null,
    'actionpack-action-caching': null,
    'default-value-for': '3.0.0',
    'mysql2': null,
    'devise': '3.0.4',
    'devise-async': '0.8.0',
    'omniauth': '1.1.3',
    'omniauth-google-oauth2': null,
    'omniauth-twitter': null,
    'omniauth-github': null,
    'gitlab-git': '5.7.1',
    'gitlab-grack': '2.0.0',
    'gitlab-omniauth-ldap': '1.0.4',
    'gitlab-gollum-lib': '1.1.0',
    'gitlab-linguist': '3.0.0',
    'grape': '0.6.1',
    'rack-cors': null,
    'email-validator': '1.4.0',
    'stamp': null,
    'enumerize': null,
    'kaminari': '0.15.1',
    'haml-rails': null,
    'carrierwave': null,
    'fog': '1.3.1',
    'six': null,
    'seed-fu': null,
    'redcarpet': '2.2.2',
    'github-markup': null,
    'asciidoctor': null,
    'unicorn': '4.6.3',
    'unicorn-worker-killer': null,
    'state-machine': null,
    'acts-as-taggable-on': null,
    'slim': null,
    'sinatra': null,
    'sidekiq': null,
    'httparty': null,
    'colored': null,
    'settingslogic': null,
    'foreman': null,
    'version-sorter': null,
    'redis-rails': null,
    'tinder': '1.9.2',
    'hipchat': '0.14.0',
    'gemnasium-gitlab-service': '0.2.1',
    'slack-notifier': '0.2.0',
    'd3-rails': '3.1.4',
    'underscore-rails': '1.4.4',
    'sanitize': null,
    'rack-attack': null,
    'ace-rails-ap': null,
    'sass-rails': null,
    'coffee-rails': null,
    'uglifier': null,
    'therubyracer': null,
    'turbolinks': null,
    'jquery-turbolinks': null,
    'select2-rails': null,
    'jquery-atwho-rails': '0.3.3',
    'jquery-rails': '2.1.3',
    'jquery-ui-rails': '2.0.2',
    'modernizr': '2.6.2',
    'raphael-rails': '2.1.2',
    'bootstrap-sass': '3.0.0',
    'font-awesome-rails': '3.2.0',
    'gitlab-emoji': '0.0.1',
    'gon': '5.0.0'
  });

  var previousSolution = {
    "actionmailer": "4.0.0",
    "actionpack": "4.0.0",
    "activemodel": "4.0.0",
    "activerecord": "4.0.0",
    "activerecord-deprecated-finders": "1.0.3",
    "activesupport": "4.0.0",
    "arel": "4.0.2",
    "asciidoctor": "0.1.4",
    "bcrypt": "3.1.7",
    "bcrypt-ruby": "3.1.5",
    "builder": "3.1.4",
    "carrierwave": "0.10.0",
    "coffee-rails": "4.0.1",
    "coffee-script": "2.2.0",
    "coffee-script-source": "1.7.0",
    "d3-rails": "3.1.4",
    "default-value-for": "3.0.0",
    "devise": "3.0.4",
    "devise-async": "0.8.0",
    "erubis": "2.7.0",
    "execjs": "2.0.2",
    "faraday": "0.9.0",
    "github-markup": "1.1.0",
    "haml": "4.0.5",
    "haml-rails": "0.5.1",
    "hashie": "2.0.3",
    "hike": "1.2.3",
    "httpauth": "0.2.1",
    "i18n": "0.6.9",
    "jquery-turbolinks": "2.0.2",
    "json": "1.8.1",
    "jwt": "0.1.10",
    "kaminari": "0.15.1",
    "mail": "2.5.4",
    "mime-types": "1.25.1",
    "minitest": "4.7.5",
    "multi-json": "1.9.0",
    "multipart-post": "2.0.0",
    "oauth": "0.4.7",
    "oauth2": "0.8.1",
    "omniauth": "1.1.4",
    "omniauth-github": "1.0.2",
    "omniauth-google-oauth2": "0.2.2",
    "omniauth-oauth": "1.0.1",
    "omniauth-oauth2": "1.1.1",
    "omniauth-twitter": "1.0.1",
    "orm-adapter": "0.5.0",
    "polyglot": "0.3.4",
    "posix-spawn": "0.3.8",
    "protected-attributes": "1.0.3",
    "rack": "1.5.2",
    "rack-test": "0.6.2",
    "rails": "4.0.0",
    "rails-observers": "0.1.2",
    "railties": "4.0.0",
    "rake": "10.1.1",
    "redcarpet": "2.2.2",
    "ref": "1.0.5",
    "sass": "3.2.17",
    "sass-rails": "4.0.2",
    "seed-fu": "2.3.0",
    "six": "0.2.0",
    "sprockets": "2.11.0",
    "sprockets-rails": "2.0.1",
    "therubyracer": "0.12.1",
    "thor": "0.19.1",
    "thread-safe": "0.3.1",
    "tilt": "1.4.1",
    "treetop": "1.4.15",
    "turbolinks": "2.2.0",
    "tzinfo": "0.3.39",
    "uglifier": "2.5.0",
    "warden": "1.2.3"
  };

  var solution = r.resolve(args.dependencies, args.constraints, { previousSolution: previousSolution }).answer;

  // check that root deps are the same
  _.each(args.dependencies, function (dep) {
    if (previousSolution[dep])
      test.equal(solution[dep], previousSolution[dep], dep);
  });
});


// Given a set of gems definitions returns a Catalog-like object
function getCatalogStub (gems) {
  return {
    getAllPackageNames: function () {
      return _.uniq(_.pluck(gems, 'name'));
    },
    getPackage: function (name) {
      return !!_.findWhere(gems, {name: name});
    },
    getSortedVersions: function (name) {
      return _.chain(gems)
        .filter(function (pv) { return pv.name === name; })
        .pluck('number')
        .map(function (version) {
          var nv = exactVersion(version);
          if (nv.length < version.length && version.split(".").length === 2)
            return version;
          return nv;
        })
        .filter(function (v) {
          return PackageVersion.getValidServerVersion(v);
        })
        .sort(PackageVersion.compare)
        .uniq(true)
        .value();
    },
    getVersion: function (name, version) {
      var gem = _.find(gems, function (pv) {
        return pv.name === name && exactVersion(pv.number) === version;
      });

      var packageVersion = {
        packageName: gem.name,
        version: gem.number,
        dependencies: {}
      };

      _.each(gem.dependencies, function (dep) {
        var name = dep[0];
        var constraints = dep[1];

        packageVersion.dependencies[name] = {
          constraint: convertConstraints(constraints)[0], // XXX pick first one only
          references: [{
            "arch": "web"
          }, {
            "arch": "os" }]
        };
      });

      return packageVersion;
    }
  };
}

// Naively converts ruby-gems style constraints string to either exact
// constraint or a regular constraint.
function convertConstraints (inp) {
  var out = inp.split(",").map(function (s) {
    return s.trim();
  })
  // remove the constraints we don't support
  .filter(function (s) {
    return !/</g.test(s) && !/!=/.test(s);
  })
  // convert 1.2.3.beta2 => 1.2.3
  // and 0.2 => 0.2.0
  .map(function (s) {
    var x = s.split(" ");
    return [x[0], exactVersion(x[1])].join(" ");
  })
  // convert '= 1.2.3' => '=1.2.3'
  // '~>1.2.3' => '1.2.3'
  // '>=1.2.3' => '1.2.3'
  .map(function (s) {
    if (s.indexOf(">= 0") === 0)
      return "";
    var x = s.split(' ');
    if (x[0] === '~>' || x[0] === '>' || x[0] === '>=')
      x[0] = '';
    else if (x[0] === '=')
      x[0] = '=';
    else
      throw new Error('unknown operator: ' + x[0]);
    return x.join("");
  });

  return out;
}

function exactVersion (s) {
  s = s.match(/\d+(\.\d+(\.\d+)?)?/)[0];
  if (s.split('.').length < 3)
    s += ".0";
  if (s.split('.').length < 3)
    s += ".0";
  return s;
}

// XXX This test is supposed to reproduce issue #2968 by taking
// "forever" but it doesn't.  Fix it (by remaking it).

/*runBenchmarks && Tinytest.add("issue 2968", function (test) {
var resolver = makeResolver([
["iron:router", '0.9.0', {'meteor': null, 'reactive-dict': '1.0.0', 'deps': '1.0.0', 'underscore': '1.0.0', 'ejson': '1.0.0', 'webapp': '1.0.0', 'iron:layout': '0.3.0', 'cmather:iron-router': '0.8.2', 'jquery': '1.0.0', 'ui': '1.0.0', }],
["meteor", '1.1.3+local', {'underscore': null, }],
["meteor", '1.0.0', {'underscore': null, }],
["meteor", '1.0.2', {'underscore': null, }],
["underscore", '1.0.1+local', {'meteor': null, }],
["underscore", '1.0.0', {'meteor': null, }],
["reactive-dict", '1.0.4+local', {'meteor': null, 'underscore': null, 'tracker': null, 'ejson': null, 'mongo': null, }],
["reactive-dict", '1.0.0', {'meteor': null, 'underscore': null, 'tracker': null, 'ejson': null, 'mongo': null, }],
["tracker", '1.0.3+local', {'meteor': null, }],
["tracker", '1.0.0', {'meteor': null, }],
["ejson", '1.0.4+local', {'meteor': null, 'json': null, 'underscore': null, 'base64': null, }],
["ejson", '1.0.0', {'meteor': null, 'json': null, 'underscore': null, 'base64': null, }],
["json", '1.0.1+local', {'meteor': null, }],
["base64", '1.0.1+local', {'meteor': null, }],
["mongo", '1.0.8+local', {'meteor': null, 'random': null, 'ejson': null, 'json': null, 'underscore': null, 'minimongo': null, 'logging': null, 'ddp': null, 'tracker': null, 'application-configuration': null, 'check': null, 'binary-heap': null, 'insecure': null, 'autopublish': null, 'disable-oplog': null, 'webapp': null, 'facts': null, 'callback-hook': null, }],
["random", '1.0.1+local', {'meteor': null, 'underscore': null, }],
["minimongo", '1.0.5+local', {'meteor': null, 'underscore': null, 'json': null, 'ejson': null, 'id-map': null, 'ordered-dict': null, 'tracker': null, 'random': null, 'geojson-utils': null, }],
["minimongo", '1.0.0', {'meteor': null, 'underscore': null, 'json': null, 'ejson': null, 'id-map': null, 'ordered-dict': null, 'tracker': null, 'random': null, 'geojson-utils': null, }],
["id-map", '1.0.1+local', {'meteor': null, 'underscore': null, 'json': null, 'ejson': null, }],
["ordered-dict", '1.0.1+local', {'meteor': null, 'underscore': null, }],
["geojson-utils", '1.0.1+local', {'meteor': null, }],
["id-map", '1.0.0', {'meteor': null, 'underscore': null, 'json': null, 'ejson': null, }],
["ordered-dict", '1.0.0', {'meteor': null, 'underscore': null, }],
["geojson-utils", '1.0.0', {'meteor': null, }],
["logging", '1.0.5+local', {'meteor': null, 'underscore': null, 'ejson': null, }],
["ddp", '1.0.11+local', {'meteor': null, 'check': null, 'random': null, 'ejson': null, 'json': null, 'underscore': null, 'tracker': null, 'logging': null, 'retry': null, 'webapp': null, 'routepolicy': null, 'audit-argument-checks': null, 'autopublish': null, 'facts': null, 'callback-hook': null, 'minimongo': null, 'reload': null, }],
["check", '1.0.2+local', {'meteor': null, 'underscore': null, 'ejson': null, }],
["retry", '1.0.1+local', {'meteor': null, 'underscore': null, 'random': null, }],
["webapp", '1.1.4+local', {'meteor': null, 'logging': null, 'underscore': null, 'routepolicy': null, 'boilerplate-generator': null, 'spacebars': null, 'htmljs': null, 'blaze': null, 'webapp-hashing': null, 'application-configuration': null, 'follower-livedata': null, }],
["webapp", '1.0.0', {'meteor': null, 'logging': null, 'underscore': null, 'routepolicy': null, 'boilerplate-generator': null, 'spacebars': null, 'htmljs': null, 'blaze': null, 'webapp-hashing': null, 'application-configuration': null, 'follower-livedata': null, }],
["routepolicy", '1.0.2+local', {'meteor': null, 'underscore': null, 'webapp': null, }],
["boilerplate-generator", '1.0.1+local', {'meteor': null, 'underscore': null, 'spacebars-compiler': null, 'spacebars': null, 'htmljs': null, 'ui': null, }],
["spacebars-compiler", '1.0.3+local', {'meteor': null, 'htmljs': null, 'html-tools': null, 'blaze-tools': null, 'underscore': null, 'minifiers': null, }],
["htmljs", '1.0.2+local', {'meteor': null, 'deps': null, }],
["deps", '1.0.5+local', {'meteor': null, 'tracker': null, }],
["deps", '1.0.0', {'meteor': null, 'tracker': null, }],
["html-tools", '1.0.2+local', {'meteor': null, 'htmljs': null, }],
["blaze-tools", '1.0.1+local', {'meteor': null, 'htmljs': null, 'underscore': null, }],
["minifiers", '1.1.2+local', {'meteor': null, 'underscore': null, }],
["spacebars", '1.0.3+local', {'meteor': null, 'htmljs': null, 'blaze': null, 'observe-sequence': null, 'templating': null, }],
["spacebars", '1.0.0', {'meteor': null, 'htmljs': null, 'blaze': null, 'observe-sequence': null, 'templating': null, }],
["blaze", '2.0.3+local', {'meteor': null, 'jquery': null, 'tracker': null, 'underscore': null, 'htmljs': null, 'observe-sequence': null, 'reactive-var': null, }],
["blaze", '2.0.0', {'meteor': null, 'jquery': null, 'tracker': null, 'underscore': null, 'htmljs': null, 'observe-sequence': null, 'reactive-var': null, }],
["blaze", '1.0.0', {'meteor': null, 'jquery': null, 'tracker': null, 'underscore': null, 'htmljs': null, 'observe-sequence': null, 'reactive-var': null, }],
["jquery", '1.0.1', {'meteor': null, }],
["jquery", '1.0.0', {'meteor': null, }],
["observe-sequence", '1.0.3+local', {'meteor': null, 'tracker': null, 'minimongo': null, 'underscore': null, 'random': null, }],
["reactive-var", '1.0.3+local', {'meteor': null, 'tracker': null, }],
["reactive-var", '1.0.0', {'meteor': null, 'tracker': null, }],
["templating", '1.0.9+local', {'meteor': null, 'underscore': null, 'blaze': null, }],
["templating", '1.0.0', {'meteor': null, 'underscore': null, 'blaze': null, }],
["ui", '1.0.4+local', {'meteor': null, 'blaze': null, }],
["ui", '1.0.0', {'meteor': null, 'blaze': null, }],
["webapp-hashing", '1.0.1+local', {'meteor': null, 'underscore': null, }],
["webapp-hashing", '1.0.0', {'meteor': null, 'underscore': null, }],
["application-configuration", '1.0.3+local', {'meteor': null, 'logging': null, 'underscore': null, 'ddp': null, 'ejson': null, 'follower-livedata': null, 'mongo': null, }],
["follower-livedata", '1.0.2+local', {'meteor': null, 'logging': null, 'underscore': null, 'ddp': null, 'ejson': null, }],
["audit-argument-checks", '1.0.1+local', {'meteor': null, }],
["autopublish", '1.0.1+local', {'meteor': null, }],
["facts", '1.0.2+local', {'meteor': null, 'underscore': null, 'autopublish': null, 'ddp': null, 'templating': null, 'mongo': null, }],
["callback-hook", '1.0.1+local', {'meteor': null, 'underscore': null, }],
["reload", '1.1.1+local', {'meteor': null, 'underscore': null, 'logging': null, 'json': null, }],
["binary-heap", '1.0.1+local', {'meteor': null, 'underscore': null, 'id-map': null, }],
["insecure", '1.0.1+local', {'meteor': null, }],
["disable-oplog", '1.0.1+local', {'meteor': null, }],
["iron:layout", '0.3.0', {'templating': '1.0.0', 'ui': '1.0.0', 'meteor': '1.0.0', 'underscore': '1.0.0', 'iron:core': '0.3.2', 'iron:dynamic-template': '0.3.0', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:core", '0.3.0', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.0', 'cmather:iron-core': '0.2.0', }],
["cmather:iron-core", '0.1.0', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.0', }],
["cmather:iron-core", '0.2.0', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.0', }],
["iron:core", '0.3.1', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.0', 'cmather:iron-core': '0.2.0', }],
["iron:core", '0.3.2', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.0', 'cmather:iron-core': '0.2.0', }],
["iron:core", '0.3.3-rc0', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.1-rc0', 'cmather:iron-core': '0.2.0', }],
["iron:core", '0.3.4-rc0', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.1-rc0', 'cmather:iron-core': '0.2.0', }],
["iron:core", '0.3.4', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.1', 'cmather:iron-core': '0.2.0', }],
["iron:core", '1.0.0-pre0', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.1-rc0', 'cmather:iron-core': '0.2.0', }],
["iron:core", '1.0.0-pre1', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.2', 'cmather:iron-core': '0.2.0', }],
["iron:core", '1.0.0-pre2', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.2', 'cmather:iron-core': '0.2.0', }],
["iron:core", '1.0.0-pre3', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.2', 'cmather:iron-core': '0.2.0', }],
["iron:core", '1.0.0-pre4', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.2', 'cmather:iron-core': '0.2.0', }],
["iron:core", '1.0.0-pre5', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.2', 'cmather:iron-core': '0.2.0', }],
["iron:core", '1.0.0-rc.1', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.2', 'cmather:iron-core': '0.2.0', }],
["iron:core", '1.0.0', {'meteor': null, 'underscore': '1.0.0', 'ejson': '1.0.2', 'cmather:iron-core': '0.2.0', }],
["iron:dynamic-template", '0.3.0', {'meteor': null, 'blaze': '1.0.0', 'underscore': '1.0.0', 'ui': '1.0.0', 'jquery': '1.0.0', 'deps': '1.0.0', 'templating': '1.0.0', 'iron:core': '0.3.2', }],
["iron:dynamic-template", '0.4.0-rc0', {'meteor': null, 'blaze': '2.0.0-rc0', 'underscore': '1.0.0', 'ui': '1.0.1-rc0', 'jquery': '1.0.0', 'deps': '1.0.2-rc1', 'templating': '1.0.5-rc0', 'iron:core': '0.3.2', }],
["iron:dynamic-template", '0.4.0-rc1', {'meteor': null, 'blaze': '2.0.0-rc1', 'underscore': '1.0.0', 'ui': '1.0.1-rc0', 'jquery': '1.0.0', 'deps': '1.0.2-rc1', 'templating': '1.0.5-rc2', 'iron:core': '0.3.2', }],
["iron:dynamic-template", '0.4.0-rc2', {'meteor': null, 'blaze': '2.0.0-rc1', 'underscore': '1.0.0', 'ui': '1.0.1-rc0', 'jquery': '1.0.0', 'deps': '1.0.2-rc1', 'templating': '1.0.5-rc2', 'iron:core': '0.3.3-rc0', }],
["iron:dynamic-template", '0.4.1-rc0', {'meteor': null, 'blaze': '2.0.0-rc1', 'underscore': '1.0.0', 'ui': '1.0.1-rc0', 'jquery': '1.0.0', 'deps': '1.0.2-rc1', 'templating': '1.0.6-rc0', 'iron:core': '0.3.4-rc0', }],
["iron:dynamic-template", '0.4.1', {'meteor': null, 'blaze': '2.0.0', 'underscore': '1.0.0', 'ui': '1.0.1', 'jquery': '1.0.0', 'deps': '1.0.2', 'templating': '1.0.5', 'iron:core': '0.3.4', }],
["iron:dynamic-template", '1.0.0-pre0', {'meteor': null, 'blaze': '2.0.0-rc1', 'underscore': '1.0.0', 'ui': '1.0.1-rc0', 'jquery': '1.0.0', 'tracker': '1.0.2-rc1', 'reactive-var': '1.0.1-rc0', 'templating': '1.0.6-rc0', 'iron:core': '1.0.0-pre0', }],
["iron:dynamic-template", '1.0.0-pre1', {'meteor': null, 'blaze': '2.0.0', 'underscore': '1.0.0', 'ui': '1.0.2', 'jquery': '1.0.0', 'tracker': '1.0.2', 'reactive-var': '1.0.1', 'templating': '1.0.6', 'iron:core': '1.0.0-pre1', }],
["iron:dynamic-template", '1.0.0-pre2', {'meteor': null, 'blaze': '2.0.0', 'underscore': '1.0.0', 'ui': '1.0.2', 'jquery': '1.0.0', 'tracker': '1.0.2', 'reactive-var': '1.0.1', 'templating': '1.0.6', 'iron:core': '1.0.0-pre2', }],
["iron:dynamic-template", '1.0.0-pre3', {'meteor': null, 'blaze': '2.0.0', 'underscore': '1.0.0', 'ui': '1.0.2', 'jquery': '1.0.0', 'tracker': '1.0.2', 'reactive-var': '1.0.1', 'templating': '1.0.6', 'iron:core': '1.0.0-pre3', }],
["iron:dynamic-template", '1.0.0-pre4', {'meteor': null, 'blaze': '2.0.0', 'underscore': '1.0.0', 'ui': '1.0.2', 'jquery': '1.0.0', 'tracker': '1.0.2', 'reactive-var': '1.0.1', 'templating': '1.0.6', 'random': '1.0.0', 'iron:core': '1.0.0-pre4', }],
["iron:dynamic-template", '1.0.0-pre5', {'meteor': null, 'blaze': '2.0.0', 'underscore': '1.0.0', 'ui': '1.0.2', 'jquery': '1.0.0', 'tracker': '1.0.2', 'reactive-var': '1.0.1', 'templating': '1.0.6', 'random': '1.0.0', 'iron:core': '1.0.0-pre5', }],
["iron:dynamic-template", '1.0.0-rc.1', {'meteor': null, 'blaze': '2.0.0', 'underscore': '1.0.0', 'ui': '1.0.2', 'jquery': '1.0.0', 'tracker': '1.0.2', 'reactive-var': '1.0.1', 'templating': '1.0.6', 'random': '1.0.0', 'iron:core': '1.0.0-rc.1', }],
["iron:dynamic-template", '1.0.0', {'meteor': null, 'blaze': '2.0.0', 'underscore': '1.0.0', 'ui': '1.0.2', 'jquery': '1.0.0', 'tracker': '1.0.2', 'reactive-var': '1.0.1', 'templating': '1.0.6', 'random': '1.0.0', 'iron:core': '1.0.0', }],
["cmather:blaze-layout", '0.0.1', {'meteor': null, }],
["cmather:blaze-layout", '0.1.0', {'meteor': null, }],
["cmather:blaze-layout", '0.2.0', {'meteor': null, }],
["cmather:blaze-layout", '0.2.1', {'meteor': null, }],
["cmather:blaze-layout", '0.2.2', {'meteor': null, }],
["cmather:blaze-layout", '0.2.3', {'meteor': null, }],
["cmather:blaze-layout", '0.2.4', {'meteor': null, }],
["cmather:blaze-layout", '0.2.5', {'meteor': null, 'templating': '1.0.0', 'ui': '1.0.0', 'reactive-dict': '1.0.0', 'underscore': '1.0.0' }], // We removed iron-router from here!
["cmather:iron-layout", '0.1.0', {'meteor': null, }],
["cmather:iron-layout", '0.1.1', {'meteor': null, }],
["cmather:iron-layout", '0.1.2', {'meteor': null, }],
["cmather:iron-layout", '0.2.0', {'templating': '1.0.0', 'ui': '1.0.0', 'meteor': '1.0.0', 'underscore': '1.0.0', 'cmather:iron-core': '0.2.0', 'cmather:iron-dynamic-template': '0.2.1', 'cmather:blaze-layout': '0.2.5', }],
["cmather:iron-dynamic-template", '0.1.0', {'meteor': null, }],
["cmather:iron-dynamic-template", '0.2.0', {'meteor': null, }],
["cmather:iron-dynamic-template", '0.2.1', {'meteor': null, 'blaze': '1.0.0', 'underscore': '1.0.0', 'ui': '1.0.0', 'spacebars': '1.0.0', 'jquery': '1.0.0', 'deps': '1.0.0', 'templating': '1.0.0', 'cmather:iron-core': '0.2.0', }],
["iron:layout", '0.4.0-rc0', {'meteor': null, 'templating': '1.0.5-rc0', 'blaze': '2.0.0-rc0', 'underscore': '1.0.0', 'iron:core': '0.3.2', 'iron:dynamic-template': '0.4.0-rc0', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '0.4.0-rc1', {'meteor': null, 'templating': '1.0.5-rc2', 'blaze': '2.0.0-rc1', 'underscore': '1.0.0', 'iron:core': '0.3.2', 'iron:dynamic-template': '0.4.0-rc1', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '0.4.0-rc2', {'meteor': null, 'templating': '1.0.5-rc2', 'blaze': '2.0.0-rc1', 'underscore': '1.0.0', 'iron:core': '0.3.3-rc0', 'iron:dynamic-template': '0.4.0-rc2', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '0.4.1-rc0', {'meteor': null, 'templating': '1.0.6-rc0', 'blaze': '2.0.0-rc1', 'underscore': '1.0.0', 'iron:core': '0.3.4-rc0', 'iron:dynamic-template': '0.4.1-rc0', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '0.4.1', {'meteor': null, 'templating': '1.0.5', 'blaze': '2.0.0', 'underscore': '1.0.0', 'iron:core': '0.3.4', 'iron:dynamic-template': '0.4.1', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '1.0.0-pre0', {'meteor': null, 'templating': '1.0.6-rc0', 'blaze': '2.0.0-rc1', 'underscore': '1.0.0', 'iron:core': '1.0.0-pre0', 'iron:dynamic-template': '1.0.0-pre0', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '1.0.0-pre1', {'meteor': null, 'templating': '1.0.6', 'blaze': '2.0.0', 'underscore': '1.0.0', 'iron:core': '1.0.0-pre1', 'iron:dynamic-template': '1.0.0-pre1', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '1.0.0-pre2', {'meteor': null, 'templating': '1.0.6', 'blaze': '2.0.0', 'underscore': '1.0.0', 'iron:core': '1.0.0-pre2', 'iron:dynamic-template': '1.0.0-pre2', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '1.0.0-pre3', {'meteor': null, 'templating': '1.0.6', 'blaze': '2.0.0', 'underscore': '1.0.0', 'iron:core': '1.0.0-pre3', 'iron:dynamic-template': '1.0.0-pre3', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '1.0.0-pre4', {'meteor': null, 'templating': '1.0.6', 'blaze': '2.0.0', 'underscore': '1.0.0', 'iron:core': '1.0.0-pre4', 'iron:dynamic-template': '1.0.0-pre4', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '1.0.0-pre5', {'meteor': null, 'templating': '1.0.6', 'blaze': '2.0.0', 'underscore': '1.0.0', 'iron:core': '1.0.0-pre5', 'iron:dynamic-template': '1.0.0-pre5', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '1.0.0-rc.1', {'meteor': null, 'templating': '1.0.6', 'blaze': '2.0.0', 'underscore': '1.0.0', 'iron:core': '1.0.0-rc.1', 'iron:dynamic-template': '1.0.0-rc.1', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["iron:layout", '1.0.0', {'meteor': null, 'templating': '1.0.6', 'blaze': '2.0.0', 'underscore': '1.0.0', 'iron:core': '1.0.0', 'iron:dynamic-template': '1.0.0', 'cmather:blaze-layout': '0.2.5', 'cmather:iron-layout': '0.2.0', }],
["cmather:iron-router", '0.5.3', {'meteor': null, }],
["cmather:iron-router", '0.5.4', {'meteor': null, }],
["cmather:iron-router", '0.6.0', {'meteor': null, 'reactive-dict': '1.0.0', 'deps': '1.0.0', 'underscore': '1.0.0', 'ejson': '1.0.0', 'webapp': '1.0.0', 'templating': '1.0.0', 'handlebars': '1.0.0', 'jquery': '1.0.0', }],
["handlebars", '1.0.1+local', {'meteor': null, }],
["cmather:iron-router", '0.6.1', {'meteor': null, 'reactive-dict': '1.0.0', 'deps': '1.0.0', 'underscore': '1.0.0', 'ejson': '1.0.0', 'webapp': '1.0.0', 'templating': '1.0.0', 'handlebars': '1.0.0', 'jquery': '1.0.0', }],
["cmather:iron-router", '0.6.2', {'meteor': null, 'reactive-dict': '1.0.0', 'deps': '1.0.0', 'underscore': '1.0.0', 'ejson': '1.0.0', 'webapp': '1.0.0', 'templating': '1.0.0', 'handlebars': '1.0.0', 'jquery': '1.0.0', }],
["cmather:iron-router", '0.6.3', {'meteor': null, 'reactive-dict': '1.0.0', 'deps': '1.0.0', 'underscore': '1.0.0', 'ejson': '1.0.0', 'webapp': '1.0.0', 'templating': '1.0.0', 'handlebars': '1.0.0', 'jquery': '1.0.0', }],
["cmather:iron-router", '0.6.4', {'meteor': null, 'reactive-dict': '1.0.0', 'deps': '1.0.0', 'underscore': '1.0.0', 'ejson': '1.0.0', 'webapp': '1.0.0', 'templating': '1.0.0', 'handlebars': '1.0.0', 'jquery': '1.0.0', }],
["cmather:iron-router", '0.7.0', {'meteor': null, }],
["cmather:iron-router", '0.7.1', {'meteor': null, }],
["cmather:iron-router", '0.8.0', {'meteor': null, }],
["cmather:iron-router", '0.8.1', {'meteor': null, }],
["cmather:iron-router", '0.8.2', {'meteor': null, 'reactive-dict': '1.0.0', 'deps': '1.0.0', 'underscore': '1.0.0', 'ejson': '1.0.0', 'cmather:iron-layout': '0.2.0', 'webapp': '1.0.0', 'jquery': '1.0.0', 'ui': '1.0.0', }],
["iron:router", '0.9.1', {'meteor': null, 'reactive-dict': '1.0.0', 'deps': '1.0.0', 'underscore': '1.0.0', 'ejson': '1.0.0', 'webapp': '1.0.0', 'iron:layout': '0.3.0', 'cmather:iron-router': '0.8.2', 'jquery': '1.0.0', 'ui': '1.0.0', }],
["iron:router", '0.9.2-rc0', {'meteor': null, 'reactive-dict': '1.0.1-rc0', 'deps': '1.0.2-rc1', 'underscore': '1.0.0', 'ejson': '1.0.1-rc0', 'webapp': '1.0.3-rc0', 'iron:layout': '0.4.0-rc0', 'cmather:iron-router': '0.8.2', 'jquery': '1.0.0', 'blaze': '2.0.0-rc0', }],
["iron:router", '0.9.2-rc2', {'meteor': null, 'reactive-dict': '1.0.1-rc1', 'deps': '1.0.2-rc1', 'underscore': '1.0.0', 'ejson': '1.0.1-rc0', 'webapp': '1.0.3-rc0', 'iron:layout': '0.4.0-rc2', 'cmather:iron-router': '0.8.2', 'jquery': '1.0.0', 'blaze': '2.0.0-rc1', }],
["iron:router", '0.9.3-rc0', {'meteor': null, 'reactive-dict': '1.0.1-rc1', 'deps': '1.0.2-rc1', 'underscore': '1.0.0', 'ejson': '1.0.1-rc0', 'webapp': '1.1.0-rc1', 'iron:layout': '0.4.1-rc0', 'cmather:iron-router': '0.8.2', 'jquery': '1.0.0', 'blaze': '2.0.0-rc1', }],
["iron:router", '0.9.3', {'meteor': null, 'reactive-dict': '1.0.1', 'deps': '1.0.2', 'underscore': '1.0.0', 'ejson': '1.0.1', 'webapp': '1.0.3', 'iron:layout': '0.4.1', 'cmather:iron-router': '0.8.2', 'jquery': '1.0.0', 'blaze': '2.0.0', }],
["iron:router", '0.9.4', {'meteor': null, 'reactive-dict': '1.0.1', 'deps': '1.0.2', 'underscore': '1.0.0', 'ejson': '1.0.1', 'webapp': '1.0.3', 'iron:layout': '0.4.1', 'cmather:iron-router': '0.8.2', 'jquery': '1.0.0', 'blaze': '2.0.0', }],
["iron:router", '1.0.0-pre0', {'underscore': '1.0.0', 'webapp': '1.1.0-rc1', 'ui': '1.0.1-rc0', 'templating': '1.0.6-rc0', 'meteor': '1.1.0-rc0', 'iron:core': '1.0.0-pre0', 'iron:layout': '1.0.0-pre0', 'iron:middleware-stack': '1.0.0-pre0', 'iron:url': '1.0.0-pre0', 'iron:location': '1.0.0-pre0', 'iron:controller': '1.0.0-pre0', 'deps': '1.0.2-rc1', }],
["iron:middleware-stack", '1.0.0-pre0', {'meteor': null, 'iron:core': '1.0.0-pre0', 'iron:url': '1.0.0-pre0', }],
["iron:url", '1.0.0-pre0', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0-pre0', }],
["iron:url", '1.0.0-pre1', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0-pre1', }],
["iron:url", '1.0.0-pre2', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0-pre2', }],
["iron:url", '1.0.0-pre3', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0-pre3', }],
["iron:url", '1.0.0-pre4', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0-pre4', }],
["iron:url", '1.0.0-pre5', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0-pre5', }],
["iron:url", '1.0.0-rc.1', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0-rc.1', }],
["iron:url", '1.0.0', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0', }],
["iron:middleware-stack", '1.0.0-pre1', {'meteor': null, 'iron:core': '1.0.0-pre1', 'iron:url': '1.0.0-pre1', }],
["iron:middleware-stack", '1.0.0-pre2', {'meteor': null, 'iron:core': '1.0.0-pre2', 'iron:url': '1.0.0-pre2', }],
["iron:middleware-stack", '1.0.0-pre3', {'meteor': null, 'iron:core': '1.0.0-pre3', 'iron:url': '1.0.0-pre3', }],
["iron:middleware-stack", '1.0.0-pre4', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0-pre4', 'iron:url': '1.0.0-pre4', }],
["iron:middleware-stack", '1.0.0-pre5', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0-pre5', 'iron:url': '1.0.0-pre5', }],
["iron:middleware-stack", '1.0.0-rc.1', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0-rc.1', 'iron:url': '1.0.0-rc.1', }],
["iron:middleware-stack", '1.0.0', {'meteor': null, 'underscore': '1.0.0', 'iron:core': '1.0.0', 'iron:url': '1.0.0', }],
["iron:location", '1.0.0-pre0', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2-rc1', 'jquery': '1.0.0', 'iron:core': '1.0.0-pre0', 'iron:url': '1.0.0-pre0', }],
["iron:location", '1.0.0-pre1', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'jquery': '1.0.0', 'iron:core': '1.0.0-pre1', 'iron:url': '1.0.0-pre1', }],
["iron:location", '1.0.0-pre2', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'jquery': '1.0.0', 'iron:core': '1.0.0-pre2', 'iron:url': '1.0.0-pre2', }],
["iron:location", '1.0.0-pre3', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'jquery': '1.0.0', 'iron:core': '1.0.0-pre3', 'iron:url': '1.0.0-pre3', }],
["iron:location", '1.0.0-pre4', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'jquery': '1.0.0', 'iron:core': '1.0.0-pre4', 'iron:url': '1.0.0-pre4', }],
["iron:location", '1.0.0-pre5', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'jquery': '1.0.0', 'iron:core': '1.0.0-pre5', 'iron:url': '1.0.0-pre5', 'appcache': '1.0.0-cordova1', }],
["appcache", '1.0.2+local', {'meteor': null, 'webapp': null, 'routepolicy': null, 'underscore': null, 'autoupdate': null, 'reload': null, }],
["autoupdate", '1.1.3+local', {'meteor': null, 'webapp': null, 'ddp': null, 'mongo': null, 'underscore': null, 'tracker': null, 'retry': null, 'reload': null, 'http': null, 'random': null, }],
["http", '1.0.8+local', {'meteor': null, 'underscore': null, 'url': null, }],
["url", '1.0.2+local', {'meteor': null, 'underscore': null, }],
["iron:location", '1.0.0-rc.1', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'jquery': '1.0.0', 'iron:core': '1.0.0-rc.1', 'iron:url': '1.0.0-rc.1', 'appcache': '1.0.0-cordova1', }],
["iron:location", '1.0.0', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'jquery': '1.0.0', 'iron:core': '1.0.0', 'iron:url': '1.0.0', 'appcache': '1.0.0-cordova1', }],
["iron:controller", '1.0.0-pre0', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2-rc1', 'reactive-dict': '1.0.1-rc1', 'iron:core': '1.0.0-pre0', 'iron:layout': '1.0.0-pre0', 'iron:dynamic-template': '1.0.0-pre0', }],
["iron:controller", '1.0.0-pre1', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'reactive-dict': '1.0.2', 'iron:core': '1.0.0-pre1', 'iron:layout': '1.0.0-pre1', 'iron:dynamic-template': '1.0.0-pre1', }],
["iron:controller", '1.0.0-pre2', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'reactive-dict': '1.0.2', 'iron:core': '1.0.0-pre2', 'iron:layout': '1.0.0-pre2', 'iron:dynamic-template': '1.0.0-pre2', }],
["iron:controller", '1.0.0-pre3', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'reactive-dict': '1.0.2', 'iron:core': '1.0.0-pre3', 'iron:layout': '1.0.0-pre3', 'iron:dynamic-template': '1.0.0-pre3', }],
["iron:controller", '1.0.0-pre4', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'reactive-dict': '1.0.2', 'templating': '1.0.6', 'iron:core': '1.0.0-pre4', 'iron:layout': '1.0.0-pre4', 'iron:dynamic-template': '1.0.0-pre4', }],
["iron:controller", '1.0.0-pre5', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'reactive-dict': '1.0.2', 'templating': '1.0.6', 'iron:core': '1.0.0-pre5', 'iron:layout': '1.0.0-pre5', 'iron:dynamic-template': '1.0.0-pre5', }],
["iron:controller", '1.0.0-rc.1', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'reactive-dict': '1.0.2', 'templating': '1.0.6', 'iron:core': '1.0.0-rc.1', 'iron:layout': '1.0.0-rc.1', 'iron:dynamic-template': '1.0.0-rc.1', }],
["iron:controller", '1.0.0', {'meteor': null, 'underscore': '1.0.0', 'tracker': '1.0.2', 'reactive-dict': '1.0.2', 'templating': '1.0.6', 'iron:core': '1.0.0', 'iron:layout': '1.0.0', 'iron:dynamic-template': '1.0.0', }],
["iron:router", '1.0.0-pre1', {'underscore': '1.0.0', 'webapp': '1.1.1', 'ui': '1.0.2', 'templating': '1.0.6', 'meteor': '1.1.0', 'iron:core': '1.0.0-pre1', 'iron:layout': '1.0.0-pre1', 'iron:middleware-stack': '1.0.0-pre1', 'iron:url': '1.0.0-pre1', 'iron:location': '1.0.0-pre1', 'iron:controller': '1.0.0-pre1', 'deps': '1.0.3', }],
["iron:router", '1.0.0-pre2', {'underscore': '1.0.0', 'webapp': '1.1.1', 'ui': '1.0.2', 'templating': '1.0.6', 'meteor': '1.1.0', 'iron:core': '1.0.0-pre2', 'iron:layout': '1.0.0-pre2', 'iron:middleware-stack': '1.0.0-pre2', 'iron:url': '1.0.0-pre2', 'iron:location': '1.0.0-pre2', 'iron:controller': '1.0.0-pre2', 'deps': '1.0.3', }],
["iron:router", '1.0.0-pre3', {'underscore': '1.0.0', 'webapp': '1.1.1', 'ui': '1.0.2', 'templating': '1.0.6', 'meteor': '1.1.0', 'iron:core': '1.0.0-pre3', 'iron:layout': '1.0.0-pre3', 'iron:middleware-stack': '1.0.0-pre3', 'iron:url': '1.0.0-pre3', 'iron:location': '1.0.0-pre3', 'iron:controller': '1.0.0-pre3', 'deps': '1.0.3', }],
["iron:router", '1.0.0-pre4', {'underscore': '1.0.0', 'webapp': '1.1.1', 'ui': '1.0.2', 'templating': '1.0.6', 'ejson': '1.0.2', 'meteor': '1.1.0', 'iron:core': '1.0.0-pre4', 'iron:layout': '1.0.0-pre4', 'iron:middleware-stack': '1.0.0-pre4', 'iron:url': '1.0.0-pre4', 'iron:location': '1.0.0-pre4', 'iron:controller': '1.0.0-pre4', 'deps': '1.0.3', }],
["iron:router", '1.0.0-pre5', {'underscore': '1.0.0', 'webapp': '1.1.1', 'ui': '1.0.2', 'templating': '1.0.6', 'ejson': '1.0.2', 'meteor': '1.1.0', 'iron:core': '1.0.0-pre5', 'iron:layout': '1.0.0-pre5', 'iron:middleware-stack': '1.0.0-pre5', 'iron:url': '1.0.0-pre5', 'iron:location': '1.0.0-pre5', 'iron:controller': '1.0.0-pre5', 'deps': '1.0.3', }],
["iron:router", '1.0.0-rc.0', {'underscore': '1.0.0', 'webapp': '1.1.1', 'ui': '1.0.2', 'templating': '1.0.6', 'ejson': '1.0.2', 'meteor': '1.1.0', 'iron:core': '1.0.0-pre5', 'iron:layout': '1.0.0-pre5', 'iron:middleware-stack': '1.0.0-pre5', 'iron:url': '1.0.0-pre5', 'iron:location': '1.0.0-pre5', 'iron:controller': '1.0.0-pre5', 'deps': '1.0.3', }],
["iron:router", '1.0.0-rc.1', {'underscore': '1.0.0', 'webapp': '1.1.1', 'ui': '1.0.2', 'templating': '1.0.6', 'ejson': '1.0.2', 'meteor': '1.1.0', 'iron:core': '1.0.0-rc.1', 'iron:layout': '1.0.0-rc.1', 'iron:middleware-stack': '1.0.0-rc.1', 'iron:url': '1.0.0-rc.1', 'iron:location': '1.0.0-rc.1', 'iron:controller': '1.0.0-rc.1', 'deps': '1.0.3', }],
["iron:router", '1.0.0', {'underscore': '1.0.0', 'webapp': '1.1.1', 'ui': '1.0.2', 'templating': '1.0.6', 'ejson': '1.0.2', 'meteor': '1.1.0', 'iron:core': '1.0.0', 'iron:layout': '1.0.0', 'iron:middleware-stack': '1.0.0', 'iron:url': '1.0.0', 'iron:location': '1.0.0', 'iron:controller': '1.0.0', 'deps': '1.0.3', }],
["matb33:collection-hooks", '0.7.3', {'meteor': '1.0.0', 'underscore': '1.0.0', 'ejson': '1.0.0', 'mongo-livedata': '1.0.0', 'minimongo': '1.0.0', 'deps': '1.0.0', 'accounts-base': '1.0.0', }],
["mongo-livedata", '1.0.6+local', {'meteor': null, 'mongo': null, }],
["mongo-livedata", '1.0.0', {'meteor': null, 'mongo': null, }],
["accounts-base", '1.1.2+local', {'meteor': null, 'underscore': null, 'check': null, 'random': null, 'ejson': null, 'callback-hook': null, 'service-configuration': null, 'ddp': null, 'mongo': null, 'autopublish': null, 'oauth-encryption': null, 'localstorage': null, 'tracker': null, 'blaze': null, }],
["accounts-base", '1.0.0', {'meteor': null, 'underscore': null, 'check': null, 'random': null, 'ejson': null, 'callback-hook': null, 'service-configuration': null, 'ddp': null, 'mongo': null, 'autopublish': null, 'oauth-encryption': null, 'localstorage': null, 'tracker': null, 'blaze': null, }],
["service-configuration", '1.0.2+local', {'meteor': null, 'accounts-base': null, 'mongo': null, }],
["oauth-encryption", '1.0.1+local', {'meteor': null, 'npm-node-aes-gcm': '=0.1.3', 'underscore': null, }],
["npm-node-aes-gcm", '0.1.3', {'meteor': null, }],
["localstorage", '1.0.1+local', {'meteor': null, 'random': null, }],
["matb33:collection-hooks", '0.7.5', {'meteor': null, 'mongo': '1.0.4', 'tracker': '1.0.2', 'underscore': '1.0.0', 'ejson': '1.0.0', 'minimongo': '1.0.1', 'accounts-base': '1.0.0', }],
["matb33:collection-hooks", '0.7.6', {'meteor': null, 'mongo': '1.0.4', 'tracker': '1.0.2', 'underscore': '1.0.0', 'ejson': '1.0.1', 'minimongo': '1.0.2', 'accounts-base': '1.0.1', }],
["mizzao:timesync", '0.1.0', {'meteor': null, 'coffeescript': '1.0.0', 'deps': '1.0.0', }],
["coffeescript", '1.0.4+local', {'meteor': null, }],
["coffeescript", '1.0.0', {'meteor': null, }],
["mizzao:timesync", '0.1.1', {'meteor': null, 'coffeescript': '1.0.0', 'deps': '1.0.0', }],
["mizzao:timesync", '0.1.2', {'meteor': null, 'coffeescript': '1.0.0', 'deps': '1.0.0', }],
["mizzao:timesync", '0.1.3', {'meteor': null, 'coffeescript': '1.0.0', 'deps': '1.0.0', }],
["mizzao:timesync", '0.1.4', {'meteor': null, 'webapp': '1.0.0', 'deps': '1.0.0', 'http': '1.0.0', }],
["mizzao:timesync", '0.1.5', {'meteor': null, 'webapp': '1.0.0', 'deps': '1.0.0', 'http': '1.0.0', }],
["mizzao:timesync", '0.1.6', {'meteor': null, 'webapp': '1.0.0', 'deps': '1.0.0', 'http': '1.0.0', }],
["mizzao:timesync", '0.2.0', {'meteor': null, 'webapp': '1.0.0', 'deps': '1.0.0', 'http': '1.0.0', }],
["mizzao:timesync", '0.2.1', {'meteor': null, 'webapp': '1.0.0', 'deps': '1.0.0', 'http': '1.0.0', }],
["mizzao:timesync", '0.2.2', {'meteor': null, 'webapp': '1.0.0', 'deps': '1.0.0', 'http': '1.0.0', }],
["mrt:jquery-ui-sortable", '1.10.3', {'meteor': null, 'jquery': '1.0.0', }],
["mrt:moment", '1.7.0', {'meteor': null, }],
["mrt:moment", '2.2.1', {'meteor': null, }],
["mrt:moment", '2.5.1', {'meteor': null, }],
["mrt:moment", '2.6.0', {'meteor': null, }],
["mrt:moment", '2.8.1', {'meteor': null, }],
["skinnygeek1010:parse-form", '0.1.0', {'meteor': null, 'jquery': '1.0.0', }],
["skinnygeek1010:parse-form", '0.2.0', {'meteor': null, 'jquery': '1.0.0', }],
["skinnygeek1010:parse-form", '0.2.1', {'meteor': null, 'jquery': '1.0.0', }],
["splendido:accounts-templates-semantic-ui", '0.0.1', {'meteor': null, }],
["splendido:accounts-templates-semantic-ui", '0.0.2', {'meteor': null, }],
["splendido:accounts-templates-semantic-ui", '0.0.3', {'meteor': null, }],
["splendido:accounts-templates-semantic-ui", '0.0.4', {'meteor': null, }],
["splendido:accounts-templates-semantic-ui", '0.0.20', {'meteor': null, 'service-configuration': '1.0.0', 'accounts-password': '1.0.0', 'accounts-base': '1.0.0', 'splendido:accounts-templates-core': '0.0.20', 'templating': '1.0.4', 'less': '1.0.5', }],
["accounts-password", '1.0.4+local', {'meteor': null, 'npm-bcrypt': '=0.7.7', 'accounts-base': null, 'srp': null, 'sha': null, 'email': null, 'random': null, 'check': null, 'underscore': null, 'ddp': null, }],
["npm-bcrypt", '0.7.7', {'meteor': null, }],
["srp", '1.0.1+local', {'meteor': null, 'random': null, 'check': null, 'sha': null, 'underscore': null, }],
["sha", '1.0.1+local', {'meteor': null, }],
["email", '1.0.4+local', {'meteor': null, 'underscore': null, 'application-configuration': null, }],
["splendido:accounts-templates-core", '0.0.1', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.2', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.3', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.4', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.5', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.6', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.7', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.8', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.9', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.10', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.11', {'meteor': null, }],
["splendido:accounts-templates-core", '0.0.20', {'meteor': null, 'check': '1.0.0', 'deps': '1.0.1', 'accounts-base': '1.0.0', 'mrt:accounts-t9n': '0.0.13', 'iron:router': '0.9.1', 'underscore': '1.0.0', 'minimongo': '1.0.1', 'mongo-livedata': '1.0.3', 'sha': '1.0.0', 'templating': '1.0.4', }],
["mrt:accounts-t9n", '0.0.1', {'meteor': null, 'coffeescript': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', 'mrt:just-i18n': '0.3.0', }],
["mrt:just-i18n", '0.1.0', {'meteor': null, 'underscore': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:just-i18n", '0.1.1', {'meteor': null, 'underscore': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:just-i18n", '0.2.0', {'meteor': null, 'underscore': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:just-i18n", '0.2.1', {'meteor': null, 'underscore': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:just-i18n", '0.2.2', {'meteor': null, 'underscore': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:just-i18n", '0.2.3', {'meteor': null, 'underscore': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:just-i18n", '0.2.4', {'meteor': null, 'underscore': '1.0.0', 'ui': '1.0.0', 'deps': '1.0.0', }],
["mrt:just-i18n", '0.3.0', {'meteor': null, 'underscore': '1.0.0', 'ui': '1.0.0', 'deps': '1.0.0', }],
["mrt:accounts-t9n", '0.0.2', {'meteor': null, 'coffeescript': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', 'mrt:just-i18n': '0.3.0', }],
["mrt:accounts-t9n", '0.0.3', {'meteor': null, 'coffeescript': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:accounts-t9n", '0.0.4', {'meteor': null, 'coffeescript': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:accounts-t9n", '0.0.7', {'meteor': null, 'coffeescript': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:accounts-t9n", '0.0.10', {'meteor': null, 'coffeescript': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:accounts-t9n", '0.0.11', {'meteor': null, 'coffeescript': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:accounts-t9n", '0.0.12', {'meteor': null, 'coffeescript': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["mrt:accounts-t9n", '0.0.13', {'meteor': null, 'coffeescript': '1.0.0', 'handlebars': '1.0.0', 'deps': '1.0.0', }],
["splendido:accounts-templates-core", '0.0.21', {'meteor': null, 'check': '1.0.0', 'deps': '1.0.1', 'accounts-base': '1.0.0', 'mrt:accounts-t9n': '0.0.13', 'iron:router': '0.9.1', 'underscore': '1.0.0', 'minimongo': '1.0.1', 'mongo-livedata': '1.0.3', 'sha': '1.0.0', 'templating': '1.0.4', }],
["splendido:accounts-templates-core", '0.0.22', {'meteor': null, 'check': '1.0.0', 'deps': '1.0.1', 'accounts-base': '1.0.0', 'mrt:accounts-t9n': '0.0.13', 'iron:router': '0.9.1', 'underscore': '1.0.0', 'minimongo': '1.0.1', 'mongo-livedata': '1.0.3', 'sha': '1.0.0', 'templating': '1.0.4', }],
["splendido:accounts-templates-core", '0.0.23', {'meteor': null, 'check': '1.0.0', 'deps': '1.0.1', 'accounts-base': '1.0.0', 'mrt:accounts-t9n': '0.0.13', 'iron:router': '0.9.1', 'underscore': '1.0.0', 'minimongo': '1.0.1', 'mongo-livedata': '1.0.3', 'sha': '1.0.0', 'templating': '1.0.4', }],
["splendido:accounts-templates-core", '0.0.24', {'meteor': null, 'mrt:accounts-t9n': '0.0.13', 'iron:router': '0.9.1', 'check': '1.0.0', 'deps': '1.0.1', 'accounts-base': '1.0.0', 'underscore': '1.0.0', 'minimongo': '1.0.1', 'mongo-livedata': '1.0.3', 'sha': '1.0.0', 'templating': '1.0.4', }],
["splendido:accounts-templates-core", '0.0.25', {'meteor': null, 'mrt:accounts-t9n': '0.0.13', 'iron:router': '0.9.1', 'check': '1.0.0', 'deps': '1.0.1', 'accounts-base': '1.0.0', 'underscore': '1.0.0', 'minimongo': '1.0.1', 'mongo-livedata': '1.0.3', 'sha': '1.0.0', 'templating': '1.0.4', }],
["splendido:accounts-templates-core", '0.0.26', {'meteor': null, 'softwarerero:accounts-t9n': '0.0.17', 'iron:router': '0.9.3', 'check': '1.0.0', 'deps': '1.0.1', 'accounts-base': '1.0.0', 'underscore': '1.0.0', 'minimongo': '1.0.1', 'mongo-livedata': '1.0.3', 'sha': '1.0.0', 'templating': '1.0.4', }],
["softwarerero:accounts-t9n", '0.0.17', {'meteor': null, 'coffeescript': '1.0.2', 'deps': '1.0.1', }],
["softwarerero:accounts-t9n", '0.0.18', {'meteor': null, 'coffeescript': '1.0.2', 'deps': '1.0.1', }],
["softwarerero:accounts-t9n", '0.0.19', {'meteor': null, 'coffeescript': '1.0.2', 'deps': '1.0.1', }],
["softwarerero:accounts-t9n", '0.0.20', {'meteor': null, 'coffeescript': '1.0.2', 'deps': '1.0.1', }],
["softwarerero:accounts-t9n", '1.0.0', {'meteor': null, 'coffeescript': '1.0.2', 'deps': '1.0.1', }],
["softwarerero:accounts-t9n", '1.0.1', {'meteor': null, 'coffeescript': '1.0.2', 'deps': '1.0.1', }],
["softwarerero:accounts-t9n", '1.0.2', {'meteor': null, 'coffeescript': '1.0.2', 'deps': '1.0.1', }],
["splendido:accounts-templates-core", '0.0.27', {'meteor': null, 'softwarerero:accounts-t9n': '0.0.17', 'iron:router': '0.9.3', 'check': '1.0.0', 'deps': '1.0.1', 'accounts-base': '1.0.0', 'underscore': '1.0.0', 'minimongo': '1.0.1', 'mongo-livedata': '1.0.3', 'sha': '1.0.0', 'templating': '1.0.4', }],
["splendido:accounts-templates-core", '0.0.28', {'meteor': null, 'softwarerero:accounts-t9n': '0.0.17', 'iron:router': '0.9.3', 'check': '1.0.0', 'deps': '1.0.1', 'accounts-base': '1.0.0', 'underscore': '1.0.0', 'minimongo': '1.0.1', 'mongo-livedata': '1.0.3', 'sha': '1.0.0', 'templating': '1.0.4', }],
["splendido:accounts-templates-core", '0.9.0', {'meteor': null, 'check': '1.0.0', 'accounts-base': '1.0.1', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '0.0.20', 'blaze': '2.0.0', 'reactive-dict': '1.0.1', 'sha': '1.0.0', 'templating': '1.0.5', }],
["splendido:accounts-templates-core", '0.9.1', {'meteor': null, 'check': '1.0.0', 'accounts-base': '1.0.1', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '0.0.20', 'blaze': '2.0.0', 'reactive-dict': '1.0.1', 'sha': '1.0.0', 'templating': '1.0.5', }],
["splendido:accounts-templates-core", '0.9.2', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'softwarerero:accounts-t9n': '0.0.20', 'iron:router': '0.9.3', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.3', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '0.0.20', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.4', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '0.0.20', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.5', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.6', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.7', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.8', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.9', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.10', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.11', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.12', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.13', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.14', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.15', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.3', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.16-iron-v1.1', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '1.0.0-pre4', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.9.16', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.4', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.10.0', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.4', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["splendido:accounts-templates-core", '0.11.0', {'meteor': null, 'accounts-base': '1.1.0', 'check': '1.0.0', 'underscore': '1.0.0', 'iron:router': '0.9.4', 'softwarerero:accounts-t9n': '1.0.0', 'blaze': '2.0.0', 'reactive-dict': '1.0.2', 'sha': '1.0.0', 'templating': '1.0.6', }],
["less", '1.0.11+local', {'meteor': null, }],
["splendido:accounts-templates-semantic-ui", '0.0.21', {'meteor': null, 'service-configuration': '1.0.0', 'accounts-password': '1.0.0', 'accounts-base': '1.0.0', 'splendido:accounts-templates-core': '0.0.21', 'templating': '1.0.4', 'less': '1.0.5', }],
["splendido:accounts-templates-semantic-ui", '0.0.24', {'meteor': null, 'service-configuration': '1.0.0', 'accounts-password': '1.0.0', 'accounts-base': '1.0.0', 'splendido:accounts-templates-core': '0.0.24', 'templating': '1.0.4', 'less': '1.0.5', }],
["splendido:accounts-templates-semantic-ui", '0.0.25', {'meteor': null, 'service-configuration': '1.0.0', 'accounts-password': '1.0.0', 'accounts-base': '1.0.0', 'splendido:accounts-templates-core': '0.0.25', 'templating': '1.0.4', 'less': '1.0.5', }],
["splendido:accounts-templates-semantic-ui", '0.0.26', {'meteor': null, 'service-configuration': '1.0.0', 'accounts-password': '1.0.0', 'accounts-base': '1.0.0', 'splendido:accounts-templates-core': '0.0.26', 'templating': '1.0.4', 'less': '1.0.5', }],
["splendido:accounts-templates-semantic-ui", '0.0.27', {'meteor': null, 'service-configuration': '1.0.0', 'accounts-password': '1.0.0', 'accounts-base': '1.0.0', 'splendido:accounts-templates-core': '0.0.27', 'templating': '1.0.4', 'less': '1.0.5', }],
["splendido:accounts-templates-semantic-ui", '0.0.28-1', {'meteor': null, 'service-configuration': '1.0.0', 'accounts-password': '1.0.0', 'accounts-base': '1.0.0', 'splendido:accounts-templates-core': '0.0.28', 'templating': '1.0.4', 'less': '1.0.5', }],
["splendido:accounts-templates-semantic-ui", '0.0.28', {'meteor': null, 'service-configuration': '1.0.0', 'accounts-password': '1.0.0', 'accounts-base': '1.0.0', 'splendido:accounts-templates-core': '0.0.28', 'templating': '1.0.4', 'less': '1.0.5', }],
["splendido:accounts-templates-semantic-ui", '0.0.29', {'meteor': null, 'service-configuration': '1.0.0', 'accounts-password': '1.0.0', 'accounts-base': '1.0.0', 'splendido:accounts-templates-core': '0.0.28', 'templating': '1.0.4', 'less': '1.0.5', }],
["splendido:accounts-templates-semantic-ui", '0.0.30', {'meteor': null, 'service-configuration': '1.0.0', 'accounts-password': '1.0.0', 'accounts-base': '1.0.0', 'splendido:accounts-templates-core': '0.0.28', 'templating': '1.0.4', 'less': '1.0.5', }],
["splendido:accounts-templates-semantic-ui", '0.9.4', {'meteor': null, 'splendido:accounts-templates-core': '0.9.4', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.5', {'meteor': null, 'splendido:accounts-templates-core': '0.9.5', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.6', {'meteor': null, 'splendido:accounts-templates-core': '0.9.6', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.7', {'meteor': null, 'splendido:accounts-templates-core': '0.9.7', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.8', {'meteor': null, 'splendido:accounts-templates-core': '0.9.8', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.9', {'meteor': null, 'splendido:accounts-templates-core': '0.9.9', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.10', {'meteor': null, 'splendido:accounts-templates-core': '0.9.10', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.11', {'meteor': null, 'splendido:accounts-templates-core': '0.9.11', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.12', {'meteor': null, 'splendido:accounts-templates-core': '0.9.12', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.13', {'meteor': null, 'splendido:accounts-templates-core': '0.9.13', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.14', {'meteor': null, 'splendido:accounts-templates-core': '0.9.14', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.15', {'meteor': null, 'splendido:accounts-templates-core': '0.9.15', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.16-iron-v1.1', {'meteor': null, 'splendido:accounts-templates-core': '0.9.16-iron-v1.1', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.9.16', {'meteor': null, 'splendido:accounts-templates-core': '0.9.16', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.10.0', {'meteor': null, 'splendido:accounts-templates-core': '0.10.0', 'less': '1.0.8', 'templating': '1.0.6', }],
["splendido:accounts-templates-semantic-ui", '0.11.0', {'meteor': null, 'splendido:accounts-templates-core': '0.11.0', 'less': '1.0.8', 'templating': '1.0.6', }],
["u2622:persistent-session", '0.1.0', {'meteor': null, 'amplify': '1.0.0', 'session': '1.0.0', 'underscore': '1.0.0', }],
["amplify", '1.0.0', {'jquery': '1.0.0', 'meteor': '1.0.2', }],
["session", '1.0.4+local', {'meteor': null, 'underscore': null, 'reactive-dict': null, 'ejson': null, 'reload': null, }],
["session", '1.0.0', {'meteor': null, 'underscore': null, 'reactive-dict': null, 'ejson': null, 'reload': null, }],
["u2622:persistent-session", '0.1.1', {'meteor': null, 'amplify': '1.0.0', 'session': '1.0.0', 'underscore': '1.0.0', }],
["u2622:persistent-session", '0.1.2', {'meteor': null, 'amplify': '1.0.0', 'session': '1.0.0', 'underscore': '1.0.0', }],
["u2622:persistent-session", '0.1.3', {'meteor': null, 'jquery': '1.0.0', 'amplify': '1.0.0', 'session': '1.0.0', 'underscore': '1.0.0', }],
["u2622:persistent-session", '0.1.4', {'meteor': null, 'jquery': '1.0.0', 'amplify': '1.0.0', 'session': '1.0.0', 'underscore': '1.0.0', }],
["u2622:persistent-session", '0.2.0', {'meteor': null, 'jquery': '1.0.0', 'amplify': '1.0.0', 'session': '1.0.1', 'underscore': '1.0.0', }],
["u2622:persistent-session", '0.2.1', {'meteor': null, 'jquery': '1.0.0', 'amplify': '1.0.0', 'session': '1.0.1', 'underscore': '1.0.0', }],
["ctl", '1.0.2+local', {'meteor': null, 'underscore': null, 'ddp': null, 'mongo': null, 'ctl-helper': null, 'application-configuration': null, 'follower-livedata': null, }],
["ctl-helper", '1.0.4+local', {'meteor': null, 'logging': null, 'underscore': null, 'ddp': null, 'mongo': null, 'follower-livedata': null, 'application-configuration': null, }],
]);

testWithResolver(test, resolver, function(t) {
   t({ "iron:router": null,
       "matb33:collection-hooks": null,
       "mizzao:timesync" : null,
       "mrt:jquery-ui-sortable": null,
       "mrt:moment": null,
       "skinnygeek1010:parse-form": null,
       "splendido:accounts-templates-semantic-ui": null,
       "u2622:persistent-session": null,
       "ctl": null },
     {}, {_testing: false}); // use real cost function!
});

});*/
