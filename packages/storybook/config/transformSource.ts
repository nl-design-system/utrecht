import prettierBabel from 'prettier/parser-babel';
import prettier from 'prettier/standalone';
import * as ReactDOMServer from 'react-dom/server';

export const transformSource = (source: string, context: any) => {
  if (context.originalStoryFn) {
    return prettier
      .format(
        ReactDOMServer.renderToStaticMarkup(
          context.originalStoryFn(context.parameters.__isArgsStory ? context.parameters.args : {}, context),
        ),
        {
          parser: 'babel',
          plugins: [prettierBabel],
        },
      )
      .replace(/;\s*$/, '');
  }
  return source;
};
