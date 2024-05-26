import Markdown from 'markdown-to-jsx';
import styles from '../styles/BlogPost.module.css';

export const metadata = {
  title: "Blog Data",
};

const BlogPost = ({ content, frontMatter }) => {
  return (
    <div className={styles.blogPost}>
      <h1>{frontMatter.title}</h1>
      <p className={styles.meta}>
        {frontMatter.date} by {frontMatter.author}
      </p>
      <div className={styles.content}>
        <Markdown>{content}</Markdown>
      </div>
    </div>
  );
};

export default BlogPost;
