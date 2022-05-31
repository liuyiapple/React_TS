### 基于React  18  TypeScript 项目和

### 项目初始化

yarn & npm i 

### 项目启动

yarn start & npm run start

### hooks函数

```tsx
    import { useHistory,useParams,useLocation } from "react-router-dom"
    const history = useHistory()
    const params = useParams()
    const location = useLocation()
```


### Link标签的实现原理
```tsx
    <Link/>标签的实现原理
    interface LinkProps {
        to:string
    }

    const Link:React:FC<LinkProps> = ({children,to}) => {
        const history = useHistory()
        return (
            <a herf={to} onCLick = {() => {history.push(to)}}>
                {children}
            <a/>
        )
    }
```

