import { useState } from 'react'
import styles from './Expandable.module.css'

export default function Expandable(props) {
  const [ expanded, setExpanded ] = useState(props.defaultState)

  return (<div>
    <button className={styles.button} onClick={_ => setExpanded(!expanded)}>
      {props.title} <span className={styles.indicator}>{expanded ? <>&mdash;</> : "+"}</span>
    </button>
    <div className={[styles.expandable, expanded ? styles.expanded:""].join(" ")}>
      {props.children}
    </div>
  </div>)
}
