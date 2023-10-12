/** @type {import('next').NextConfig} */
module.exports = {
  output: "standalone",
  serverRuntimeConfig: {
    // カスタムタイムアウトを設定
    apiTimeout: 30000, // 30秒
  },
};
