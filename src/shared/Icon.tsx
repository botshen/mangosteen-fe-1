import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import s from './Icon.module.scss'
export const Icon = defineComponent({
  props: {
    name: {
      type: String as PropType<'add' | 'chart' | 'clock' | 'cloud' | 'mangosteen' | 'pig'>,
    },
  },
  setup: (props) => {
    return () => (
      <svg class={s.icon}>
        <use xlinkHref={`#${props.name}`}></use>
      </svg>
    )
  },
})
