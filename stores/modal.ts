import {acceptHMRUpdate, defineStore} from "pinia";
import {ComponentInstance} from "@vue/devtools-api";
import {markRaw} from "@vue/reactivity";

interface ModalState {
  modal: ComponentInstance
}

export const useModal = defineStore('modal', {
  state: (): ModalState => ({
    modal: null,
  }),
  getters: {},
  actions: {
    open(modalInstance: ComponentInstance) {
      this.modal = markRaw(modalInstance)
    },
    close() {
      this.modal = null
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModal, import.meta.hot))
}
