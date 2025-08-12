import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  BarChart3,
  Users,
  ShoppingCart,
  TrendingUp,
  DollarSign,
  Clock,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Zap
} from 'lucide-react';

const Applications: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState(0);

  const applicationScenarios = [
    {
      id: 'bi',
      title: '商业智能分析',
      description: '帮助业务人员快速获取数据洞察',
      icon: BarChart3,
      color: 'bg-blue-500',
      benefits: [
        '降低数据分析门槛',
        '提升决策效率',
        '减少IT部门工作量'
      ],
      examples: [
        '"查询上个月各产品线的销售趋势"',
        '"分析客户流失率最高的地区"',
        '"对比今年与去年同期的营收增长"'
      ]
    },
    {
      id: 'customer',
      title: '客户服务支持',
      description: '客服人员快速查询客户信息和订单状态',
      icon: Users,
      color: 'bg-green-500',
      benefits: [
        '提升客服响应速度',
        '改善客户体验',
        '减少人工错误'
      ],
      examples: [
        '"查询客户张三的最近订单状态"',
        '"找出投诉最多的产品类别"',
        '"统计本月客户满意度评分"'
      ]
    },
    {
      id: 'finance',
      title: '财务报表分析',
      description: '财务人员自助生成各类财务报表',
      icon: DollarSign,
      color: 'bg-purple-500',
      benefits: [
        '自动化报表生成',
        '实时财务监控',
        '合规性检查'
      ],
      examples: [
        '"生成本季度利润表"',
        '"查询应收账款超过30天的客户"',
        '"分析各部门预算执行情况"'
      ]
    },
    {
      id: 'operations',
      title: '运营数据监控',
      description: '运营团队实时监控关键业务指标',
      icon: TrendingUp,
      color: 'bg-orange-500',
      benefits: [
        '实时业务监控',
        '异常预警',
        '运营优化建议'
      ],
      examples: [
        '"监控网站今日访问量变化"',
        '"查询转化率下降的页面"',
        '"分析用户行为路径"'
      ]
    }
  ];

  const caseStudies = [
    {
      company: '某大型零售企业',
      industry: '零售电商',
      challenge: '业务人员需要频繁向IT部门申请数据报表，响应周期长达3-5天',
      solution: '部署Text2SQL系统，业务人员可直接用自然语言查询销售数据',
      results: [
        '数据查询响应时间从5天缩短到5分钟',
        'IT部门工作量减少60%',
        '业务决策效率提升3倍'
      ],
      icon: ShoppingCart,
      color: 'border-blue-500'
    },
    {
      company: '某金融科技公司',
      industry: '金融服务',
      challenge: '风控团队需要实时监控各类风险指标，传统SQL查询复杂且易错',
      solution: '集成Text2SQL到风控平台，支持自然语言风险查询',
      results: [
        '风险查询准确率提升至95%',
        '风控响应时间缩短70%',
        '减少人工查询错误90%'
      ],
      icon: Building2,
      color: 'border-green-500'
    },
    {
      company: '某制造业集团',
      industry: '智能制造',
      challenge: '生产数据分析依赖专业数据分析师，成本高且效率低',
      solution: '在生产管理系统中嵌入Text2SQL功能',
      results: [
        '生产效率分析自助化率达80%',
        '数据分析成本降低50%',
        '生产异常发现时间缩短2小时'
      ],
      icon: Target,
      color: 'border-purple-500'
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: '需求分析',
      description: '分析业务场景和数据查询需求',
      tasks: ['业务流程梳理', '数据源识别', '用户角色分析'],
      duration: '1-2周'
    },
    {
      step: 2,
      title: '系统设计',
      description: '设计Text2SQL系统架构',
      tasks: ['技术架构设计', '数据库schema分析', '安全策略制定'],
      duration: '2-3周'
    },
    {
      step: 3,
      title: '模型训练',
      description: '基于企业数据训练专用模型',
      tasks: ['数据预处理', '模型微调', '性能优化'],
      duration: '3-4周'
    },
    {
      step: 4,
      title: '系统集成',
      description: '与现有业务系统集成',
      tasks: ['API开发', '界面集成', '权限配置'],
      duration: '2-3周'
    },
    {
      step: 5,
      title: '测试部署',
      description: '系统测试和生产环境部署',
      tasks: ['功能测试', '性能测试', '用户培训'],
      duration: '1-2周'
    }
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
          Text2SQL 企业应用
        </h1>
        <p className="text-xl text-gray-600">
          探索Text2SQL在企业级场景中的实际应用价值
        </p>
      </motion.div>

      {/* 应用场景 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Lightbulb className="mr-3 text-yellow-500" size={28} />
          核心应用场景
        </h2>
        
        {/* 场景选择器 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {applicationScenarios.map((scenario, index) => {
            const Icon = scenario.icon;
            return (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenario(index)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedScenario === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className={`inline-flex p-2 rounded-lg ${scenario.color} text-white mb-3`}>
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {scenario.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {scenario.description}
                </p>
              </button>
            );
          })}
        </div>
        
        {/* 选中场景的详细信息 */}
        <motion.div
          key={selectedScenario}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {/* 核心价值 */}
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
            <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
              <CheckCircle className="mr-2" size={20} />
              核心价值
            </h3>
            <ul className="space-y-2">
              {applicationScenarios[selectedScenario].benefits.map((benefit, index) => (
                <li key={index} className="text-green-800 flex items-center">
                  <Zap className="mr-2 flex-shrink-0" size={16} />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          
          {/* 查询示例 */}
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              查询示例
            </h3>
            <div className="space-y-3">
              {applicationScenarios[selectedScenario].examples.map((example, index) => (
                <div key={index} className="bg-white rounded p-3 border border-blue-200">
                  <p className="text-sm text-blue-800 font-mono">
                    {example}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* 成功案例 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Target className="mr-3 text-green-500" size={28} />
          成功案例分析
        </h2>
        
        <div className="space-y-6">
          {caseStudies.map((caseStudy, index) => {
            const Icon = caseStudy.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`border-l-4 ${caseStudy.color} bg-gray-50 rounded-lg p-6`}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <Icon className="text-gray-600" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {caseStudy.company}
                      </h3>
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {caseStudy.industry}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">挑战</h4>
                        <p className="text-sm text-gray-600">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">解决方案</h4>
                        <p className="text-sm text-gray-600">{caseStudy.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">成果</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {caseStudy.results.map((result, resultIndex) => (
                            <li key={resultIndex} className="flex items-center">
                              <CheckCircle className="mr-1 text-green-500 flex-shrink-0" size={12} />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* 实施路径 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Clock className="mr-3 text-purple-500" size={28} />
          实施路径规划
        </h2>
        
        <div className="space-y-6">
          {implementationSteps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                {step.step}
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h3>
                  <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {step.duration}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-3">{step.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {step.tasks.map((task, taskIndex) => (
                    <span
                      key={taskIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
                    >
                      {task}
                    </span>
                  ))}
                </div>
              </div>
              
              {index < implementationSteps.length - 1 && (
                <div className="flex flex-col items-center">
                  <ArrowRight className="text-blue-500 transform rotate-90" size={20} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Applications;