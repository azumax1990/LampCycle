import React, { useCallback, useContext } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

import { LoginUserContext } from '../App';
import { DEFAULT_API_URL } from '../urls';

export const useCurrentUser = () => {
  const { setCurrentUser } = useContext(LoginUserContext)

  // ログインユーザーを取得API
  const getCurrentUser = useCallback(() => {
    if (!Cookies.get("access-token") || !Cookies.get("client") || !Cookies.get("uid")) return
    axios.get(`${DEFAULT_API_URL}/api/auth/sessions`, { headers: {
      "access-token": Cookies.get("access-token") || "",
      "client": Cookies.get("client") || "",
      "uid": Cookies.get("uid") || ""
    }})
    .then((res) => {
      if (res.status === 200) {
        setCurrentUser(res.data.user)
      } else {
        alert("ユーザーを取得出来ませんでした")
      }
    })
    .catch((res) => console.log(res))
    }, [])
  return {getCurrentUser}
}
