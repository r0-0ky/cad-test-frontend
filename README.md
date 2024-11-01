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
For stylex processing, I hooked up babel.

![stylex example](https://i.ibb.co/V3P1dFB/Screenshot-8.png)

I also added a theme provider for the ui library that globally specified styles for its copmonents.  

```tsx
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
## Cases

### SEO

For seo I added headers and description for og and twitter. I also added an image. 

```tsx
export const metadata: Metadata = {
  title: "CDA test app",
  description: "Created with love",
  openGraph: {
    title: "CDA test app",
    description: "Created with love",
  },
  twitter: {
    title: "CDA test app",
    description: "Created with love",
  }
}
```

### State managment

I used react's built-in context to embed the state-state into the dom tree. I chose this solution rather than a third-party state manager because there are not that many states and this is enough for such a simple web site.

```tsx
export const FormContext = createContext<FromContextType>({
  setIsRequest: () => '',
  setRequestMessage: () => ''
})
```

### Video player

For the video player I used react-player, which allows you to conveniently play media from any textbooks.  
For video uploading I used skelletot from antd ui, which adds pluses to the ux side of the web site.

```tsx
<div {...stylex.props(styles.video)}>
  <Skeleton.Node active style={{ width: '100%', height: '100%', position: 'absolute', top: 0, bottom: 0 }} />
  <ReactPlayer style={{top: 0, bottom: 0, position: 'absolute'}} width={'100%'} height={'100%'} url='https://www.youtube.com/watch?v=dQw4w9WgXcQ' controls={true} />
</div>
```

### Form

For the form I used the form from antd ui, it handles errors conveniently and it is easy to control field states with it.

```tsx
export const CustomForm: React.FC = () => {
  const [form] = Form.useForm();
  const { setIsRequest, setRequestMessage } = useContext(FormContext)
  const [submittable, setSubmittable] = useState(false);
  const values = Form.useWatch([], form);

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    postData(values)
      .then(data => {
        setIsRequest(true)
        setRequestMessage(data);
      })
      .catch(() => {
        console.log('Something went wrong');
      })
  };

  useEffect(() => {
    form
      .validateFields()
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Form
      {...stylex.props(styles.form)}
      form={form}
      layout="vertical"
      onFinish={onFinish}
      autoComplete="off"
      style={{padding: 20, margin: '0px auto'}}
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, type: 'string' }]}
      >
        <Input {...stylex.props(styles.input)} placeholder="Value" />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ required: true, type: 'email' }]}
      >
        <Input placeholder="Value" />
      </Form.Item>
      <Form.Item
        name="message"
        label="Message"
        rules={[{ required: true, type: 'string'}]}
      >
        <Input.TextArea autoSize={false} placeholder="Value" />
      </Form.Item>
      <Form.Item style={{ margin: 0}}>
        <Button {...stylex.props(styles.formButton)} type="primary" block htmlType="submit" disabled={!submittable}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}
```