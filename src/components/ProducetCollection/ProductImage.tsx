import React from "react";

import { Image,Typography } from "antd"

// 定义泛型
interface PropsType {
  id: string | number;
  size: "large" | "small";
  imageSrc: string;
  price: number | string;
  title: string;
}
export const ProductImage: React.FC<PropsType> = ({id,size,imageSrc,price,title}) => {
  return <>
    {
      size === "large" ? (<Image  src={imageSrc} height={285} width={550}/>) :
      (<Image  src={imageSrc} height={120} width={240}/>)
    }
    <div>
      <Typography.Text type="secondary">{title.slice(0,25)}</Typography.Text>
      <Typography.Text type="danger" strong>{price}</Typography.Text>
    </div>
  </>;
};
