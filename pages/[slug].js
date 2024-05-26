import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import Link from 'next/link'; 
import BlogPost from '../components/BlogPost';
import Layout from '../components/layout';

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('content', 'posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('content', 'posts', `${slug}.md`),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontMatter,
      content,
    },
  };
};

export default function PostPage({ frontMatter, content }) {
  const metadata = {
    title: `${frontMatter.title}`,
    description: frontMatter.summary,
  };

  return (
    <div>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <h1 id="heading">Blog Details</h1>
      <Layout>
        <BlogPost content={content} frontMatter={frontMatter} />
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link href="/" passHref>
            <button style={{
              backgroundColor: 'transparent',
              color: 'white',
              userSelect: 'none',
              padding: '0.75rem 1.5rem',
              border: '1px solid white',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1rem',
            }}>
              Go to Home
            </button>
          </Link>
        </div>
      </Layout>
    </div>
  );
}
