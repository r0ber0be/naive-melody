import { Typography } from "antd";

export function Title({ title }) {
  return (
    <Typography.Title level={4} style={{ margin: 0 }}>{ title }</Typography.Title>
  )
}