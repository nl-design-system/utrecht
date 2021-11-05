import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/css.js',
  output: {
    dir: 'dist/',
    format: 'es',
  },
  plugins: [
    nodeResolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      presets: ['@babel/preset-react'],
    }),
    postcss(),
  ],
  external: ['react'],
};
