import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../data/blogPosts';
import { BlogPost as BlogPostCard } from '../../components/blog/BlogPost';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(post => post.slug === slug);

  if (!post) {
    return <Navigate to="/404" />;
  }

  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-8">
        <div className="absolute inset-0">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center text-sm gap-4">
              <span>{post.author}</span>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>({post.readTime}) دقائق للقراءة</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article className="bg-white rounded-lg shadow-lg p-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Author Info */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">عن الكاتب</h3>
              <div className="flex items-center">
                <div className="flex-1">
                  <h4 className="font-medium">{post.author}</h4>
                  <p className="text-gray-600 text-sm">كاتب متخصص في المجال العقاري</p>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">التصنيفات</h3>
              <div className="space-y-2">
                {Array.from(new Set(BLOG_POSTS.map(p => p.category))).map(category => (
                  <Link
                    key={category}
                    to={`/blog?category=${category}`}
                    className="block text-primary hover:text-primary-dark"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">مقالات ذات صلة</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map(relatedPost => (
                <BlogPostCard key={relatedPost.id} {...relatedPost} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
