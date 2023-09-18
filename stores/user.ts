import {acceptHMRUpdate, defineStore} from "pinia";
import {computed, Ref, ref} from "@vue/reactivity";
import {Currency, Language} from "~/models/User";

interface UserState {
  language: Language,
  name: string,
  currency: Currency
}

export const useUser = defineStore('user', () => {
  const userState: Ref<UserState> = ref({
    language: Language.RUSSIA,
    name: 'Test Name',
    currency: Currency.USD
  })

  const currency = computed(() => userState.value.currency)

  const language = computed(() => userState.value.language)

  function setLanguage(language: Language) {
    userState.value.language = language
  }

  function setCurrency(currency: Currency) {
    userState.value.currency = currency
  }

  return {
    userState,
    setLanguage,
    setCurrency,
    currency,
    language,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot))
}
