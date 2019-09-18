import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from 'rollup-plugin-json';

export default {
  input: './src/server.js',
  output: {
    file: './build/app.js',
    format: 'cjs',
  },
  plugins: [resolve({ preferBuiltins: true }), commonjs(), terser(), json()],
};
