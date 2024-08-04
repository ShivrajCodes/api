
require('esbuild').build({
    entryPoints: ['index.js'], 
    bundle: true,
    platform: 'node', 
    outfile: 'dist/bundle.js',
    target: 'node14', 
    external: ['express', 'axios', 'cors', 'fast-speedtest-api', 'ping'], 
  }).catch(() => process.exit(1));
  