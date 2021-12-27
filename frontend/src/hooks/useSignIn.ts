import React, { useCallback, useContext } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

import { LoginUserContext } from '../App';
import { DEFAULT_API_URL } from '../urls';
import { SignInType } from '../types';

export const useSignIn = () => {
  const { setCurrentUser } = useContext(LoginUserContext)
  const navigate           = useNavigate();

  const signIn = useCallback((params: SignInType) => {
    axios.post(`${DEFAULT_API_URL}/api/auth/sign_in`, params)
    .then((res) => {
      if (res.status === 200) {
        Cookies.set('access-token', res.headers['access-token'])
        Cookies.set('client', res.headers['client'])
        Cookies.set('uid', res.headers['uid'])
        setCurrentUser(res.data.data)
        navigate("/")
        alert('ログインしました')
      }
    })
    .catch(() => alert('メールアドレス、もしくはパスワードに誤りがあります'))
  }, [])
  return { signIn }
}
