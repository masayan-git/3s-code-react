import MoreButton from "@/components/button/moreButton";
import ReturnButton from "@/components/button/returnButton";
import CategoryLabel from "@/components/label/categoryLabel";
import BlogLayout from "@/layouts/blog";

import styles from "./index.module.scss";

const BlogShow = () => {
  return (
    <BlogLayout page="ブログ" description="ブログ一覧です。">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.categories}>
            <CategoryLabel category="Web制作" />
          </div>
          <h1 className={styles.title}>
            【たった10分】WordPressブログの始め方｜初心者でも簡単！
          </h1>
          <div className={styles.date}>2021.01.01</div>
          <div className={styles.eyeCatch}>
            <img
              src="https://via.placeholder.com/300"
              width={300}
              height={300}
              alt="画像の説明"
            />
          </div>
          <div className={styles.content}>
            <p>
              【2022年4月28日更新】W<strong>WordPress導入後に必要な</strong>
              つの設定の解説を追加しました。margin-bottom:30px
            </p>
            <p>
              【2022年4月28日更新】WordPress導入後に必要な4つの設定の解説を追加しました。margin-bottom:30px
            </p>
            <h2>1. WordPressのインストール</h2>
            <p>
              まずはWordPressをインストールします。WordPressは無料で利用できるCMS（コンテンツマネジメントシステム）です。WordPressをインストールすることで、ブログを簡単に作成・運営することができます。
            </p>
            <p>
              WordPressのインストール方法はいくつかありますが、ここでは「ロリポップ！」というレンタルサーバーを利用してWordPressをインストールする方法を解説します。
            </p>
            <h3>h3 1-1. ロリポップ！にログイン</h3>
            <p>
              まずは「ロリポップ！」にログインします。ロリポップ！にログインすると、サーバーの管理画面が表示されます。
            </p>
            <p>
              ロリポップ！にログインすると、サーバーの管理画面が表示されます。margin-bottom:30px
            </p>
            <h4>h4 1-1-1. ロリポップ！にログイン</h4>
            <p>
              まずは「ロリポップ！」にログインします。ロリポップ！にログインすると、サーバーの管理画面が表示されます。
            </p>
            <h5>h5 1-1-1-1. ロリポップ！にログイン</h5>
            <p>
              まずは「ロリポップ！」にログインします。ロリポップ！にログインすると、サーバーの管理画面が表示されます。
            </p>
            <h6>h6 1-1-1-1-1. ロリポップ！にログイン</h6>
            <p>
              まずは「ロリポップ！」にログインします。ロリポップ！にログインすると、サーバーの管理画面が表示されます。
            </p>
            <ol>
              <li>サイトアドレスの確認</li>
              <li>
                サイトアドレス
                <ol>
                  <li>アドレス</li>
                </ol>
              </li>
              <li>サイトアドレスの確認</li>
              <li>サイトアドレスの確認</li>
            </ol>
            <ul>
              <li>サイトアドレスの確認</li>
              <li>サイトアドレスの確認</li>
              <li>サイトアドレスの確認</li>
            </ul>
          </div>
        </div>
        <div className={styles.buttonArea}>
          <ReturnButton href="/" text="前の記事" />
          <MoreButton href="/" text="次の記事" />
        </div>
      </div>
    </BlogLayout>
  );
};

export default BlogShow;
