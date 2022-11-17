import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { IconName } from './Icon'
import { Icon } from './Icon'
import s from './FloatButton.module.scss'
export const FloatButton = defineComponent({
  props: {
    iconName: {
      type: String as PropType<IconName>,
      required: true,
    },
  },
  setup: (props) => {
    return () => (
      <div class={s.floatButton}>
        <Icon name={props.iconName} class={s.icon} />
      </div>
    )
  },
})
