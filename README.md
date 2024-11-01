# СAD-TEST-FRONTEND🦄

Fronted test app  
Link - [Click](http://cutletka.ru:2300/)

## Installation

Yarn

```bash
yarn
yarn dev
```

Npm

```bash
npm i
npm run dev
```

## Stack

[![next.js](https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/ru/)

[![next.js](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)

[![next.js](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[![next.js](https://img.shields.io/badge/Ant%20Design-1890FF?style=for-the-badge&logo=antdesign&logoColor=white)](https://ant.design/)


## Styles
For styles I used [styleX](https://stylexjs.com/) it is a new ccs in js library combining convenience and quickness. 

![stylex example](https://i.ibb.co/V3P1dFB/Screenshot-8.png)

I also added a theme provider for the ui library that globally specified styles for its copmonents.  

```jsx
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
```