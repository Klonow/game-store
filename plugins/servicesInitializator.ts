import {defineNuxtPlugin} from "#app";
import {authService, modalService} from "~/services/services";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      services: {
        auth: authService(),
        modal: modalService(),
      }
    }
  }
})
