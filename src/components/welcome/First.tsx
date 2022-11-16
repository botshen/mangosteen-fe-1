import type { FunctionalComponent } from 'vue'
import pig from '../../assets/icons/pig.svg'
import s from './welcome.module.scss'
export const First: FunctionalComponent = () => {
  return <div class={s.card}>
    <img src={pig}/>
    <h2>会挣钱<br />还会省钱</h2>
  </div>
}

First.displayName = 'First'
