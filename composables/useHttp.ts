import type { AsyncDataOptions } from "nuxt/app"

type RequestOptions = Record<string, any> 

export const fetchConfig = {
  baseURL: "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/",
}

export async function useHttp<T>(url: string, options: RequestOptions = {}): Promise<T> {
  options.baseURL = options.baseURL ?? fetchConfig.baseURL

  return await $fetch<T>(url, options).then((res: T) => {
    return res
  }).catch((err) => {
      console.log(err?.data?.data)
  })
}

export function useHttpGet<T>(url: string, options: RequestOptions = {}) {
  options.method = 'GET'
  return useHttp<T>(url ,options)
}
