import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PRS 1st-timer | Bolt Gun Nation',
  description: 'Add your post description here...',
  openGraph: {
    title: 'PRS 1st-timer',
    description: 'Add your post description here...',
    type: 'article',
    publishedTime: '2025-07-21T23:40:50.693Z',
  },
};

export default function prs1sttimerPost() {
  return (
    <div className="min-h-screen bg-wp-base">
      <div className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-wp-contrast mb-4">
              PRS 1st-timer
            </h1>
            <div className="flex items-center text-wp-contrast/70 mb-8">
              <time dateTime="2025-07-21T23:40:50.693Z" className="text-sm">
                July 21, 2025
              </time>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none text-wp-contrast">
            {/* 
              PASTE YOUR WORDPRESS CONTENT HERE
              
              Replace this comment with your actual blog post content.
              You can use regular HTML tags like:
              
              <p>Your paragraph text here...</p>
              <h2>Subheading</h2>
              <ul>
                <li>List item 1</li>
                <li>List item 2</li>
              </ul>
              <blockquote>
                <p>Quote text here</p>
              </blockquote>
              
              For images, use:
              <img src="/media/your-image.jpg" alt="Description" className="w-full rounded-lg" />
            */}
            
            <p>Add your blog post content here by copying and pasting from your WordPress post.</p>
            <p>You can edit this file directly and add any HTML content you need.</p>
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