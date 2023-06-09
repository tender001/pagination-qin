/* eslint func-names: 0, no-console: 0 */
import Select from 'rc-select';
import 'rc-select/assets/index.less';
import React from 'react';
import '../../assets/index.less';
import Pagination from '../../src/Pagination';

class App extends React.Component {
  state = {
    pageSize: 15,
  };

  onShowSizeChange = (current, pageSize) => {
    console.log(current);
    this.setState({ pageSize });
  };

  render() {
    const { pageSize } = this.state;
    return (
      <div style={{ margin: 10 }}>
        <Pagination
          selectComponentClass={Select}
          showSizeChanger
          pageSize={pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={40}
        />
        <Pagination
          selectComponentClass={Select}
          pageSize={pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={50}
        />
        <Pagination
          selectComponentClass={Select}
          pageSize={pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={60}
        />
        <Pagination
          selectComponentClass={Select}
          showSizeChanger={false}
          pageSize={pageSize}
          onShowSizeChange={this.onShowSizeChange}
          defaultCurrent={3}
          total={60}
        />
      </div>
    );
  }
}

export default App;
