import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import cloud from '../../assets/icons/cloud.svg'
import s from './WelcomeLayout.module.scss'
import { WelcomeLayout } from './WelcomeLayout'
export const Forth = defineComponent({
  setup: (props, context) => {
    return () => (
      <WelcomeLayout>
        {{
          icon: () => <img class={s.icon} src={cloud} />,
          title: () => <h2>每日提醒<br />不遗漏每一笔账单</h2>,
          buttons: () => <>
            <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
            <RouterLink to="/start" >完成</RouterLink>
            <RouterLink class={s.fake} to="/start" >跳过</RouterLink>
          </>,

        }}
      </WelcomeLayout>
    )
  },
})
