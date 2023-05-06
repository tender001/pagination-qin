import 'rc-select/assets/index.less';
import React, { useState } from 'react';
import '../../assets/index.less';
import Pagination from '../../src/Pagination';

const App: React.FC = () => {
  const [current, setCurrent] = useState(1);
  const onChange = (page) => {
    setCurrent(page);
  };
  return <Pagination onChange={onChange} current={current} total={25} />;
};

export default App;
