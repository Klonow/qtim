import type { Post } from '~/types/Post'

export function usePostsApi(): Promise<Post[]> {
  return useHttpGet<Post[]>('posts', { lazy: true });
}

export function usePostApi(id: string): Promise<Post> {
  return useHttpGet<Post>(`posts/${id}`, { lazy: true })
}