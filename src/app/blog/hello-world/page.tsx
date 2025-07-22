import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hello world! | Bolt Gun Nation',
  description: '<!-- wp:paragraph -->\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>\n<!-- /wp:paragraph -->...',
  openGraph: {
    title: 'Hello world!',
    description: '<!-- wp:paragraph -->\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>\n<!-- /wp:paragraph -->...',
    type: 'article',
    publishedTime: '2023-03-07 18:16:31',
  },
};

export default function helloworldPost() {
  return (
    <div className="min-h-screen bg-wp-base">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-wp-contrast mb-4">
              Hello world!
            </h1>
            <div className="flex items-center text-wp-contrast/70 mb-8">
              <time dateTime="2023-03-07 18:16:31" className="text-sm">
                March 7, 2023
              </time>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none text-wp-contrast">
            <p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>
          </div>
          
          <footer className="mt-16 pt-8 border-t border-wp-contrast/10">
            <div className="flex items-center justify-between">
              <a 
                href="/blog" 
                className="text-wp-accent-1 hover:text-wp-accent-2 transition-colors font-medium"
              >
                ← Back to Blog
              </a>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
}