import React from 'react';
import '../../assets/index.less';
import Pagination from '../../src/Pagination';

const App: React.FC = () => (
  <>
    <Pagination simple defaultCurrent={1} total={50} />
    <br />
    <Pagination
      simple
      defaultCurrent={1}
      total={50}
      showTotal={(total) => `Total ${total} items`}
    />
  </>
);
export default App;
