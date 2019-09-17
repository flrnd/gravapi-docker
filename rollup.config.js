import json from 'rollup-plugin-json';

export default {
  input: './src/cli.js',
  output: {
    file: './build/app.js',
    format: 'cjs',
    name: 'gravapi-cli',
  },
  plugins: [
    json({
      exclude: ['node_modules'],
    }),
  ],
};
