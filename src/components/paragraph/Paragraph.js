import { Typography } from "antd";

export function Paragraph({ children }) {
  return (
    <Typography.Paragraph level={1}>{ children }</Typography.Paragraph>
  )
}