import {useModal} from "~/stores/modal";
import {ComponentInstance} from "@vue/devtools-api";

interface ModalService {
  open(component: ComponentInstance): void,
  close(): void
}

export class ModalServiceImpl implements ModalService {
  private modalStore = useModal()

  constructor() {}

  close() {
    this.modalStore.close()
  }

  open(component: ComponentInstance): void {
    this.modalStore.open(component)
  }
}
