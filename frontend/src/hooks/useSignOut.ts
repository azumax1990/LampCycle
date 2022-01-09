import axios from 'axios'
import Cookies from 'js-cookie';
import { useContext } from 'react';
import { LoginUserContext } from '../App';
import { DEFAULT_API_URL } from '../urls'

export const useSignOut = () => {
  const { setCurrentUser } = useContext(LoginUserContext)

  // ログアウトAPI
  const signOut = () => {
    axios.delete(`${DEFAULT_API_URL}/api/auth/sign_out`, { headers: {
      "access-token": Cookies.get("access-token") || "",
      "client": Cookies.get("client") || "",
      "uid": Cookies.get("uid") || ""
    }})
    .then((res) => {
      if (res.status === 200) {
        Cookies.remove("access-token")
        Cookies.remove("client")
        Cookies.remove("uid")
        setCurrentUser(undefined)
        alert("ログアウトしました")
      }
    })
    .catch(() => alert("ログアウト出来ませんでした"))
  }
  return {signOut}
}
