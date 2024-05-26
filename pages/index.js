import fs from "fs";
import path from "path";
import { useState } from "react";
import matter from "gray-matter";
import Head from "next/head";
import BlogList from "../components/BlogList";
import Layout from "../components/layout";
import SearchBar from "../components/SearchBar";

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("content", "posts"));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("content", "posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug: filename.replace(".md", ""),
      ...frontMatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
};

export const metadata = {
  title: "Home : Blog App",
  description:
    "Welcome to my blog. Here you can find various posts on different topics.",
};

export default function Home({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleSearch = (searchTerm) => {
    const filtered = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <h1 id="heading">Blog App</h1>
      <Layout>
        <Head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
        </Head>
        <SearchBar onSearch={handleSearch} />
        <BlogList posts={filteredPosts} />
      </Layout>
    </div>
  );
}
