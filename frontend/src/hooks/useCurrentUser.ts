import React, { useCallback } from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';

import { DEFAULT_API_URL } from '../urls';

export const useCurrentUser = () => {
  
  // ログインユーザーを取得API
  const getCurrentUser = useCallback(() => {
    if (Cookies.get("access-token") && Cookies.get("client") && Cookies.get("uid")) {
      return axios.get(`${DEFAULT_API_URL}/api/auth/sessions`, { headers: {
        "access-token": Cookies.get("access-token") || "",
        "client": Cookies.get("client") || "",
        "uid": Cookies.get("uid") || ""
      }})
    }
  }, [])
  return { getCurrentUser }
}