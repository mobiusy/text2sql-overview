import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Brain,
  Database,
  Shield,
  Zap,
  Target,
  CheckCircle,
  XCircle,
  Lightbulb,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';

const Challenges: React.FC = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(0);

  const technicalChallenges = [
    {
      id: 'ambiguity',
      title: '语义歧义处理',
      description: '自然语言存在多义性，同一句话可能有多种理解',
      icon: Brain,
      severity: 'high',
      color: 'bg-red-500',
      examples: [
        '"查询销售最好的产品" - 可能指销量、销售额或利润',
        '"上个月的数据" - 可能指上个自然月或过去30天',
        '"客户信息" - 可能包含不同范围的字段'
      ],
      solutions: [
        '上下文理解增强',
        '多轮对话澄清',
        '领域知识库构建',
        '用户意图识别'
      ],
      progress: 75
    },
    {
      id: 'schema',
      title: '复杂Schema理解',
      description: '大型企业数据库结构复杂，表关系错综复杂',
      icon: Database,
      severity: 'high',
      color: 'bg-orange-500',
      examples: [
        '数百张表的大型数据库',
        '复杂的多表关联关系',
        '动态变化的数据库结构'
      ],
      solutions: [
        'Schema图谱构建',
        '智能表关系推理',
        '增量学习机制',
        '元数据管理'
      ],
      progress: 65
    },
    {
      id: 'performance',
      title: '查询性能优化',
      description: '生成的SQL查询可能存在性能问题',
      icon: Zap,
      severity: 'medium',
      color: 'bg-yellow-500',
      examples: [
        '缺少必要的索引使用',
        '不合理的JOIN顺序',
        '未优化的子查询'
      ],
      solutions: [
        'SQL优化规则引擎',
        '执行计划分析',
        '索引建议系统',
        '查询重写机制'
      ],
      progress: 70
    },
    {
      id: 'security',
      title: '数据安全控制',
      description: '确保用户只能访问授权的数据',
      icon: Shield,
      severity: 'high',
      color: 'bg-purple-500',
      examples: [
        'SQL注入攻击防护',
        '行级数据权限控制',
        '敏感数据脱敏'
      ],
      solutions: [
        '参数化查询生成',
        '细粒度权限控制',
        '数据访问审计',
        '敏感信息检测'
      ],
      progress: 80
    },
    {
      id: 'hallucination',
      title: '模型幻觉问题',
      description: '大语言模型可能生成不存在的表名或字段',
      icon: AlertTriangle,
      severity: 'high',
      color: 'bg-red-600',
      examples: [
        '生成不存在的表名',
        '使用错误的字段名',
        '创造虚假的数据关系'
      ],
      solutions: [
        'Schema验证机制',
        '实时错误检测',
        '置信度评估',
        '人工审核流程'
      ],
      progress: 60
    }
  ];

  const researchDirections = [
    {
      area: '多模态理解',
      description: '结合文本、图表、表格等多种数据形式',
      potential: '高',
      timeline: '1-2年',
      applications: ['可视化查询', '图表生成', '报表理解']
    },
    {
      area: '联邦学习',
      description: '在保护数据隐私的前提下进行模型训练',
      potential: '中',
      timeline: '2-3年',
      applications: ['跨企业协作', '隐私保护', '分布式训练']
    },
    {
      area: '自适应学习',
      description: '根据用户反馈持续优化模型性能',
      potential: '高',
      timeline: '6个月-1年',
      applications: ['个性化查询', '领域适应', '增量学习']
    },
    {
      area: '可解释AI',
      description: '提供SQL生成过程的可解释性',
      potential: '中',
      timeline: '1-2年',
      applications: ['决策透明', '错误诊断', '用户信任']
    }
  ];

  const industryTrends = [
    {
      trend: '模型小型化',
      description: '开发更轻量级的Text2SQL模型',
      impact: '降低部署成本，提升响应速度',
      adoption: 85
    },
    {
      trend: '领域专用化',
      description: '针对特定行业优化的专用模型',
      impact: '提升特定领域的准确率',
      adoption: 70
    },
    {
      trend: '实时学习',
      description: '支持在线学习和模型更新',
      impact: '快速适应业务变化',
      adoption: 60
    },
    {
      trend: '边缘计算',
      description: '在边缘设备上部署Text2SQL',
      impact: '降低延迟，保护数据隐私',
      adoption: 45
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getPotentialColor = (potential: string) => {
    switch (potential) {
      case '高': return 'text-green-600 bg-green-100';
      case '中': return 'text-yellow-600 bg-yellow-100';
      case '低': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen p-6">
      {/* 页面标题 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Text2SQL 技术挑战
        </h1>
        <p className="text-xl text-gray-600">
          深入分析当前面临的技术难题与解决方案
        </p>
      </motion.div>

      {/* 主要技术挑战 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <AlertTriangle className="mr-3 text-red-500" size={28} />
          核心技术挑战
        </h2>
        
        {/* 挑战选择器 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 mb-8">
          {technicalChallenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <button
                key={challenge.id}
                onClick={() => setSelectedChallenge(index)}
                className={`p-3 rounded-lg border-2 transition-all text-left ${
                  selectedChallenge === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className={`inline-flex p-2 rounded-lg ${challenge.color} text-white mb-2`}>
                  <Icon size={16} />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {challenge.title}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  getSeverityColor(challenge.severity)
                }`}>
                  {challenge.severity === 'high' ? '高' : challenge.severity === 'medium' ? '中' : '低'}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* 选中挑战的详细信息 */}
        <motion.div
          key={selectedChallenge}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-6"
        >
          {/* 挑战描述 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${technicalChallenges[selectedChallenge].color} text-white`}>
                {React.createElement(technicalChallenges[selectedChallenge].icon, { size: 24 })}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {technicalChallenges[selectedChallenge].title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {technicalChallenges[selectedChallenge].description}
                </p>
                
                {/* 进度条 */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>解决进度</span>
                    <span>{technicalChallenges[selectedChallenge].progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${technicalChallenges[selectedChallenge].progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 典型问题 */}
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 mb-4 flex items-center">
                <XCircle className="mr-2" size={20} />
                典型问题
              </h4>
              <ul className="space-y-2">
                {technicalChallenges[selectedChallenge].examples.map((example, index) => (
                  <li key={index} className="text-red-800 text-sm flex items-start">
                    <AlertTriangle className="mr-2 mt-0.5 flex-shrink-0" size={14} />
                    {example}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* 解决方案 */}
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 mb-4 flex items-center">
                <CheckCircle className="mr-2" size={20} />
                解决方案
              </h4>
              <ul className="space-y-2">
                {technicalChallenges[selectedChallenge].solutions.map((solution, index) => (
                  <li key={index} className="text-green-800 text-sm flex items-center">
                    <Lightbulb className="mr-2 flex-shrink-0" size={14} />
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 研究方向 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Target className="mr-3 text-purple-500" size={28} />
          前沿研究方向
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {researchDirections.map((direction, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-purple-500"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {direction.area}
                </h3>
                <div className="flex space-x-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    getPotentialColor(direction.potential)
                  }`}>
                    {direction.potential}潜力
                  </span>

                </div>
              </div>
              
              <p className="text-gray-600 mb-4">{direction.description}</p>
              
              <div>
                <p className="text-sm font-medium text-gray-700 mb-2">应用场景：</p>
                <div className="flex flex-wrap gap-2">
                  {direction.applications.map((app, appIndex) => (
                    <span
                      key={appIndex}
                      className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 行业趋势 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="mr-3 text-green-500" size={28} />
          行业发展趋势
        </h2>
        
        <div className="space-y-6">
          {industryTrends.map((trend, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {trend.trend}
                  </h3>
                  <span className="text-sm text-gray-500">
                    采用率 {trend.adoption}%
                  </span>
                </div>
                
                <p className="text-gray-600 mb-2">{trend.description}</p>
                <p className="text-sm text-blue-600">
                  <strong>影响：</strong>{trend.impact}
                </p>
                
                {/* 采用率进度条 */}
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${trend.adoption}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Challenges;