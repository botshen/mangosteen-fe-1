import chart from '../../assets/icons/chart.svg'
import s from './welcome.module.scss'
export const Third = () => {
  return (
    <div class={s.card}>
      <img class={s.icon} src={chart} />
      <h2>每日提醒<br />不遗漏每一笔账单</h2>
    </div>
  )
}

Third.displayName = 'Third'
