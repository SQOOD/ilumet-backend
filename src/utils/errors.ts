import { AuthenticationError, UserInputError } from 'apollo-server'

export const errors = {
  notAuthenticated: new AuthenticationError('Unauthenticated user!'),
  invalidUser: new UserInputError('Invalid username or password'),
  invalidMail: new UserInputError('Invalid username or email'),
  invalidCaptcha: new AuthenticationError('Captcha not solved'),
}
