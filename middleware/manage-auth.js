import { useUserStore } from '@/stores/user';

export default defineNuxtRouteMiddleware(() => {
  // 客户端触发导航
  if (process.client) {
    const userStore = useUserStore();

    if (!userStore.profile?.id) {
      return navigateTo('/login');
    }
  } else {
    // 服务端触发导航（直接通过网址进入页面）
    return navigateTo('/');
  }
});
