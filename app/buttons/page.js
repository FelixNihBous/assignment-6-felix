import React from 'react';
import { Button, Space } from 'antd';

const Assignment6 = () => {
  return (
    <div style={{ padding: '24px', backgroundColor: '#FFC5D3', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
      <h1 style={{ color: 'black' }}>Ant Design Buttons</h1>
      <Space direction="vertical" size="middle">
        <Button type="primary">Primary Button</Button>
        <Button type="dashed" danger>Dashed Danger</Button>
        <Button type="default" disabled>Disabled Default</Button>
        <Button type="link">Link Button</Button>
        <Button type="primary" ghost>Ghost Primary</Button>
      </Space>
    </div>
  );
};

export default Assignment6;