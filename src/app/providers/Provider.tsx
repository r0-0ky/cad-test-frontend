import { ConfigProvider } from "antd";
import { AntdRegistry } from '@ant-design/nextjs-registry';

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#2c2c2c',
            fontFamily: 'inherit',
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  )
}