import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const external = [
  /@babel\/runtime/,
  'react',
  'styled-components',
];

const plugins = [
  babel({
    babelHelpers: 'runtime',
    extensions: ['.js', '.ts'],
    plugins: [
      "@babel/transform-runtime",
    ],
    presets: [
      "@babel/env",
      "@babel/typescript",
    ],
  }),
  commonjs(),
  resolve({
    extensions: ['.js', '.ts'],
  }),
];

module.exports = [{
  external,
  input: 'src/index.ts',
  output: [
    { exports: 'named', file: pkg.main, format: 'cjs' },
    { exports: 'named', file: pkg.module, format: 'esm' },
  ],
  plugins,
}, {
  external,
  input: 'src/index.ts',
  output: [
    { exports: 'named', file: pkg.browser['./dist/styled-media.cjs.js'], format: 'cjs' },
    { exports: 'named', file: pkg.browser['./dist/styled-media.esm.js'], format: 'esm' },
  ],
  plugins,
}];
