import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout';
import { MarkdownPage } from './components/MarkdownPage';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { AIAgentsPage } from './pages/features/AIAgentsPage';
import { TradingModulesPage } from './pages/features/TradingModulesPage';
import { StockScreenerPage } from './pages/features/StockScreenerPage';
import { MultiTickerAnalysisPage } from './pages/features/MultiTickerAnalysisPage';
import { NotFoundPage } from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'documentation',
        element: <MarkdownPage 
          filePath="/docs/phase2_documentation.md" 
          title="StockPulse AI Platform Documentation" 
        />,
      },
      {
        path: 'user-guide',
        element: <MarkdownPage 
          filePath="/docs/user_guide.md" 
          title="User Guide" 
        />,
      },
      {
        path: 'performance',
        element: <MarkdownPage 
          filePath="/docs/performance_evaluation.md" 
          title="Performance Evaluation" 
        />,
      },
      {
        path: 'validation',
        element: <MarkdownPage 
          filePath="/docs/phase2_validation_checklist.md" 
          title="Validation Checklist" 
        />,
      },
      {
        path: 'features',
        element: <FeaturesPage />,
      },
      {
        path: 'features/ai-agents',
        element: <AIAgentsPage />,
      },
      {
        path: 'features/trading-modules',
        element: <TradingModulesPage />,
      },
      {
        path: 'features/stock-screener',
        element: <StockScreenerPage />,
      },
      {
        path: 'features/multi-ticker-analysis',
        element: <MultiTickerAnalysisPage />,
      },
      {
        path: 'technical-notes/alternative-test-strategy',
        element: <MarkdownPage 
          filePath="/docs/alternative_test_strategy.md" 
          title="Alternative Test Strategy" 
        />,
      },
      {
        path: 'technical-notes/jest-typescript-fix',
        element: <MarkdownPage 
          filePath="/docs/jest_typescript_fix.md" 
          title="Jest TypeScript Fix Documentation" 
        />,
      },
      {
        path: 'final-report',
        element: <MarkdownPage 
          filePath="/docs/final_report.md" 
          title="Final Report" 
        />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
