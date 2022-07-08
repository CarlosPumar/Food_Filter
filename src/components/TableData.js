import PropTypes from 'prop-types';
import { Table } from 'antd';

const TableData = ({ data }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Tag line',
      dataIndex: 'tagline',
      key: 'tagline',
    },
    {
      title: 'First Brewed',
      dataIndex: 'first_brewed',
      key: 'first_brewed',
    },
  ];

  const dataSource = data.map((element) => {
    return {
      key: element.id,
      name: element.name,
      tagline: element.tagline,
      first_brewed: element.first_brewed,
    };
  });

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 6, size: 'small' }}
      style={{ margin: '10px' }}
    />
  );
};

TableData.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      tagline: PropTypes.string,
      first_brewed: PropTypes.string,
    }),
  ),
};

TableData.defaultProps = {
  data: [],
};

export default TableData;
