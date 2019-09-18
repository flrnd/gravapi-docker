import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import json from 'rollup-plugin-json';

export default {
  input: './src/server.js',
  output: {
    file: './build/app.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    commonjs(),
    uglify(),
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
