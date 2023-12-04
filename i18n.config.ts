export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'ja',
    messages: {
        ja: {
            Menu:{
                about:`私について`,
                skills:`できること`,
                works:`実績`,
                contact:`お問い合わせ`,
            },
            Catch: {
                title1:`人と人とを`,
                title2:`繋ぐ`,
                text:`人から人へ。
より多くの 想いを 気持ちを お届けする。
そんなお手伝いができればと思っております。`
            },
            About:{
                title:`私について`,
                profile:{
                    title:`Profile`,
                    text:`大学にて情報学を専攻しており、グループ署名を用いた匿名認証について研究しています。在学中に一般社団法人にてWebエンジニアとして自社のWebサイトを制作しました。他にも動画を作ったり写真を撮ったりゲームを作ったり、面白そうなことに色々手を出しています。いつか海外でWEB制作のお仕事をするために英語も勉強中です。`
                },
                likes:{
                    title:`Likes`,
                    text:`自然全般が好きです。
〈花〉このサイトのテーマになっているお花はネモフィラです。和名は瑠璃唐草。かわいい。 ※全て自分で撮影・編集した写真です。
〈キャンプ〉焚き火が好きで好きで好きすぎて毎日焚き火の音を聞きながら寝てます笑 自然の中で作業したくて、たまにPCを持って近くのキャンプ上に作業しにいったりします。将来は森の近くに住みたいです。`
                }
            },
            Skills:{
                title:`できること`,
                seemore:`もっと見る`,
                close:`閉じる`,
                item:{
                    html:{
                        title:`HTML/CSS`,
                        period:`3年`,
                        text:`自社のホームページリニューアルや新規サイト制作、このポートフォリオサイトの制作で使用しました。基本的な書き方は理解しています。ただ、保守性や拡張性、再利用性など考えることはたくさんあり、CSS設計は奥が深いなぁと思う今日このごろです。`
                    },
                    wordpress:{
                        title:`Wordpress`,
                        period:`3年`,
                        text:`自社のホームページ(ブログ機能付き)をWordPressのテーマ「Diver」を用いて制作しました。サーバー設置やドメイン取得、GoogleAnalytics連携、プラグインのカスタマイズなども行いました。WordPressでのサイト構築は一通りできます。`
                    },
                    vue:{
                        title:`Vue3 / Nuxt3`,
                        period:`1ヶ月`,
                        text:`このポートフォリオサイトを制作時に初めて触れました。コンポーネント指向の書き方にも少し慣れてきました。これから更に知識を深めていきたいです。`
                    },
                    php:{
                        title:`PHP`,
                        period:`1年`,
                        text:`PHPを使ってWordPressで構築した自社ホームページにてメンバー一覧のページを作成しました。WordPressのプラグインを併用しつつ、データベースから登録されているユーザ情報を取り出し、一覧で表示する機能を追加しました。正直よく分からずに作っていたのでいつかきちんと勉強し直したいです。`,
                    },
                    typescript:{
                        title:`TypeScript / JavaScript`,
                        period:`半年`,
                        text:`TypeScriptはこのポートフォリオサイトを制作時に初めてしっかり触れました。JavaScriptはリアルタイム通信ゲームを自作したときに少し使ったことがあります。`,
                    },
                    python:{
                        title:`Python`,
                        period:`2年`,
                        text:`X(Twitter)のBotをPythonでコーディングして制作しました。Twitter、YouTubeのAPIや、画像処理ライブラリのPillowを使用しました。`,
                    },
                    sql:{
                        title:`SQL / MySQL`,
                        period:`2年`,
                        text:`X(Twitter)のBotでデータを扱う際にMySQLを使用しました。`,
                    },
                    premiere:{
                        title:`PremierePro / AfterEffect`,
                        period:`4年`,
                        text:`子ども向けイベントで使用する動画をいくつか制作しました。最近はYouTubeにあげる切り抜き動画を作っています。`,
                    },
                    illustrator:{
                        title:`Illustrator / Photoshop`,
                        period:`3年`,
                        text:`ホームページのバナー作成や写真のレタッチで使用しています。`,
                    },
                }
            },
            Works:{
                title:`実績`,
                item:{
                    portfolio:{
                        title:`ポートフォリオサイト`,
                        date:`2024年11月`,
                        text:`初めてVue,Nuxtを使って制作したサイトです。

使用言語：Vue3
フレームワーク：Nuxt3
UIライブラリ：Vuetify
ホスティング：CloudflarePages
デザイン：Figma`,
                    },
                    xbot:{
                        title:`X(Twitter)Bot`,
                        date:`2023年10月`,
                        text:`YouTubeのチャンネル登録者数を監視し、登録者数の増減があればTwitterでお知らせするBotです。

使用言語：Python
API：YouTube API v3、Twitter API v2
PaaS：Heroku
データベース管理：MySQL`,
                    },
                    game:{
                        title:`マルチプレイゲーム`,
                        date:`2022年8月`,
                        text:`所属する団体のイベントの中で使用するマルチプレイゲームの制作を行いました。

使用言語：JavaScript
ゲームエンジン：PlayCanvas
リアルタイム通信エンジン：Photon`,
                    },
                }
            },
            Contact:{
                title:`お問い合わせ`,
                required:`必須`,
                name:`氏名`,
                email:`メールアドレス`,
                content:`お問い合わせ内容`,
                send:`送信する`
            },
        },
        en: {
        welcome: 'Welcome'
        },
    }
  }))
  