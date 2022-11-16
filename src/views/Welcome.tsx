import type { VNode } from 'vue'
import { Transition, defineComponent } from 'vue'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { RouterView } from 'vue-router'
import logo from '../assets/icons/mangosteen.svg'
import s from './Welcome.module.scss'
export const Welcome = defineComponent({
  setup: () => {
    return () => <div class={s.wrapper}>
      <header>
        <img src={logo} />
        <h1>山竹记账</h1>
      </header>
      <main class={s.main}>
        <RouterView name="main">
          {({ Component: X }: { Component: VNode; route: RouteLocationNormalizedLoaded }) =>
            <Transition enterFromClass={s.slide_fade_enter_from} enterActiveClass={s.slide_fade_enter_active}
              leaveToClass={s.slide_fade_leave_to} leaveActiveClass={s.slide_fade_leave_active}>
              {X}
            </Transition>
          }
        </RouterView>
      </main>
      <footer>
        <RouterView name="footer" />
      </footer>
    </div>
  },
})
