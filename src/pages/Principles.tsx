import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  MessageSquare,
  Brain,
  Code,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Lightbulb
} from 'lucide-react';

const Principles: React.FC = () => {
  const [activeTab, setActiveTab] = useState('architecture');

  const architectureSteps = [
    {
      id: 1,
      title: '自然语言输入',
      description: '用户使用自然语言描述查询需求',
      icon: MessageSquare,
      example: '"查询2023年销售额最高的前10个产品"',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      title: '语义理解',
      description: '大语言模型解析语义和意图',
      icon: Brain,
      example: '识别：时间范围(2023年)、指标(销售额)、排序(最高)、数量(前10)',
      color: 'bg-green-500'
    },
    {
      id: 3,
      title: 'SQL生成',
      description: '基于数据库schema生成SQL查询',
      icon: Code,
      example: 'SELECT product_name, SUM(sales_amount) FROM sales WHERE year = 2023 GROUP BY product_name ORDER BY SUM(sales_amount) DESC LIMIT 10',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      title: '结果返回',
      description: '执行SQL并返回查询结果',
      icon: Database,
      example: '返回格式化的查询结果和可视化图表',
      color: 'bg-orange-500'
    }
  ];

  const coreComponents = [
    {
      name: '预训练语言模型',
      description: '基于Transformer架构的大语言模型，如GPT、T5等',
      features: ['语义理解', '上下文感知', '多轮对话'],
      color: 'border-blue-500'
    },
    {
      name: 'Schema理解模块',
      description: '解析数据库结构，理解表关系和字段含义',
      features: ['表结构分析', '关系推理', '字段映射'],
      color: 'border-green-500'
    },
    {
      name: 'SQL生成器',
      description: '将自然语言转换为标准SQL查询语句',
      features: ['语法生成', '查询优化', '错误检测'],
      color: 'border-purple-500'
    },
    {
      name: '执行引擎',
      description: '安全执行SQL查询并返回结果',
      features: ['权限控制', '性能优化', '结果格式化'],
      color: 'border-orange-500'
    }
  ];

  const codeExample = `# Text2SQL 核心实现示例

class Text2SQLEngine:
    def __init__(self, model_name="gpt-3.5-turbo"):
        self.llm = LanguageModel(model_name)
        self.schema_parser = SchemaParser()
        self.sql_generator = SQLGenerator()
    
    def process_query(self, natural_query, database_schema):
        # 1. 解析数据库schema
        schema_info = self.schema_parser.parse(database_schema)
        
        # 2. 构建提示词
        prompt = self.build_prompt(natural_query, schema_info)
        
        # 3. 生成SQL
        sql_query = self.llm.generate(prompt)
        
        # 4. 验证和优化
        validated_sql = self.sql_generator.validate(sql_query)
        
        return validated_sql
    
    def build_prompt(self, query, schema):
        return f"""
        数据库Schema: {schema}
        自然语言查询: {query}
        请生成对应的SQL查询语句：
        """`;

  const tabs = [
    { id: 'architecture', label: '技术架构', icon: Database },
    { id: 'components', label: '核心组件', icon: Brain },
    { id: 'code', label: '代码示例', icon: Code }
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
          Text2SQL 技术原理
        </h1>
        <p className="text-xl text-gray-600">
          深入了解从自然语言到SQL的转换机制
        </p>
      </motion.div>

      {/* 标签页导航 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <div className="bg-white rounded-lg shadow-lg p-2 flex space-x-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <Icon size={20} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </motion.div>

      {/* 技术架构标签页 */}
      {activeTab === 'architecture' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Lightbulb className="mr-3 text-yellow-500" size={28} />
              处理流程
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
              {architectureSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-gray-50 rounded-lg p-6 h-full border-l-4 border-blue-500">
                      <div className={`inline-flex p-3 rounded-lg ${step.color} text-white mb-4`}>
                        <Icon size={24} />
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {step.id}. {step.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {step.description}
                      </p>
                      
                      <div className="bg-white rounded p-3 border">
                        <p className="text-xs text-gray-500 mb-1">示例：</p>
                        <p className="text-sm font-mono text-gray-700">
                          {step.example}
                        </p>
                      </div>
                    </div>
                    
                    {index < architectureSteps.length - 1 && (
                      <div className="hidden xl:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                        <ArrowRight className="text-blue-500" size={24} />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}

      {/* 核心组件标签页 */}
      {activeTab === 'components' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Brain className="mr-3 text-purple-500" size={28} />
              核心组件架构
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gray-50 rounded-lg p-6 border-l-4 ${component.color}`}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {component.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4">
                    {component.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">核心功能：</p>
                    {component.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="text-green-500" size={16} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* 代码示例标签页 */}
      {activeTab === 'code' && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Code className="mr-3 text-green-500" size={28} />
              实现示例
            </h2>
            
            <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
              <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                {codeExample}
              </pre>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center mb-2">
                  <CheckCircle className="text-blue-500 mr-2" size={20} />
                  <h3 className="font-semibold text-blue-900">优势特点</h3>
                </div>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• 支持复杂查询语义理解</li>
                  <li>• 自动适配不同数据库schema</li>
                  <li>• 内置SQL语法验证和优化</li>
                  <li>• 支持多轮对话和上下文理解</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4 border-l-4 border-orange-500">
                <div className="flex items-center mb-2">
                  <AlertCircle className="text-orange-500 mr-2" size={20} />
                  <h3 className="font-semibold text-orange-900">技术挑战</h3>
                </div>
                <ul className="text-sm text-orange-800 space-y-1">
                  <li>• 复杂查询的语义歧义处理</li>
                  <li>• 大规模数据库schema理解</li>
                  <li>• SQL查询性能优化</li>
                  <li>• 多表关联查询的准确性</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Principles;