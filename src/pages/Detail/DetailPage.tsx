import React from "react";
import styles from "./Detail.module.css";
import { RouteComponentProps } from "react-router-dom";
interface MatchParams {
  touristRouteId: string;
}
export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  console.log(props.history);
  console.log(props.location);
  console.log(props.history);
  return <h1> 路线的详细页面：路线的ID：{props.match.params.touristRouteId}</h1>;
};
