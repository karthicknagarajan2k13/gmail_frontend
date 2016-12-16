// User model based on the structure of github api at
// https://api.github.com/users/{username}
export interface Email {
  to: string;
  subject: string;
  message: number;
}