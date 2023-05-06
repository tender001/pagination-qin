/* eslint func-names: 0, no-console: 0 */
import Select from 'rc-select';
import 'rc-select/assets/index.less';
import React from 'react';
import '../../assets/index.less';
import localeInfo from '../../src/locale/en_US';
import Pagination from '../../src/Pagination';

function onShowSizeChange(current, pageSize) {
  console.log(current);
  console.log(pageSize);
}

function onChange(current, pageSize) {
  console.log('onChange:current=', current);
  console.log('onChange:pageSize=', pageSize);
}

const App: React.FC = () => (
  <Pagination
    selectComponentClass={Select}
    showQuickJumper
    showSizeChanger
    defaultPageSize={20}
    defaultCurrent={5}
    onShowSizeChange={onShowSizeChange}
    onChange={onChange}
    total={450}
    locale={localeInfo}
  />
);

export default App;
