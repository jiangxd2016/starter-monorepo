import React from 'react';
import { ConfigProvider, Empty } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import Nodata from '@/assets/no-data.svg';
import { Home } from './views/home';

dayjs.locale('zh-cn');

const App = () => {
  return (
    <ConfigProvider locale={zhCN} renderEmpty={() => <Empty image={Nodata}> </Empty>}>
      <Home></Home>
    </ConfigProvider>
  );
};

export default App;
