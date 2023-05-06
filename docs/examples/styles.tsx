import React from 'react';
import '../../assets/index.less';
import Pagination from '../../src/Pagination';

const App: React.FC = () => (
  <Pagination defaultCurrent={2} total={25} style={{ margin: '100px' }} />
);

export default App;
