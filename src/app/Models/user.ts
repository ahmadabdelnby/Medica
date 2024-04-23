export interface User {
  role: UserRole | null;
  nid: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  password: string;
  confirmPassword: string;
}

export enum UserRole {
  Admin = 'admin',
  Doctor = 'doctor',
  Patient = 'patient',
  Cashier = 'cashier',
}
