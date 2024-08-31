import Link from "next/link";

import { getAllCategory } from "@/libs/microcms";

import styles from "./index.module.scss";

const CategoryCard = async () => {
  const categories = await getAllCategory();
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>カテゴリー</h2>
      <ul className={styles.categories}>
        {categories.map((category) => (
          <li key={category.id} className={styles.category}>
            <Link
              href={`/blog/category/${category.id}`}
              className={styles.link}
            >
              <span></span>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CategoryCard;
