import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { PostBike } from '../types'
import { DEFAULT_API_URL } from '../urls'

export const usePostBike = () => {
  const navigate = useNavigate();

  const onSubmitBike = (params: PostBike) => {
    axios.post(`${DEFAULT_API_URL}/api/bikes`, params)
    .then((res) => {
      if (res.status === 200) {
        alert("新しくバイクを登録しました")
        navigate("/")
      }
    })
    .catch(() => alert("もう一度入力して下さい"))
  }
  return { onSubmitBike }
}