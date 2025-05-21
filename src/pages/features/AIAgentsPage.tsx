import { FC } from 'react';
import { Link } from 'react-router-dom';

export const AIAgentsPage: FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Specialized AI Agents</h1>
      
      <p className="text-lg text-gray-700 mb-8">
        The StockPulse AI Platform features four specialized AI agents, each leveraging advanced AI patterns
        to provide comprehensive analysis across different domains.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
          <h2 className="text-2xl font-semibold mb-4">Enhanced Technical Analysis Agent</h2>
          <div className="mb-4 text-sm bg-blue-50 p-3 rounded">
            <span className="font-semibold">AI Pattern:</span> ReAct (Reasoning and Acting)
          </div>
          <p className="text-gray-600 mb-4">
            The Enhanced Technical Analysis Agent identifies patterns, calculates indicators, and generates
            trading signals based on price and volume data. It uses the ReAct pattern to reason about market
            conditions and take appropriate analytical actions.
          </p>
          <h3 className="text-lg font-semibold mb-2">Key Capabilities:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Advanced pattern recognition across multiple timeframes</li>
            <li>Technical indicator calculation and interpretation</li>
            <li>Trading signal generation with confidence levels</li>
            <li>Support and resistance level identification</li>
          </ul>
          <Link to="/documentation#technical-analysis-agent" className="text-blue-600 hover:underline">
            View Technical Analysis Agent Documentation →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-600">
          <h2 className="text-2xl font-semibold mb-4">Enhanced Fundamental Analysis Agent</h2>
          <div className="mb-4 text-sm bg-green-50 p-3 rounded">
            <span className="font-semibold">AI Pattern:</span> RAG (Retrieval-Augmented Generation)
          </div>
          <p className="text-gray-600 mb-4">
            The Enhanced Fundamental Analysis Agent evaluates company financials, earnings reports, and
            valuation metrics using the RAG pattern to retrieve and incorporate relevant financial knowledge.
          </p>
          <h3 className="text-lg font-semibold mb-2">Key Capabilities:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Comprehensive financial metrics analysis</li>
            <li>Earnings report processing and interpretation</li>
            <li>Valuation model application and comparison</li>
            <li>Growth projection and financial health assessment</li>
          </ul>
          <Link to="/documentation#fundamental-analysis-agent" className="text-blue-600 hover:underline">
            View Fundamental Analysis Agent Documentation →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
          <h2 className="text-2xl font-semibold mb-4">News Analysis Agent</h2>
          <div className="mb-4 text-sm bg-purple-50 p-3 rounded">
            <span className="font-semibold">AI Pattern:</span> Cross-Validation and Entity Recognition
          </div>
          <p className="text-gray-600 mb-4">
            The News Analysis Agent processes news articles, press releases, and media coverage to assess
            sentiment and potential market impact, using cross-validation to ensure accuracy.
          </p>
          <h3 className="text-lg font-semibold mb-2">Key Capabilities:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>News sentiment analysis with confidence scoring</li>
            <li>Entity recognition for companies, people, and events</li>
            <li>Source credibility evaluation</li>
            <li>Market impact assessment and prediction</li>
          </ul>
          <Link to="/documentation#news-analysis-agent" className="text-blue-600 hover:underline">
            View News Analysis Agent Documentation →
          </Link>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-amber-600">
          <h2 className="text-2xl font-semibold mb-4">Alternative Data Analysis Agent</h2>
          <div className="mb-4 text-sm bg-amber-50 p-3 rounded">
            <span className="font-semibold">AI Pattern:</span> Planning and Data Lineage Tracking
          </div>
          <p className="text-gray-600 mb-4">
            The Alternative Data Analysis Agent processes non-traditional data sources such as social media,
            web traffic, and satellite imagery using the planning pattern for structured analysis.
          </p>
          <h3 className="text-lg font-semibold mb-2">Key Capabilities:</h3>
          <ul className="list-disc pl-5 mb-4 text-gray-600">
            <li>Social media sentiment and trend analysis</li>
            <li>Web traffic and digital engagement metrics</li>
            <li>Alternative data source integration</li>
            <li>Data lineage tracking for transparency</li>
          </ul>
          <Link to="/documentation#alternative-data-analysis-agent" className="text-blue-600 hover:underline">
            View Alternative Data Analysis Agent Documentation →
          </Link>
        </div>
      </div>
      
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Agent Integration</h2>
        <p className="text-gray-600 mb-6">
          The Agent Integration Manager coordinates these specialized agents to provide comprehensive
          analysis, combining insights from multiple domains for a holistic market view. This integration
          enables cross-validation of signals, conflict resolution, and confidence scoring.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/documentation#agent-integration" className="text-blue-600 hover:underline">
            View Agent Integration Documentation →
          </Link>
          <Link to="/user-guide#agent-integration" className="text-blue-600 hover:underline">
            See Agent Integration User Guide →
          </Link>
        </div>
      </div>
    </div>
  );
};
