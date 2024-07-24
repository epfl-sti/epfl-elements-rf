import { useState, useEffect } from 'react'
import Cookies from 'universal-cookie'

type CsfrToken = {
  tokenName?: string;
  inputName?: string
}

export function CsfrToken ({ tokenName = 'csrftoken', inputName = 'csrfmiddlewaretoken' }: CsfrToken) {
  const [token, setToken] = useState<string>()

  useEffect(() => {
    const cookies = new Cookies()
    const cookietoken = cookies.get(tokenName)
    setToken(cookietoken)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getTokenInput = () =>
    <input
      type='hidden'
      name={inputName}
      value={token}
    />

  return (
    <>
      {token && getTokenInput()}
    </>
  )
}

