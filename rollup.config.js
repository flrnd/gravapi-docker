import json from 'rollup-plugin-json';

export default {
  input: './src/server.js',
  output: {
    file: './build/start.js',
    format: 'cjs',
    name: 'start',
  },
  plugins: [
    json({
      exclude: ['node_modules'],
    }),
  ],
};
