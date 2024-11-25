export interface AuthResponse {
  iduser: number;
  email: string;
  token: string;
  roles: Array<{ authority: string }>;
}
