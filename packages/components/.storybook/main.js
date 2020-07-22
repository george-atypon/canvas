module.exports = {
  stories: [ '../src/**/*.stories.{js,jsx,ts,tsx}' ],
  webpackFinal: async config => {
    config.module.rules.push(
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        // Optional
        // {
        //   loader: require.resolve('react-docgen-typescript-loader'),
        // },
      ],
    }
    );
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  },
};
