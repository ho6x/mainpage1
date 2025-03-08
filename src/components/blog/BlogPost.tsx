import React from 'react';
import { Link } from 'react-router-dom';

export interface BlogPostType {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  imageUrl: string;
  slug: string;
  readTime: number;
  category: string;
}

interface BlogPostProps {
  post: BlogPostType;
  isPreview?: boolean;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, isPreview = true }) => {
  const {
    title,
    excerpt,
    content,
    author,
    date,
    imageUrl,
    slug,
    readTime,
    category
  } = post;

  if (isPreview) {
    return (
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1">
        <Link to={`/blog/${slug}`} className="block">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={imageUrl}
              alt={title}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-primary text-sm font-medium">{category}</span>
              <span className="text-gray-500 text-sm">({readTime}) دقائق للقراءة</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary">
              {title}
            </h2>
            <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
            <div className="flex items-center text-sm text-gray-500 gap-2">
              <span>{author}</span>
              <span>•</span>
              <span>{date}</span>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600">
          <span>بقلم: {author}</span>
          <span>•</span>
          <span>{date}</span>
          <span>•</span>
          <span>({readTime}) دقائق للقراءة</span>
          <span>•</span>
          <span className="text-primary">{category}</span>
        </div>
      </header>
      
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[400px] object-cover rounded-xl mb-8"
      />
      
      <div className="prose prose-lg max-w-none">
        {content}
      </div>
    </article>
  );
};
