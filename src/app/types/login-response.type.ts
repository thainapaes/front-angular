import { User } from "../model/User"

export type LoginResponse = {
  token: string,
  user: User
}
