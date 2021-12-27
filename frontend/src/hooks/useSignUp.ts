import { useCallback, useContext } from 'react'
import axios from 'axios'
import Cookies from "js-cookie"

import { SignUpType } from '../types'
import { DEFAULT_API_URL } from '../urls'
import { LoginUserContext } from '../App'
import { useNavigate } from 'react-router-dom'

export const useSignUp = () => {
  const { setCurrentUser } = useContext(LoginUserContext)
  const navigate           = useNavigate();

  const signUp = useCallback((params: SignUpType) => {
    axios.post(`${DEFAULT_API_URL}/api/auth`, params)
    .then((res) => {
      if (res.status === 200) {
        Cookies.set('access-token', res.headers['access-token']);
        Cookies.set('client', res.headers['client']);
        Cookies.set('uid', res.headers['uid']);
        setCurrentUser(res.data.data)
        navigate("/")
        alert("新規登録ありがとうございます")
      } else {
        alert("入力に誤りがあります")
      }
    })
    .catch(() => alert("もう一度入力してください"))
  }, [])
  return {signUp}
}
