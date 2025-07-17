import { Card, Skeleton, Input, Row, Col, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchArticles } from '../../infrastructure/api/newsApi';
import type { Article } from '../../domain/entities/Article';

const { Search } = Input;

const fallbackImage = 'https://www.kuonitumlare.com/documents/d/kuonitumlare/1_japan_body';

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchArticles().then((data) => {
      setArticles(data);
      setFilteredArticles(data);
      setLoading(false);
    });
  }, []);

  const onSearch = (value: string) => {
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredArticles(filtered);
  };

  return (
    <div>
      <Search placeholder="Cari artikel..." onSearch={onSearch} enterButton style={{ marginBottom: 20 }} />
      {loading ? (
        <Skeleton active paragraph={{ rows: 8 }} />
      ) : (
        <Row gutter={[16, 16]}>
          {filteredArticles.map((item, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                cover={<img alt="thumbnail" src={item.urlToImage != null ? item.urlToImage : fallbackImage} style={{ height: 180, objectFit: 'cover' }} />}
                onClick={() => navigate(`/article/${index}`, { state: item })}
              >
                <Card.Meta title={item.title} description={item.description} />
                <div style={{ marginTop: 8 }}>
                  {item.source?.name && <Tag color="blue">{item.source.name}</Tag>}
                  {item.author && <Tag color="green">{item.author}</Tag>}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ArticleList;