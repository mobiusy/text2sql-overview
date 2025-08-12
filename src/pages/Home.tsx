import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  SkipForward,
  SkipBack,
  Database,
  MessageSquare,
  Zap,
  TrendingUp
} from 'lucide-react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const overviewCards = [
    {
      icon: Database,
      title: '数据访问民主化',
      description: '让非技术人员也能通过自然语言与数据库交互，打破技术壁垒',
      color: 'bg-blue-500'
    },
    {
      icon: MessageSquare,
      title: '自然语言接口',
      description: '将复杂的SQL查询转化为简单的自然语言问题',
      color: 'bg-green-500'
    },
    {
      icon: Zap,
      title: '智能SQL生成',
      description: '基于大语言模型的先进技术，自动生成高质量SQL语句',
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: '企业级应用',
      description: '广泛应用于商业智能、数据分析和决策支持系统',
      color: 'bg-orange-500'
    }
  ];

  const slides = [
    { title: '首页', path: '/' },
    { title: '技术原理', path: '/principles' },
    { title: '发展历程', path: '/evolution' },
    { title: '企业应用', path: '/applications' },
    { title: '技术挑战', path: '/challenges' },
    { title: '总结', path: '/summary' }
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(prev => Math.max(0, prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide(prev => Math.min(slides.length - 1, prev + 1));
  };

  return (
    <div className="min-h-screen p-6">
      {/* 主标题区域 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-bold text-blue-900 mb-4">
          Text2SQL 技术解析
        </h1>
        <p className="text-xl text-gray-600 mb-2">
          从原理到企业级应用的全面指南
        </p>
        <p className="text-lg text-gray-500">
          演示时长：20-30分钟
        </p>
      </motion.div>

      {/* 技术概览卡片 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
      >
        {overviewCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500"
            >
              <div className={`inline-flex p-3 rounded-lg ${card.color} text-white mb-4`}>
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {card.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 演示控制面板 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">演示控制面板</h2>
        
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevSlide}
              disabled={currentSlide === 0}
              className="p-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              <SkipBack size={20} />
            </button>
            
            <span className="px-4 py-2 bg-gray-100 rounded-lg font-medium">
              {currentSlide + 1} / {slides.length}
            </span>
            
            <button
              onClick={handleNextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition-colors"
            >
              <SkipForward size={20} />
            </button>
          </div>
        </div>
        
        {/* 幻灯片导航 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {slides.map((slide, index) => (
            <Link
              key={index}
              to={slide.path}
              onClick={() => setCurrentSlide(index)}
              className={`p-3 rounded-lg border-2 transition-all text-center ${
                currentSlide === index
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-600 hover:text-gray-900'
              }`}
            >
              <div className="text-sm font-medium">{slide.title}</div>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* 快速导航 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">快速导航</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            to="/principles"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 mb-2">
              技术原理
            </h3>
            <p className="text-sm text-gray-600">
              深入了解Text2SQL的核心技术架构和实现机制
            </p>
          </Link>
          
          <Link
            to="/evolution"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 mb-2">
              发展历程
            </h3>
            <p className="text-sm text-gray-600">
              从规则系统到大语言模型的技术演进历程
            </p>
          </Link>
          
          <Link
            to="/applications"
            className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all group"
          >
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-700 mb-2">
              企业应用
            </h3>
            <p className="text-sm text-gray-600">
              探索Text2SQL在企业级场景中的实际应用案例
            </p>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;