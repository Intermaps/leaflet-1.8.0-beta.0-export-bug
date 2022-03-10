import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.js',
  output: {
    format: 'iife',
    file: 'dist/bundle.js',
  },
  plugins: [
    nodeResolve(),
    commonjs(),
  ],
};