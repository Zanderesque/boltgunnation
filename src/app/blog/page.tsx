import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Bolt Gun Nation',
  description: 'Latest posts and updates from Bolt Gun Nation',
};

const posts = [
  {
    title: 'Training Techniques for Precision Rifle',
    slug: 'training-techniques',
    date: 'July 23, 2025',
    excerpt: 'Consistent, focused practice is the key to improving your precision rifle skills. This guide outlines effective training methods for shooters of all levels.',
  },
  {
    title: 'Precision Rifle Equipment Recommendations',
    slug: 'equipment-recommendations',
    date: 'July 23, 2025',
    excerpt: 'Getting started in precision rifle shooting can be overwhelming with the vast array of equipment options available. This guide provides recommendations for both beginners and experienced shooters.',
  },
  {
    title: 'Safety, Range Commands & Etiquette',
    slug: 'safety-commands-etiquette',
    date: 'June 1, 2025',
    excerpt: 'Essential safety guidelines, range commands, and etiquette for precision rifle competitions. All participants and spectators are safety officers.',
  },
  {
    title: 'PRS 1st-timer',
    slug: 'prs-1st-timer',
    date: 'July 21, 2025',
    excerpt: 'Add your post description here...',
  },
];

const pages = [
  {
    title: '2023 Bolt Gun Race',
    slug: '2023-bolt-gun-race',
    description: 'Complete details about our annual precision rifle competition series including rules, scoring, prizes, and registration information.',
  },
  {
    title: 'About Bolt Gun Nation',
    slug: 'about',
    description: 'Learn about our mission, community, and what we offer to precision rifle shooters in New Mexico.',
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-wp-base">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-wp-contrast mb-4">
              Content & Resources
            </h1>
            <p className="text-xl text-wp-contrast/70">
              Latest posts, competition information, and community resources
            </p>
          </header>
          
          {/* Main Pages */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-wp-contrast mb-8">Competition & Information</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {pages.map((page) => (
                <article key={page.slug} className="bg-wp-accent-1/10 p-6 rounded-lg">
                  <header className="mb-4">
                    <h3 className="text-xl font-bold text-wp-contrast mb-2">
                      <Link 
                        href={`/${page.slug}`}
                        className="hover:text-wp-accent-1 transition-colors"
                      >
                        {page.title}
                      </Link>
                    </h3>
                  </header>
                  
                  <p className="text-wp-contrast/80 mb-4 leading-relaxed">
                    {page.description}
                  </p>
                  
                  <Link 
                    href={`/${page.slug}`}
                    className="text-wp-accent-1 hover:text-wp-accent-2 transition-colors font-medium"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </section>

          {/* Blog Posts */}
          <section>
            <h2 className="text-2xl font-bold text-wp-contrast mb-8">Latest Posts</h2>
            <div className="space-y-12">
              {posts.map((post) => (
                <article key={post.slug} className="border-b border-wp-contrast/10 pb-12">
                  <header className="mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-wp-contrast mb-2">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-wp-accent-1 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <time className="text-wp-contrast/70 text-sm">
                      {post.date}
                    </time>
                  </header>
                  
                  <p className="text-wp-contrast/80 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-wp-accent-1 hover:text-wp-accent-2 transition-colors font-medium"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}