# Blog Site
This is a blog site that I created using Next.js that leverages `getStaticProps` for static generation
and Markdown files for content management.

## Setup and Run
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blog-site.git
2. cd blog-site
3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
1. `content/posts`: Directory containing Markdown files for blog posts.
2. `components`: Directory containing reusable components (Layout.js, BlogList.js, BlogPost.js, SearchBar.js).
3. `pages`: Next.js pages (index.js for homepage, [slug].js for individual blog posts).
4. `styles`: Global CSS for styling.

## Key Components
1. `layout.js`: Layout component for consistent page structure.
2. `BlogList.js`: Component to display a list of blog post summaries.
3. `BlogPost.js`: Component to display individual blog post content.
4. `SearchBar.js`: Component to handle search functionality.

## Static Generation
1. `getStaticProps`: Fetches blog posts from Markdown files at build time.
2. `getStaticPaths`: Generates paths for individual blog posts based on filenames.

## Deploy on Vercel
Deploy the project on platforms like Vercel or Netlify. 

On Vercel:
1. Push your code to a GitHub repository.
2. Log in to Vercel and create a new project.
3. Import your GitHub repository.
4. Follow the prompts to deploy your site.

You now have a blog site with search functionality, enabling users to filter blog posts by their search terms.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!