module.exports = [
  {
    context: [
      '/v2',
      '/previews'
    ],
    target: "https://cdn.jwplayer.com",
    secure: false,
    changeOrigin: true
  }
];
