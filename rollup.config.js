/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
  input: {
    menu: 'dist/mahjong-menu.js',
    calc: 'dist/mahjong-calc.js',
    today: 'dist/mahjong-today.js',
    stats: 'dist/mahjong-stats.js',
    individual: 'dist/mahjong-individual.js',
    title: 'dist/mahjong-title.js',
    rule: 'dist/mahjong-rule.js',
  },
  output: {
    dir: './public',
    entryFileNames: 'mahjong-[name].js',
    format: 'esm',
  },
  onwarn(warning) {
    if (warning.code !== 'THIS_IS_UNDEFINED') {
      console.error(`(!) ${warning.message}`);
    }
  },
  plugins: [
    replace({'Reflect.decorate': 'undefined', preventAssignment: true}),
    resolve(),
    /**
     * This minification setup serves the static site generation.
     * For bundling and minification, check the README.md file.
     */
    terser({
      ecma: 2021,
      module: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
    }),
  ],
};
