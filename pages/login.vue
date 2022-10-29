<template>
  <div class="flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="w-full max-w-md">
      <div class="flex flex-col items-center">
        <Icon name="logos:nuxt-icon" size="80" />
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-700">登入帳號</h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form class="space-y-6" @submit.prevent="handleEmailLogin">
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">電子信箱</label>
              <div class="mt-1">
                <input id="email" v-model="loginData.email" name="email" type="email" autocomplete="email" required
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">密碼</label>
              <div class="mt-1">
                <input id="password" v-model="loginData.password" name="password" type="password"
                  autocomplete="current-password" required
                  class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-emerald-500 sm:text-sm" />
              </div>
            </div>

            <div>
              <button type="submit"
                class="flex w-full justify-center rounded-md border border-transparent bg-emerald-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                登入
              </button>
            </div>
          </form>

          <div class="my-4 flex items-center backdrop:relative">
            <div class="flex-grow border-t border-gray-200"></div>
            <span class="mx-4 flex-shrink text-gray-300">或</span>
            <div class="flex-grow border-t border-gray-200"></div>
          </div>

          <div class="flex flex-col space-y-2">
            <button type="button"
              class="group relative flex w-full justify-center rounded-md border border-gray-100 bg-white py-2 px-4 text-sm font-medium shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              @click="navigateTo('/register')">
              <span class="text-slate-500 group-hover:text-slate-600">使用電子信箱註冊</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/stores/user'

const { push: pushNotify } = useNotification()
const userStore = useUserStore()

const loginData = reactive({
  email: '',
  password: ''
})

const handleEmailLogin = async () => {
  const { data, error } = await userStore.emailLogin(toRaw(loginData))

  if (data.value) {
    pushNotify('success', '登入成功', '請等待頁面自動跳轉')
    navigateTo('/')
  } else {
    pushNotify('error', '登入失敗', error.value?.data?.message ?? '未知錯誤')
  }
}

definePageMeta({
  layout: false
})
</script>
