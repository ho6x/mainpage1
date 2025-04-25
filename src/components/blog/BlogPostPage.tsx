import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../../data/blogPosts';
import { BlogPost } from './BlogPost';

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((post: any) => post.slug === slug);

  if (!post) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <article className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center text-sm text-gray-500 gap-2">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>({post.readTime}) دقائق للقراءة</span>
            <span>•</span>
            <span className="text-primary">{post.category}</span>
          </div>
        </header>
        
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">مقالات ذات صلة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS
              .filter((relatedPost: any) => relatedPost.id !== post.id)
              .slice(0, 3)
              .map((relatedPost: any) => (
                <BlogPost key={relatedPost.id} {...relatedPost} />
              ))}
          </div>
        </div>
      </article>
    </div>
  );
};
