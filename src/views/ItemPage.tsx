import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
export const ItemPage = defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
    },
  },
  setup: () => {
    return () => (
      <RouterView />
    )
  },
})
