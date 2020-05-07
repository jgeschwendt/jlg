import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import pkg from './package.json';

const external = [
  /@babel\/runtime/,
  '@jlg/styled-media',
  'react',
  'react-dom',
  'styled-components',
];

const plugins = [
  babel({
    babelHelpers: 'runtime',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [
      "@babel/transform-runtime",
      "styled-components",
    ],
    presets: [
      "@babel/env",
      "@babel/react",
      "@babel/typescript",
    ],
  }),
  commonjs(),
  resolve({
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  }),
];

export default [{
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
    { exports: 'named', file: pkg.browser['./dist/styled-components.cjs.js'], format: 'cjs' },
    { exports: 'named', file: pkg.browser['./dist/styled-components.esm.js'], format: 'esm' },
  ],
  plugins,
}];
