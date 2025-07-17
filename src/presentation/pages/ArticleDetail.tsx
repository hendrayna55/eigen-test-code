import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Typography, Divider, Tag } from 'antd';

const { Title, Paragraph, Text } = Typography;

const fallbackImage = 'https://www.kuonitumlare.com/documents/d/kuonitumlare/1_japan_body';

const ArticleDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state;

  if (!article) return <div>Artikel tidak ditemukan.</div>;

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <Button onClick={() => navigate(-1)} style={{ marginBottom: 16 }}>
        Kembali
      </Button>
      <img src={article.urlToImage != null ? article.urlToImage : fallbackImage} alt="banner" style={{ width: '100%', marginBottom: 16 }} />
      <Title>{article.title}</Title>
      <Paragraph>
        {article.author && <Text strong>Penulis: {article.author}</Text>}
        {article.source?.name && <Tag color="blue" style={{ marginLeft: 8 }}>{article.source.name}</Tag>}
      </Paragraph>
      <Divider />
      <Paragraph>{article.content}</Paragraph>
      <Paragraph><a href={article.url} target="_blank" rel="noopener noreferrer">Baca selengkapnya</a></Paragraph>
    </div>
  );
};

export default ArticleDetail;