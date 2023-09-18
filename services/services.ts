import {AuthRepositoryImpl} from "~/repositories/AuthRepository";
import {AuthServiceImpl} from "~/services/AuthService";
import {ModalServiceImpl} from "~/services/ModalService";

export function authService() {
  const authRepository = new AuthRepositoryImpl()

  return new AuthServiceImpl(authRepository)
}

export function modalService() {
  return new ModalServiceImpl()
}

