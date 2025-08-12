import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  TrendingUp,
  Cpu,
  Brain,
  Zap,
  CheckCircle,
  XCircle,
  Star,
  ArrowRight
} from 'lucide-react';

const Evolution: React.FC = () => {
  const [selectedEra, setSelectedEra] = useState(0);

  const timelineData = [
    {
      period: '1970s-1990s',
      title: '早期规则系统',
      description: '基于手工编写规则的自然语言接口',
      icon: Calendar,
      color: 'bg-red-500',
      achievements: [
        '第一个自然语言数据库接口LUNAR',
        '基于语法规则的查询解析',
        '有限的查询类型支持'
      ],
      limitations: [
        '规则维护成本高',
        '扩展性差',
        '只能处理简单查询'
      ]
    },
    {
      period: '2000s-2010s',
      title: '统计机器学习',
      description: '引入机器学习方法提升解析准确率',
      icon: TrendingUp,
      color: 'bg-orange-500',
      achievements: [
        '支持向量机(SVM)应用',
        '条件随机场(CRF)序列标注',
        '语义解析框架发展'
      ],
      limitations: [
        '需要大量标注数据',
        '特征工程复杂',
        '泛化能力有限'
      ]
    },
    {
      period: '2010s-2017',
      title: '深度学习时代',
      description: '神经网络模型显著提升性能',
      icon: Cpu,
      color: 'bg-blue-500',
      achievements: [
        'Seq2Seq模型应用',
        '注意力机制引入',
        'WikiSQL等大规模数据集'
      ],
      limitations: [
        '复杂查询处理困难',
        '数据库schema理解不足',
        '可解释性差'
      ]
    },
    {
      period: '2017-2020',
      title: 'Transformer革命',
      description: 'Transformer架构带来突破性进展',
      icon: Brain,
      color: 'bg-purple-500',
      achievements: [
        'BERT预训练模型',
        'Spider数据集发布',
        '跨域泛化能力提升'
      ],
      limitations: [
        '模型规模限制',
        '推理能力不足',
        '复杂逻辑处理困难'
      ]
    },
    {
      period: '2020-至今',
      title: '大语言模型时代',
      description: 'GPT等大模型实现质的飞跃',
      icon: Zap,
      color: 'bg-green-500',
      achievements: [
        'GPT-3/4强大的理解能力',
        'Few-shot学习能力',
        '接近人类水平的性能'
      ],
      limitations: [
        '计算资源需求大',
        '幻觉问题',
        '安全性考虑'
      ]
    }
  ];

  const comparisonData = [
    {
      aspect: '准确率',
      rule: '60-70%',
      ml: '70-80%',
      dl: '80-85%',
      transformer: '85-90%',
      llm: '90-95%'
    },
    {
      aspect: '复杂查询支持',
      rule: '低',
      ml: '中等',
      dl: '中等',
      transformer: '高',
      llm: '很高'
    },
    {
      aspect: '跨域泛化',
      rule: '很低',
      ml: '低',
      dl: '中等',
      transformer: '高',
      llm: '很高'
    },
    {
      aspect: '开发成本',
      rule: '很高',
      ml: '高',
      dl: '中等',
      transformer: '中等',
      llm: '低'
    },
    {
      aspect: '推理速度',
      rule: '很快',
      ml: '快',
      dl: '中等',
      transformer: '中等',
      llm: '慢'
    }
  ];

  const milestones = [
    { year: '1977', event: 'LUNAR系统发布', description: '第一个自然语言数据库接口' },
    { year: '2017', event: 'WikiSQL数据集', description: '第一个大规模Text2SQL数据集' },
    { year: '2018', event: 'Spider数据集', description: '跨域复杂查询基准数据集' },
    { year: '2019', event: 'BERT应用', description: 'BERT在Text2SQL任务上的应用' },
    { year: '2020', event: 'GPT-3发布', description: '大语言模型展现强大能力' },
    { year: '2023', event: 'GPT-4突破', description: '接近人类专家水平的性能' }
  ];

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
          Text2SQL 发展历程
        </h1>
        <p className="text-xl text-gray-600">
          从规则系统到大语言模型的技术演进之路
        </p>
      </motion.div>

      {/* 时间线展示 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Calendar className="mr-3 text-blue-500" size={28} />
          技术演进时间线
        </h2>
        
        {/* 时间线导航 */}
        <div className="flex flex-wrap justify-center mb-8 gap-2">
          {timelineData.map((era, index) => {
            const Icon = era.icon;
            return (
              <button
                key={index}
                onClick={() => setSelectedEra(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedEra === index
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon size={16} />
                <span className="text-sm">{era.period}</span>
              </button>
            );
          })}
        </div>
        
        {/* 选中时代的详细信息 */}
        <motion.div
          key={selectedEra}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {/* 基本信息 */}
          <div className="lg:col-span-1">
            <div className={`inline-flex p-4 rounded-lg ${timelineData[selectedEra].color} text-white mb-4`}>
              {React.createElement(timelineData[selectedEra].icon, { size: 32 })}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {timelineData[selectedEra].title}
            </h3>
            <p className="text-gray-600 mb-4">
              {timelineData[selectedEra].description}
            </p>
            <div className="text-sm text-gray-500 font-medium">
              时间段：{timelineData[selectedEra].period}
            </div>
          </div>
          
          {/* 主要成就 */}
          <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="font-semibold text-green-900 mb-3 flex items-center">
              <CheckCircle className="mr-2" size={20} />
              主要成就
            </h4>
            <ul className="space-y-2">
              {timelineData[selectedEra].achievements.map((achievement, index) => (
                <li key={index} className="text-sm text-green-800 flex items-start">
                  <Star className="mr-2 mt-0.5 flex-shrink-0" size={14} />
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          
          {/* 技术局限 */}
          <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
            <h4 className="font-semibold text-red-900 mb-3 flex items-center">
              <XCircle className="mr-2" size={20} />
              技术局限
            </h4>
            <ul className="space-y-2">
              {timelineData[selectedEra].limitations.map((limitation, index) => (
                <li key={index} className="text-sm text-red-800 flex items-start">
                  <XCircle className="mr-2 mt-0.5 flex-shrink-0" size={14} />
                  {limitation}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* 技术对比表 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="mr-3 text-purple-500" size={28} />
          技术方案对比
        </h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 px-4 py-3 text-left font-semibold text-gray-900">
                  评估维度
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  规则系统
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  机器学习
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  深度学习
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  Transformer
                </th>
                <th className="border border-gray-200 px-4 py-3 text-center font-semibold text-gray-900">
                  大语言模型
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="hover:bg-gray-50"
                >
                  <td className="border border-gray-200 px-4 py-3 font-medium text-gray-900">
                    {row.aspect}
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                    {row.rule}
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                    {row.ml}
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                    {row.dl}
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-center text-gray-600">
                    {row.transformer}
                  </td>
                  <td className="border border-gray-200 px-4 py-3 text-center font-semibold text-green-600">
                    {row.llm}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* 重要里程碑 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Star className="mr-3 text-yellow-500" size={28} />
          重要里程碑
        </h2>
        
        <div className="space-y-4">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500"
            >
              <div className="bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-bold">
                {milestone.year}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{milestone.event}</h3>
                <p className="text-sm text-gray-600">{milestone.description}</p>
              </div>
              <ArrowRight className="text-blue-500" size={20} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Evolution;