import React from "react";

import { Image,Typography } from "antd"

// 导入withRouter 这种高阶组件
// 导入RouteComponentProps 让下面定义的interface继承属性 就不会报错了
import { withRouter,RouteComponentProps } from "react-router-dom"

// 定义泛型
interface PropsType extends RouteComponentProps {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}
const ProductImageComponent: React.FC<PropsType> = ({id,size,imageSrc,price,title,history,location,match}) => {
  return <div onClick={() => history.push(`register/${id}`)}>
    {
      size === "large" ? (<Image  src={imageSrc} height={285} width={550}/>) :
      (<Image  src={imageSrc} height={120} width={240}/>)
    }
    <div>
      <Typography.Text type="secondary">{title.slice(0,25)}</Typography.Text>
      <Typography.Text type="danger" strong>{price}</Typography.Text>
    </div>
  </div>;
};
// 使用withRouter包裹ProductImageComponent 这样就可以在组件里面 进行高阶组件的写法了
export const  ProductImage = withRouter(ProductImageComponent)
