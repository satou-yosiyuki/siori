# ベースイメージを指定します。Node.js 14を使用します。
FROM node:14

# アプリケーションのディレクトリを作成します。
WORKDIR /usr/src/app

# プロジェクトのファイルをDockerイメージにコピーします。
COPY package*.json ./
COPY next.config.js ./
COPY public ./public
COPY src ./src

# 依存関係をインストールします。
RUN npm install

# アプリケーションをビルドします。
RUN npm run build

# アプリケーションを実行します。ポート3000でリッスンします。
CMD ["npm", "start"]
