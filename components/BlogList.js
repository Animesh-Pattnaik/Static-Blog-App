import Link from 'next/link';
import styles from '../styles/BlogList.module.css';

export const metadata = {
  title: "Home : Blog App",
};

const BlogList = ({ posts }) => {
  return (
    <div className={styles.blogList}>
      {posts.map((post) => (
        <div key={post.slug} className={styles.blogItem}>
          <h2>
            <Link href={`/${post.slug}`}>
              {post.title}
            </Link>
          </h2>
          <p>{post.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
