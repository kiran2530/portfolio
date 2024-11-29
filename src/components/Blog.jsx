'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, ChevronRight, Search, Tag } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Navigating the MERN Stack Journey as a Fresher',
    excerpt:
      'A detailed guide for beginners exploring the MERN stack, covering essential tools, workflows, and challenges faced by a fresher.',
    date: '2024-11-29',
    readTime: '12 min read',
    tags: ['MERN Stack', 'Web Development', 'Beginner'],
    image: 'https://via.placeholder.com/200x300.png?text=MERN+Stack',
    content: `
      The MERN (MongoDB, Express.js, React, Node.js) stack is a powerful and widely-used technology stack for building modern web applications. In this blog, I share my journey as a fresher in MERN stack development, the resources I used, the challenges I faced, and the strategies that helped me overcome them. <br />
      
      <strong>Why MERN Stack?</strong><br />
      The MERN stack provides a seamless development experience. With JavaScript powering both the client and server sides, it simplifies development and allows for a more cohesive application structure. <br />
      
      <strong>Learning MongoDB Basics</strong><br />
      MongoDB was the first tool I explored. Starting with basic CRUD operations, I built a simple student database project to solidify my understanding. Using tools like Compass and integrating MongoDB with Mongoose in my Express.js applications was a turning point. <br />
      
      <strong>Express.js: The Power of Middleware</strong><br />
      Express.js helped me understand middleware and the MVC architecture. I implemented features like user authentication, routing, and session management in my projects, like an E-Commerce platform for vendors and buyers. <br />
      
      <strong>React: Frontend Magic</strong><br />
      React was both exciting and challenging. I created reusable components, styled them with CSS modules, and managed state using hooks like useState and useEffect. Working on a dynamic navbar for buyers and vendors was a major highlight of my learning journey. <br />
      
      <strong>Node.js: Backend Foundation</strong><br />
      Node.js tied the stack together. From setting up servers to managing APIs, I built scalable solutions like product and profile management for my E-Commerce platform. <br />
      
      <strong>Challenges Faced and Overcome</strong><br />
      As a fresher, understanding the nuances of asynchronous programming and debugging complex issues in the stack were significant challenges. Platforms like MDN, freeCodeCamp, and the developer community were instrumental in helping me succeed. <br />
      
      <strong>Final Thoughts</strong><br />
      Mastering the MERN stack is a rewarding journey. With dedication and consistent practice, beginners can build impressive full-stack applications and enhance their problem-solving skills.
    `
  },
  {
    id: 2,
    title: 'Building an E-Commerce Platform: A Developer’s Journey',
    excerpt:
      'Insights from building an E-Commerce platform tailored for vendors and buyers, focusing on challenges, solutions, and key features.',
    date: '2024-11-29',
    readTime: '10 min read',
    tags: ['E-Commerce', 'Full Stack', 'Project Development'],
    image: 'https://via.placeholder.com/200x300.png?text=E-Commerce',
    content: `
      Creating an E-Commerce platform was one of the most rewarding projects in my development journey. This blog covers everything from the initial idea to the final implementation, highlighting the key challenges faced and solutions adopted. <br />
      
      <strong>Key Features</strong><br />
      - Separate accounts for vendors and buyers.<br />
      - Product listing, cart management, and order tracking.<br />
      - Cloudinary integration for media uploads and optimization. <br />
      
      <strong>Technical Stack</strong><br />
      The project was built using the MERN stack. For media management, I used Cloudinary. For payment integrations, I researched Razorpay and Stripe. <br />
      
      <strong>Challenges</strong><br />
      Handling user authentication and roles was tricky initially. To solve this, I implemented JSON Web Tokens (JWT) and carefully managed middleware to separate buyer and vendor routes. <br />
      
      <strong>Impact</strong><br />
      The project emphasized the importance of user experience and backend scalability. It also improved my skills in Express.js, Mongoose, and integrating third-party APIs.
    `
  },
  {
    id: 3,
    title: 'Mastering SQL: Techniques for Efficient Data Management',
    excerpt:
      'An in-depth look at SQL techniques for efficient data management and performance optimization in modern applications.',
    date: '2024-11-29',
    readTime: '8 min read',
    tags: ['SQL', 'Data Management', 'Database'],
    image: 'https://via.placeholder.com/200x300.png?text=SQL',
    content: `
      SQL is a cornerstone of data management in modern applications. From basic queries to complex joins, this blog dives deep into how I utilized SQL in various projects. <br />
      
      <strong>SQL Basics</strong><br />
      Starting with simple CRUD operations, I moved on to creating relationships between tables for managing item and customer data in an inventory system. <br />
      
      <strong>Performance Optimization</strong><br />
      - Indexing to optimize large datasets.<br />
      - Query optimization techniques. <br />
      
      <strong>Applications</strong><br />
      I applied these skills in my billing management system, enhancing data retrieval times significantly.
    `
  },
  {
    id: 4,
    title: 'React Router: Simplifying Navigation in Web Apps',
    excerpt:
      'Learn how to leverage React Router to create seamless navigation experiences in single-page applications.',
    date: '2024-11-29',
    readTime: '8 min read',
    tags: ['React', 'React Router', 'Web Development'],
    image: 'https://via.placeholder.com/200x300.png?text=React+Router',
    content: `
      React Router is a fundamental library for modern React applications. In this blog, I'll share how I implemented navigation for my E-Commerce platform and learned the nuances of routing. <br />
      
      <strong>Key Concepts</strong><br />
      - Nested and dynamic routes.<br />
      - Managing route-based access control for users (buyers vs vendors). <br />
      
      <strong>Challenges Faced</strong><br />
      Handling browser history and ensuring a smooth user experience for protected routes required careful planning. With the use of \`useNavigate\` and \`useParams\`, I created a robust routing system. <br />
      
      <strong>Final Thoughts</strong><br />
      React Router simplifies navigation, but it requires a structured approach. Mastering it is essential for any modern React developer.
    `
  },
  {
    id: 5,
    title: 'Understanding Virtualization in Cloud Computing',
    excerpt:
      'A beginner-friendly guide to understanding virtualization and its role in enabling scalable cloud solutions.',
    date: '2024-11-29',
    readTime: '6 min read',
    tags: ['Cloud Computing', 'Virtualization', 'Technology'],
    image: 'https://via.placeholder.com/200x300.png?text=Virtualization',
    content: `
      Virtualization is a fundamental concept in cloud computing. In this blog, I explain the basics of virtualization and how it powers modern cloud infrastructures. <br />
      
      <strong>Core Concepts</strong><br />
      - Virtual Machines and Containers.<br />
      - Hypervisors. <br />
      
      <strong>Applications</strong><br />
      From creating isolated environments to scaling applications, virtualization plays a key role in enabling flexible and cost-effective solutions.
    `
  },
  {
    id: 6,
    title: 'My Experience as a National-Level Table Tennis Player',
    excerpt:
      'How playing table tennis at a national level shaped my approach to problem-solving, teamwork, and perseverance.',
    date: '2024-11-29',
    readTime: '5 min read',
    tags: ['Table Tennis', 'Sports', 'Personal Development'],
    image: 'https://via.placeholder.com/200x300.png?text=Table+Tennis',
    content: `
      Sports teach life skills that go beyond the playing field. As a national-level table tennis player, I’ve learned resilience, strategic thinking, and adaptability. These qualities have positively influenced my technical and personal development. <br />
      
      <strong>Skills from Sports Applied to Technology</strong><br />
      - <strong>Focus:</strong> Helps during debugging and solving complex programming challenges.<br />
      - <strong>Teamwork:</strong> Enables seamless collaboration during team projects and hackathons. <br />
      
      <strong>Why Table Tennis?</strong><br />
      Its fast-paced nature builds quick decision-making, essential for both sports and coding.
    `
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
      <div className='p-6 relative'>
        <h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-4'>
          {post.title}
        </h2>
        <button
          onClick={onClose}
          className='absolute top-6 right-3 z-50 text-red-600 hover:text-red-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors bg-gray-300 rounded-full p-1'
        >
          <X size={25} />
        </button>
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
        <p
          className='text-gray-700 dark:text-gray-300 mb-4'
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></p>
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
    <section className='p-5 md:p-10 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900'>
      <div className='container mx-auto'>
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
