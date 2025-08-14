import React from 'react';
import { Code, Database, Zap, Shield, Users, Settings, CheckCircle, XCircle, ArrowRight, Download, Play, Terminal, FileText } from 'lucide-react';

const CaseDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-6 py-12">
        {/* 页面标题 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            案例演示
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            通过实际案例对比 DB-GPT 和 XiYanSQL-QwenCoder 两个 Text2SQL 解决方案的特性、使用方法和适用场景
          </p>
        </div>

        {/* 方案对比概述 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">方案对比概述</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* DB-GPT 卡片 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">DB-GPT</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                开源 AI 原生数据应用开发框架，提供完整的企业级 Text2SQL 解决方案
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">完整的企业级功能</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">多模型支持</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">可视化界面</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">RAG 框架集成</span>
                </div>
              </div>
            </div>

            {/* XiYanSQL-QwenCoder 卡片 */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">XiYanSQL-QwenCoder</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                专注于 Text-to-SQL 领域的大语言模型，提供高精度的 SQL 生成能力
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">专业化设计</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">高准确率</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">快速响应</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-gray-700">多规格模型</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DB-GPT 演示 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">DB-GPT 演示</h2>
          
          {/* 安装配置 */}


          {/* 实际使用示例 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <Play className="w-6 h-6 mr-3 text-blue-600" />
              在线演示
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-3">演示地址</h4>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                  <a 
                    href="http://10.66.9.70:5670/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline font-medium"
                  >
                    http://10.66.9.70:5670/
                  </a>
                  <p className="text-blue-700 mt-2">
                    点击上方链接可直接访问 DB-GPT 在线演示系统
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-3">示例问题</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      订单数量
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      当前都有哪些产品
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* XiYanSQL-QwenCoder 演示 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">XiYanSQL-QwenCoder 演示</h2>
          
          {/* 模型下载 */}


          {/* 在线演示 */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
              <Terminal className="w-6 h-6 mr-3 text-purple-600" />
              在线演示
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-3">演示地址</h4>
                <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-4">
                  <a 
                    href="http://10.100.10.212/chat/eAhIrDQaB0ZAb6Yw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-800 underline font-medium"
                  >
                    http://10.100.10.212/chat/eAhIrDQaB0ZAb6Yw
                  </a>
                  <p className="text-purple-700 mt-2">
                    点击上方链接可直接访问 XiYanSQL-QwenCoder 在线演示系统
                  </p>
                </div>
              </div>

              {/* 示例问题 */}
              <div>
                <h4 className="text-lg font-medium text-gray-700 mb-3">示例问题</h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-600 mb-4">您可以尝试以下示例问题来体验 XiYanSQL-QwenCoder 的功能：</p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">版本号数量前10的package，以及他们的名称</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">最近一年用户的注册趋势</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">发布案例最多的10个用户，以及他们的姓名</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">分析用户喜欢在哪个时间段发布案例</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">分析用户喜欢在什么时间段上传package</span>
                    </li>
                  </ul>
                </div>
              </div>

             </div>
          </div>
        </section>

           {/* 对比总结 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">对比总结</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">对比维度</th>
                    <th className="px-6 py-4 text-left font-semibold">DB-GPT</th>
                    <th className="px-6 py-4 text-left font-semibold">XiYanSQL-QwenCoder</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">技术架构</td>
                    <td className="px-6 py-4 text-gray-700">完整的企业级框架，包含多个组件</td>
                    <td className="px-6 py-4 text-gray-700">专注的 Text2SQL 模型</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">性能表现</td>
                    <td className="px-6 py-4 text-gray-700">依赖底层模型性能</td>
                    <td className="px-6 py-4 text-gray-700">BIRD 测试集 69.03% EX 分数</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">部署复杂度</td>
                    <td className="px-6 py-4 text-gray-700">较复杂，需要配置多个组件</td>
                    <td className="px-6 py-4 text-gray-700">相对简单，直接模型推理</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">适用场景</td>
                    <td className="px-6 py-4 text-gray-700">企业级数据分析平台</td>
                    <td className="px-6 py-4 text-gray-700">高精度 Text2SQL 应用</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">学习成本</td>
                    <td className="px-6 py-4 text-gray-700">较高，需要了解整个框架</td>
                    <td className="px-6 py-4 text-gray-700">较低，专注模型使用</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 选择建议 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">选择建议</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* DB-GPT 建议 */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center">
                <Database className="w-6 h-6 mr-3" />
                选择 DB-GPT
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-blue-700">需要构建完整的数据分析平台</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-blue-700">团队技术实力较强</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-blue-700">需要支持多种数据源</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                  <span className="text-blue-700">对企业级特性有较高要求</span>
                </div>
              </div>
            </div>

            {/* XiYanSQL-QwenCoder 建议 */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold text-purple-800 mb-6 flex items-center">
                <Zap className="w-6 h-6 mr-3" />
                选择 XiYanSQL-QwenCoder
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-purple-700">主要需求是高质量 Text2SQL</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-purple-700">希望快速集成到现有系统</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-purple-700">对响应速度和准确性要求高</span>
                </div>
                <div className="flex items-start">
                  <ArrowRight className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-purple-700">有足够硬件资源支持</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 混合方案 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
              <Settings className="w-6 h-6 mr-3" />
              混合方案建议
            </h3>
            <p className="text-green-700 mb-4 leading-relaxed">
              在实际应用中，也可以考虑混合使用两种方案：
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                <span className="text-green-700">使用 XiYanSQL-QwenCoder 作为核心的 Text2SQL 引擎</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                <span className="text-green-700">使用 DB-GPT 的框架和企业级功能</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                <span className="text-green-700">通过 API 集成的方式结合两者的优势</span>
              </div>
            </div>
          </div>
        </section>

        {/* 结论 */}
        <section className="text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">总结</h3>
            <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
              通过以上对比和演示，我们可以看到不同 Text2SQL 方案各有特色和适用场景。
              选择合适的方案需要综合考虑技术需求、资源约束、团队能力等多个因素，
              以实现最佳的应用效果。无论选择哪种方案，都需要根据实际业务需求进行定制化配置和优化。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseDemo;