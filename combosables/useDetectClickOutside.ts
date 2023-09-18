import {onBeforeUnmount, onMounted} from 'vue'
import {Ref} from "@vue/reactivity";

export default function useDetectOutsideClick(ref: Ref, callback: Function) {
  if (!ref) return

  const listener = (event: Event) => {
    if (event.target !== ref.value && event.composedPath().includes(ref.value)) {
      return
    }

    if (typeof callback === 'function') {
      callback()
    }
  }

  onMounted(() => {
    window.addEventListener('click', listener)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click', listener)
  })

  return { listener }
}
