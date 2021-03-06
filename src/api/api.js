import axios from 'axios'
export function getUser() {
  return axios({
    method: 'get',
    url: `${process.env.VUE_APP_BASE_URL}user`
  })
}
export function getArticle() {
  return axios({
    method: 'get',
    url: `${process.env.VUE_APP_BASE_URL}article`
  })
}
