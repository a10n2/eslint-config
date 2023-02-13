import { useState, useEffect } from 'react'

export default function HelloWorld() {
  const [msg, setMsg] = useState<string>('Hello world')
  useEffect(() => {
    if (msg === 'Hello world') {
      console.log('-', msg)
    }
  })
  return <div>{msg}</div>
}
