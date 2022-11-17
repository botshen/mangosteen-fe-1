import { defineComponent } from 'vue'
import { Button } from '../shared/Button'
import { FloatButton } from '../shared/FloatButton'
import s from './StartPage.module.scss'
export const StartPage = defineComponent({
  setup: () => {
    const onClick = () => { }
    return () => (
      <div>
        <div class={s.button_wrapper}>
          <Button class={s.button} onClick={onClick}>测试</Button>
        </div>
        <FloatButton />
      </div>
    )
  },
})
