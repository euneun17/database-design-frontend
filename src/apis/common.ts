import axios from 'axios'

export const REQUEST_URL = 'http://35.216.28.245:8080/api'

type AxiosType = 'GET' | 'POST' | 'PATCH' | 'DELETE' | 'PUT'

export const commonAxios =
  (type: AxiosType) =>
  async (url: string, params: any = {}, auth?: boolean) => {
    const accessToken = localStorage.getItem('local-access_token')
    const washedUrl = `${REQUEST_URL}/${url}`

    const headers: Record<string, string> = {}
    if (auth && accessToken) {
      headers['Authorization'] = `Bearer ${JSON.parse(accessToken)}`
    }

    if (type === 'GET') {
      return await axios.get(washedUrl, { params, headers })
    }
    if (type === 'POST') {
      return await axios.post(washedUrl, params, { headers })
    }
    if (type === 'PATCH') {
      return await axios.patch(washedUrl, params, { headers })
    }
    if (type === 'PUT') {
      return await axios.put(washedUrl, params, { headers })
    }
    if (type === 'DELETE') {
      return await axios.delete(washedUrl, { headers, data: params })
    }
  }

export type CommonResponseType<P> = {
  status: {
    type: 'success' | 'failed'
    message: string
  }
  data: P
}
