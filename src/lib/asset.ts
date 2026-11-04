/** public/img 配下の画像パス。GitHub Pages のサブパス (/portfolio/) でも動くよう BASE_URL を付ける */
export const img = (name: string) => `${import.meta.env.BASE_URL}img/${name}`;
