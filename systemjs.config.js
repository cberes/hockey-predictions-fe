/** System configuration for Angular 2 */
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app',
    '@angular':                   'node_modules/@angular',
    '@angular/router':            'node_modules/@angular/router',
    '@angular/forms':             'node_modules/@angular/forms',
    'rxjs':                       'node_modules/rxjs',
    'ts':                         'node_modules/plugin-typescript/lib/plugin.js',
    'typescript':                 'node_modules/typescript/lib/typescript.js',
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'main.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
  };
  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'upgrade',
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages['@angular/'+pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }
  // Bundled (~40 requests):
  function packUmd(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }
  // Most environments should use UMD; some (Karma) need the individual index files
  var setPackageConfig = System.packageWithIndex ? packIndex : packUmd;
  // Add package entries for angular packages
  ngPackageNames.forEach(setPackageConfig);

  // No umd for router yet
  packages['@angular/router'] = { main: 'index.js', defaultExtension: 'js' };

  // Forms not on rc yet
  packages['@angular/forms'] = { main: 'index.js', defaultExtension: 'js' };

  var config = {
    map: map,
    packages: packages
  };
  System.config(config);
})(this);
