module.exports = {
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        pageTitle: 'Edv Sample Server',
        // logoImgPath: './logo.png',
        publicPath: '../../docs',
        filename: 'index.html',
        expand: true,
      },
    ],
  ],
};
