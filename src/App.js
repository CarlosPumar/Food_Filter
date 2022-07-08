import { useEffect, useState } from 'react';
import { Layout, Input } from 'antd';
import useFilter from './services/food';
import TableData from './components/TableData';

const { Content } = Layout;

const App = () => {
  const [search, setSearch] = useState('');
  const [data, filter] = useFilter();

  useEffect(() => {
    filter(search);
  }, [search, filter]);

  return (
    <Layout
      className="layout"
      style={{ height: '100vh', backgroundColor: '#368a52' }}
    >
      <Content
        className="content"
        style={{
          margin: '7.5% 20%',
          backgroundColor: '#e3e6e4',
          borderRadius: '16px',
          boxShadow: '-24px 24px 30px 0px #2e7546',
        }}
      >
        <Input
          placeholder="Type to search"
          type="text"
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          style={{ margin: '5%', width: '80%' }}
        />
        <TableData data={data} />
      </Content>
    </Layout>
  );
};

export default App;
