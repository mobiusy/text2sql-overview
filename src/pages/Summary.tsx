import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  TrendingUp,
  Target,
  Lightbulb,
  Users,
  Zap,
  Award,
  ArrowRight,
  Star,
  Globe,
  Rocket,
  Heart,
  ThumbsUp,
  MessageCircle
} from 'lucide-react';

const Summary: React.FC = () => {
  const [currentHighlight, setCurrentHighlight] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);

  const keyTakeaways = [
    {
      icon: Target,
      title: 'Text2SQL技术成熟',
      description: '从规则系统到大语言模型，技术不断演进，准确率显著提升',
      color: 'bg-blue-500',
      stats: '准确率提升至85%+'
    },
    {
      icon: Users,
      title: '企业应用广泛',
      description: '在商业智能、客户服务、财务报表等领域有成功应用案例',
      color: 'bg-green-500',
      stats: '覆盖10+行业'
    },
    {
      icon: Zap,
      title: '效率大幅提升',
      description: '将SQL查询时间从小时级降低到秒级，大幅提升数据分析效率',
      color: 'bg-yellow-500',
      stats: '效率提升100倍+'
    },
    {
      icon: Lightbulb,
      title: '技术持续创新',
      description: '多模态理解、联邦学习等前沿技术为未来发展提供新方向',
      color: 'bg-purple-500',
      stats: '4大研究方向'
    }
  ];

  const futureOutlook = [
    {
      period: '短期 (1年内)',
      goals: [
        '模型准确率突破90%',
        '支持更复杂的查询场景',
        '降低部署和维护成本',
        '提升查询性能优化'
      ],
      color: 'border-blue-500 bg-blue-50'
    },
    {
      period: '中期 (1-3年)',
      goals: [
        '实现多模态数据查询',
        '支持实时学习和适应',
        '建立行业标准和规范',
        '扩展到更多垂直领域'
      ],
      color: 'border-green-500 bg-green-50'
    },
    {
      period: '长期 (3-5年)',
      goals: [
        '实现完全自然的人机对话',
        '支持复杂业务逻辑推理',
        '建立智能数据生态系统',
        '推动数据民主化进程'
      ],
      color: 'border-purple-500 bg-purple-50'
    }
  ];

  const businessValue = [
    {
      category: '降本增效',
      value: '减少80%的SQL开发时间',
      impact: '高',
      description: '大幅降低数据分析门槛，提升业务人员自助分析能力'
    },
    {
      category: '决策支持',
      value: '实时数据洞察',
      impact: '高',
      description: '快速响应业务需求，支持敏捷决策和战略调整'
    },
    {
      category: '人才培养',
      value: '降低技术门槛',
      impact: '中',
      description: '让非技术人员也能进行复杂数据分析，扩大人才池'
    },
    {
      category: '创新驱动',
      value: '释放数据价值',
      impact: '高',
      description: '促进数据驱动的业务创新和产品优化'
    }
  ];

  const testimonials = [
    {
      quote: "Text2SQL技术让我们的业务分析师能够直接与数据对话，大大提升了决策效率。",
      author: "张总监",
      company: "某大型零售企业",
      role: "数据分析总监"
    },
    {
      quote: "实施Text2SQL后，我们的客服响应时间缩短了70%，客户满意度显著提升。",
      author: "李经理",
      company: "某金融科技公司",
      role: "客户服务经理"
    },
    {
      quote: "这项技术真正实现了数据民主化，让每个员工都能成为数据分析师。",
      author: "王CTO",
      company: "某制造业集团",
      role: "首席技术官"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHighlight((prev) => (prev + 1) % keyTakeaways.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case '高': return 'text-red-600 bg-red-100';
      case '中': return 'text-yellow-600 bg-yellow-100';
      case '低': return 'text-green-600 bg-green-100';
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
          Text2SQL 技术总结
        </h1>
        <p className="text-xl text-gray-600">
          回顾技术要点，展望未来发展
        </p>
      </motion.div>

      {/* 核心要点 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CheckCircle className="mr-3 text-green-500" size={28} />
          核心要点回顾
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyTakeaways.map((takeaway, index) => {
            const Icon = takeaway.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`relative p-6 rounded-lg border-2 transition-all duration-300 ${
                  currentHighlight === index
                    ? 'border-blue-500 bg-blue-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className={`inline-flex p-3 rounded-lg ${takeaway.color} text-white mb-4`}>
                  <Icon size={24} />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {takeaway.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-3">
                  {takeaway.description}
                </p>
                
                <div className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  {takeaway.stats}
                </div>
                
                {currentHighlight === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full p-1"
                  >
                    <Star size={16} />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* 商业价值 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Award className="mr-3 text-yellow-500" size={28} />
          商业价值体现
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {businessValue.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-6 border-l-4 border-yellow-500"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.category}
                </h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  getImpactColor(value.impact)
                }`}>
                  {value.impact}影响
                </span>
              </div>
              
              <p className="text-blue-600 font-medium mb-2">{value.value}</p>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 未来展望 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Rocket className="mr-3 text-purple-500" size={28} />
          未来发展展望
        </h2>
        
        <div className="space-y-6">
          {futureOutlook.map((outlook, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className={`rounded-lg p-6 border-2 ${outlook.color}`}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {outlook.period}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {outlook.goals.map((goal, goalIndex) => (
                  <div key={goalIndex} className="flex items-center space-x-3">
                    <ArrowRight className="text-blue-500 flex-shrink-0" size={16} />
                    <span className="text-gray-700">{goal}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 用户反馈 */}


      {/* 演示结束 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-8 text-center text-white"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mb-6"
        >
          <Heart className="mx-auto text-red-400" size={48} />
        </motion.div>
        
        <h2 className="text-3xl font-bold mb-4">感谢您的聆听！</h2>
        
        <p className="text-xl mb-6 opacity-90">
          Text2SQL技术正在改变我们与数据交互的方式
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <div className="flex items-center space-x-2">
            <Globe className="text-blue-200" size={20} />
            <span>让数据查询更简单</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Users className="text-green-200" size={20} />
            <span>让分析更普及</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <TrendingUp className="text-yellow-200" size={20} />
            <span>让决策更智能</span>
          </div>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowThankYou(true)}
          className="mt-8 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center mx-auto space-x-2"
        >
          <ThumbsUp size={20} />
          <span>开始您的Text2SQL之旅</span>
        </motion.button>
      </motion.div>

      {/* 感谢弹窗 */}
      {showThankYou && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowThankYou(false)}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white rounded-lg p-8 max-w-md mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              演示完成！
            </h3>
            <p className="text-gray-600 mb-6">
              希望这次演示能帮助您更好地理解Text2SQL技术的价值和潜力。
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              关闭
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Summary;