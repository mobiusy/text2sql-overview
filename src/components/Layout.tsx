import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Home,
  Brain,
  Clock,
  Building2,
  AlertTriangle,
  CheckCircle,
  Code,
  BookOpen,
  TrendingUp,
  Building,
  FileText
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navigationItems = [
    { path: '/', label: '首页', icon: Home },
    { path: '/principles', label: '技术原理', icon: BookOpen },
    { path: '/evolution', label: '发展历程', icon: TrendingUp },
    { path: '/applications', label: '企业应用', icon: Building },
    { path: '/case-demo', label: '案例演示', icon: Code },
    { path: '/challenges', label: '技术挑战', icon: AlertTriangle },
    { path: '/summary', label: '总结', icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* 侧边栏 */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-xl z-10">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-blue-900 mb-8">
            Text2SQL 技术解析
          </h1>
          
          <nav className="space-y-2">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-500'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
        
        {/* 进度指示器 */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-2">演示进度</h3>
            <div className="flex space-x-1">
              {navigationItems.map((item, index) => {
                const isCompleted = navigationItems.findIndex(nav => nav.path === location.pathname) > index;
                const isCurrent = location.pathname === item.path;
                
                return (
                  <div
                    key={item.path}
                    className={`h-2 flex-1 rounded ${
                      isCompleted
                        ? 'bg-green-500'
                        : isCurrent
                        ? 'bg-blue-500'
                        : 'bg-gray-300'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 主内容区域 */}
      <div className="ml-64">
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="min-h-screen"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default Layout;