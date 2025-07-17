import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleList from './presentation/pages/ArticleList';
import ArticleDetail from './presentation/pages/ArticleDetail';
import { Layout } from 'antd';

const { Header, Content } = Layout;

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header style={{ color: '#fff', fontSize: '1.5rem' }}>News App Hendra</Header>
        <Content style={{ padding: '24px' }}>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/article/:id" element={<ArticleDetail />} />
          </Routes>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}

export default App;