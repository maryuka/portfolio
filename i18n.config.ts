export default defineI18nConfig(() => ({
  legacy: false,
  locale: "ja",
  messages: {
    ja: {
      Menu: {
        about: `私について`,
        skills: `できること`,
        works: `実績`,
        contact: `お問い合わせ`,
      },
      Catch: {
        title1: `人と人とを`,
        title2: `繋ぐ`,
        text: `人から人へ。
より多くの想いを 届ける。
デジタルの力で。`,
      },
      About: {
        title: `私について`,
        profile: {
          title: `Profile`,
          text: `大学院にてデジタル署名を研究しています。大学在学中に一般社団法人にてコーポレートサイトを制作しました。他にも動画を作ったり写真を撮ったりゲームを作ったり、その時一番ワクワクすることを全力で楽しんでいます。`,
        },
        likes: {
          title: `Likes`,
          text: `自然全般が好きです。
〈花〉このサイトのテーマになっているお花はネモフィラです。和名は瑠璃唐草。かわいい。 ※全て自分で撮影・編集した写真です。
〈キャンプ〉焚き火が好きで好きで好きすぎて毎日焚き火の音を聞きながら寝てます笑 自然の中で作業したくて、たまにPCを持って近くのキャンプ上に作業しにいったりします。将来は森の近くに住みたいです。`,
        },
      },
      Skills: {
        title: `できること`,
        seemore: `もっと見る`,
        close: `閉じる`,
        item: {
          html: {
            title: `HTML/CSS(SCSS)`,
            period: `3年`,
            text: `基本的なプログラミングが可能です。一般社団法人でのコーポレートサイトリニューアルや採用サイト制作、このポートフォリオサイトの制作などで使用しました。基本的な書き方は理解しています。`,
          },
          wordpress: {
            title: `Wordpress`,
            period: `3年`,
            text: `基本的な構築方法は一通り理解しています。一般社団法人でのホームページ制作はWordPressのテーマ「Diver」を使用しました。サーバー設置やドメイン取得、GoogleAnalytics連携、プラグインのカスタマイズなども行いました。既存のテーマありきではデザインの限界を感じたので、今後はテーマを作るところからやってみたいです。`,
          },
          vue: {
            title: `Vue3 / Nuxt3`,
            period: `3ヶ月`,
            text: `基本的なプログラミングが可能です。このポートフォリオサイトを制作時に初めて触れました。コンポーネント指向の書き方にも少し慣れてきました。これから更に知識を深めていきたいです。`,
          },
          php: {
            title: `PHP`,
            period: `1年`,
            text: `基本的なプログラミングが可能です。PHPを使ってWordPressで構築したWebサイトのカスタマイズを行いました。`,
          },
          typescript: {
            title: `TypeScript / JavaScript`,
            period: `1.5年`,
            text: `基本的なプログラミングが可能です。このポートフォリオサイトを制作時やワールドクリーンのアプリケーション開発、リアルタイム通信ゲーム制作で使用しました。`,
          },
          react: {
            title: `React / Next.js`,
            period: `0.5年`,
            text: `基本的なプログラミングが可能です。ワールドクリーンのアプリケーション開発で使用しました。`,
          },
          python: {
            title: `Python`,
            period: `1年`,
            text: `基本的なプログラミングが可能です。X(Twitter)のBotをPythonでコーディングして制作しました。X(Twitter)、YouTubeのAPIや、画像処理ライブラリのPillowを使用しました。`,
          },
          c: {
            title: `C言語`,
            period: `5年`,
            text: `基本的なプログラミングが可能です。大学1年生から学習し、卒業研究の実装はC言語で行いました。`,
          },
          mysql: {
            title: `MySQL`,
            period: `1年`,
            text: `基本的な環境構築が可能です。X(Twitter)のBotでデータを扱う際にMySQLを使用しました。`,
          },
          postgresql: {
            title: `PostgreSQL`,
            period: `0.5年`,
            text: `基本的な環境構築が可能です。ワールドクリーンのアプリケーション開発で使用しました。`,
          },
          premiere: {
            title: `PremierePro / AfterEffect`,
            period: `4年`,
            text: `子ども向けイベントで使用するオープニングムービーやドキュメンテーションムービーをいくつか制作しました。最近はYouTubeにあげる切り抜き動画を作っています。`,
          },
          illustrator: {
            title: `Illustrator / Photoshop`,
            period: `3年`,
            text: `ホームページのバナー作成や写真のレタッチで使用しています。`,
          },
        },
      },
      Works: {
        title: `実績`,
        item: {
          worldclean: {
            title: `ホテル客室清掃状況管理アプリケーション`,
            date: `2024年1月`,
            text: `アルバイトとして入社した清掃会社で紙ベースで客室清掃状況を管理していることに課題を感じ、スマートフォンで清掃状況を確認・更新できるWebアプリケーションを制作しました。

-----開発環境-----
フロントエンド
- HTML
- SASS 1.70.0
- TypeScript 4.9.0
    - axios 1.6.7
- React 18.2.0
    - material-ui 5.0.6
    - swr 2.2.4

バックエンド
- Next.js 14.0.0
    - Prisma 5.6.0

インフラ
- PostgreSQL 15
- Github Action
- Vercel
------------------`,
          },
          portfolio: {
            title: `ポートフォリオサイト`,
            date: `2023年11月`,
            text: `このサイトです。初めてVue,Nuxtを使って制作しました。

-----開発環境-----
フロントエンド
- Nuxt3
    - Vue3
    - Vuetify

インフラ
- CloudflarePages
------------------`,
          },
          xbot: {
            title: `X(Twitter)Bot`,
            date: `2022年10月`,
            text: `Pythonを独学で学んでおり実際に開発で使ってみたいという思いから制作を始めました。

YouTubeからチャンネル登録者数を取得し一定数増加するごとにXで通知するBotです。現在約900人にフォローして頂いています。

-----開発環境-----
バックエンド
- Python 3.9
- tweepy 4.14 (Twitter API v2)
- YouTube Data API v3

インフラ
- Heroku
- MySQL 8.0
------------------`,
          },
          iyah: {
            title: `一般社団法人のコーポレートサイトリニューアル、採用サイト制作`,
            date: `2021年4月`,
            text: `コーポレートサイトリニューアルでは既存のホームページ(HTML&CSS)とブログ(さくらのブログ)を統合し、記事データなどの情報をすべてWordPress に移行しました。
採用サイト制作では設計、実装を4人ほどのチームで行いました。コンテンツ制作はチーム外に依頼することも多く、計画的に依頼を行うことの重要性を感じました。

-----開発環境-----
フロントエンド
- WordPress
  - テーマ：Diver
  - プラグイン：Ultimate Member
  - PHP

インフラ
- さくらのインターネット
------------------`,
          },
          game: {
            title: `マルチプレイゲーム`,
            date: `2022年8月`,
            text: `コロナ禍に開催された子ども向けのオンライン謎解きイベントで使用するリアルタイム通信協力ゲームを制作しました。
参加者の子どもたちが各々のデバイスでスペースキーを連打し、連打数の合計がある値に達すると次の謎で使用するヒントが現れます。

PlayCanvasというブラウザ版Unityのようなゲームエンジンを使用して制作しました。初めてのゲーム制作でしたが、子どもたちに良い体験をしてほしいという思いがさらなるスキルアップのモチベーションとなりました。

-----開発環境-----
ゲームエンジン
- PlayCanvas
- JavaScript

ネットワークエンジン
- Photon
------------------`,
          },
        },
      },
      Contact: {
        title: `お問い合わせ`,
        required: `必須`,
        name: `氏名`,
        email: `メールアドレス`,
        content: `お問い合わせ内容`,
        send: `送信する`,
      },
    },
    en: {
      welcome: "Welcome",
    },
  },
}));
