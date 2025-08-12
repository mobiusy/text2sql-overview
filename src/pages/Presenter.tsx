import React from 'react';
import { motion } from 'framer-motion';

const Presenter: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold text-blue-900 mb-6">演讲者控制面板</h1>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <p className="text-gray-600">演讲者控制面板内容将在这里展示...</p>
      </div>
    </motion.div>
  );
};

export default Presenter;