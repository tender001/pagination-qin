import React from 'react';
import '../../assets/index.less';
import Pagination from '../../src/Pagination';

const App: React.FC = () => (
  <Pagination className="ant-pagination" defaultCurrent={3} total={450} />
);

export default App;
