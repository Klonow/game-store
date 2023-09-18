import {AuthRepository} from "~/repositories/AuthRepository";

interface AuthService {
  getUserImage(): Promise<string>
}

export class AuthServiceImpl implements AuthService {
  private authRepository: AuthRepository

  constructor(
    authRepository: AuthRepository,
  ) {
    this.authRepository = authRepository
  }

  getUserImage(): Promise<string> {
    return this.authRepository.getImageById(123123)
  }
}
