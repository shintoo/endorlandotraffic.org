import { useState, useEffect } from "react"
import copy from 'copy-to-clipboard'
import styles from "./CopyButton.module.css"

export default function CopyButton({textToCopy, text}) {
  const [ classes, setClasses ] = useState([styles.button])
  const [ buttonText, setButtonText ] = useState(text || "Copy")

  useEffect(_ => setButtonText(text), [text])

  const copyText = _ => {
    const success = copy(textToCopy)
    setTimeout(() => { setButtonText(text || "Copy"); setClasses([styles.button]); }, 700)

    if (success) {
      setButtonText("Copied!")
      setClasses([styles.button, styles.copied])
    } else {
      setButtonText("Error copying :(")
    }
  }

  return (
    <div onClick={copyText} className={classes.join(" ")}>
      {buttonText}
    </div>
  )
}
