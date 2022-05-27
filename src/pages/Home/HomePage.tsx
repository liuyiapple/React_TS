import React from "react";
// 导入Home页面的css
import styles from "./HomePage.module.css";

import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProducetCollection,
} from "../../components";
import { Row, Col, Typography } from "antd";
// 产品推荐列表
import { productList1, productList2, productList3 } from "./mockup";
// 侧边展示图片
import sideImage1 from "../../assets/images/sider_2019_02-04-2.png";
import sideImage2 from "../../assets/images/sider_2019_02-04.png";
import sideImage3 from "../../assets/images/sider_2019_12-09.png";


import { Link } from "react-router-dom";

export class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* 页面content */}
        <div className={styles["page-content"]}>
          <Row style={{ marginTop: 20 }}>
            <Col span={6}>
              <SideMenu />
            </Col>
            <Col span={18}>
              <Carousel />
            </Col>
          </Row>
          {/*  推荐列表组件  */}
          <ProducetCollection
            title={
              <Typography.Title level={3} type={"warning"}>
                爆款推荐
              </Typography.Title>
            }
            sideImage={sideImage1}
            products={productList1}
          />
          <ProducetCollection
            title={
              <Typography.Title level={3} type={"danger"}>
                新品上市
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList2}
          />
          <ProducetCollection
            title={
              <Typography.Title level={3} type={"success"}>
                国内游与i见{" "}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList3}
          />
        </div>
        <Footer />
      </>
    );
  }
}
