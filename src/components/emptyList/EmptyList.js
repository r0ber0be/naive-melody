import { Empty } from 'antd'
import './EmptyList.css'

export function EmptyList() {
  return (
    <Empty className='empty-list' description="Parece que não há nenhuma carta registrada. Que tal começar a adicionar algumas?" />
  )
}