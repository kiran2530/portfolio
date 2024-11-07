'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, ChevronRight, Search, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Building an E-Commerce Platform: Best Practices and Key Challenges',
    excerpt:
      'A breakdown of the essential considerations when building a scalable and efficient e-commerce platform from scratch.',
    date: '2024-10-20',
    readTime: '10 min read',
    tags: ['E-Commerce', 'Full Stack', 'Web Development'],
    image: 'https://via.placeholder.com/200x300.png?text=E-Commerce',
    content:
      'Explore the architectural decisions, technology stack choices, and integration techniques involved in developing an e-commerce platform. Gain insights on how to handle common challenges like inventory management, user experience, and payment integration.'
  },
  {
    id: 2,
    title: 'Mastering SQL: Effective Techniques for Data Management',
    excerpt:
      'An in-depth look at SQL techniques for efficient data management and performance optimization in modern applications.',
    date: '2024-09-25',
    readTime: '8 min read',
    tags: ['SQL', 'Data Management', 'Database'],
    image: 'https://via.placeholder.com/200x300.png?text=SQL',
    content:
      'This article dives into optimizing SQL queries, handling complex joins, and creating indexes for large databases. Perfect for developers looking to improve query efficiency and understand data modeling in SQL.'
  },
  {
    id: 3,
    title: 'React Router: Simplifying Navigation in Modern Web Apps',
    excerpt:
      'Learn how to leverage React Router to enhance the user experience through smooth and intuitive navigation in single-page applications.',
    date: '2024-08-18',
    readTime: '7 min read',
    tags: ['React', 'React Router', 'Web Development'],
    image: 'https://via.placeholder.com/200x300.png?text=React+Router',
    content:
      'In this post, we cover the fundamentals of React Router, including nested routing, dynamic routing, and common pitfalls. Whether you’re building your first SPA or enhancing an existing one, this guide provides the essential knowledge to get started with React Router.'
  },
  {
    id: 4,
    title: 'Cloudinary Integration: Managing Media in Your Web App',
    excerpt:
      'A guide to using Cloudinary for efficient media management and delivery in web applications.',
    date: '2024-07-15',
    readTime: '6 min read',
    tags: ['Cloudinary', 'Media Management', 'Web Development'],
    image:
      'https://via.placeholder.com/200x300.png?text=Cloudinary',
    content:
      'Explore how to integrate Cloudinary for managing images and videos in your web application. From uploading and transforming media to optimizing performance, this article covers everything you need to get started with Cloudinary.'
  },
  {
    id: 5,
    title: 'Effective Java Practices for Scalable Applications',
    excerpt:
      'Discover key Java techniques for building scalable and maintainable applications, from architecture to code optimization.',
    date: '2024-06-30',
    readTime: '9 min read',
    tags: ['Java', 'Scalability', 'Backend Development'],
    image: 'https://via.placeholder.com/200x300.png?text=Java',
    content:
      'This article discusses best practices in Java development, such as optimizing memory management, leveraging multithreading, and choosing the right frameworks. Ideal for developers looking to enhance their Java applications’ scalability and performance.'
  },
  {
    id: 6,
    title: 'Virtualization in Cloud Computing: An Introduction',
    excerpt:
      'Understand the fundamentals of virtualization and its role in enabling scalable, flexible cloud solutions.',
    date: '2024-05-20',
    readTime: '6 min read',
    tags: ['Cloud Computing', 'Virtualization', 'Technology'],
    image:
      'https://via.placeholder.com/200x300.png?text=Virtualization',
    content:
      'A primer on virtualization concepts in cloud computing, covering hypervisors, virtual machines, and containers. This article is designed for developers and IT enthusiasts new to virtualization, looking to understand its impact on cloud infrastructure.'
  }
]

const BlogPost = ({ post, setSelectedPost }) => (
  <motion.div
    className='bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden'
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <img
      src={post.image}
      alt={post.title}
      className='w-full h-48 object-cover'
    />
    <div className='p-6'>
      <div className='flex justify-between items-center mb-2'>
        <div className='flex items-center text-gray-600 dark:text-gray-400'>
          <Calendar className='w-4 h-4 mr-2' />
          <span>{post.date}</span>
        </div>
        <div className='flex items-center text-gray-600 dark:text-gray-400'>
          <Clock className='w-4 h-4 mr-2' />
          <span>{post.readTime}</span>
        </div>
      </div>
      <h3 className='text-xl font-bold text-gray-800 dark:text-white mb-2'>
        {post.title}
      </h3>
      <p className='text-gray-600 dark:text-gray-300 mb-4'>{post.excerpt}</p>
      <div className='flex flex-wrap gap-2 mb-4'>
        {post.tags.map((tag, index) => (
          <span
            key={index}
            className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'
          >
            {tag}
          </span>
        ))}
      </div>
      <motion.button
        className='text-blue-600 dark:text-blue-400 font-medium flex items-center'
        onClick={() => setSelectedPost(post)}
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        Read More <ChevronRight className='w-4 h-4 ml-1' />
      </motion.button>
    </div>
  </motion.div>
)

const BlogPostModal = ({ post, onClose }) => (
  <motion.div
    className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className='bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'
      initial={{ scale: 0.9, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 50 }}
    >
      <div className='p-6'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-4'>
          {post.title}
        </h2>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center text-gray-600 dark:text-gray-400'>
            <Calendar className='w-4 h-4 mr-2' />
            <span>{post.date}</span>
          </div>
          <div className='flex items-center text-gray-600 dark:text-gray-400'>
            <Clock className='w-4 h-4 mr-2' />
            <span>{post.readTime}</span>
          </div>
        </div>
        <img
          src={post.image}
          alt={post.title}
          className='w-full h-64 object-cover rounded-lg mb-4'
        />
        <p className='text-gray-700 dark:text-gray-300 mb-4'>{post.content}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300'
            >
              {tag}
            </span>
          ))}
        </div>
        <motion.button
          className='bg-blue-600 text-white px-4 py-2 rounded-lg'
          onClick={onClose}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Close
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
)

export default function Blog () {
  const [selectedPost, setSelectedPost] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(
    post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  )

  return (
    <section className='p-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900'>
      <div className='container mx-auto px-4'>
        <motion.h2
          className='text-gray-500 text-3xl mb-5 text-center font-bold'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Blog
        </motion.h2>
        <div className='max-w-xl mx-auto mb-8'>
          <div className='relative'>
            <input
              type='text'
              placeholder='Search posts...'
              className='w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <Search className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredPosts.map(post => (
            <BlogPost
              key={post.id}
              post={post}
              setSelectedPost={setSelectedPost}
            />
          ))}
        </div>
        <AnimatePresence>
          {selectedPost && (
            <BlogPostModal
              post={selectedPost}
              onClose={() => setSelectedPost(null)}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
