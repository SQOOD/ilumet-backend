import {
  mutationField,
  stringArg,
  intArg,
  queryField
} from 'nexus'
import { getUserId } from '../utils/constants'
import { compare, hash } from 'bcrypt'
import {
  generateAccessToken,
  generateRefreshToken,
  generateForgotToken,
  handleError,
} from '../utils/helpers'
import { errors } from '../utils/errors'
import axios from 'axios'

export const me = queryField('me', {
  type: 'User',
  resolve(_parent, _args, ctx) {
    const userId = getUserId(ctx)
    return ctx.prisma.user.findOne({
      where: {
        id: userId,
      },
    })
  },
})

export const signup = mutationField('signup', {
  type: 'AuthPayload',
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
    name: stringArg({ required: true }),
    class_year: intArg({ required: true }),
    phone: stringArg({ required: true }),
    // recaptchaToken: stringArg({ required: true }),
  },
  resolve: async (_parent, { 
    email,
    password,
    name,
    class_year,
    phone,
    // recaptchaToken
  }, ctx) => {
    const hashedPassword = await hash(password, 10)
    const user = await ctx.prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        class_year,
        phone,
        // recaptchaToken
      },
    })
    // const recaptchaData = {
    //   secret: '6LeVg9gUAAAAAAGT2-JiqaNWmlpfVw4S7X4TOqiG',
    //   response: recaptchaToken
    // }

    // const resultCaptcha = await axios({
    //   method: 'post',
    //   url: 'https://www.google.com/recaptcha/api/siteverify',
    //   data: recaptchaData,
    //   params: recaptchaData
    // })

    // if (resultCaptcha.data.success === true) {
      const [accessToken, refreshToken] = [
        generateAccessToken(user.id),
        generateRefreshToken(user.id)
      ]
      ctx.response.cookie('refreshToken', refreshToken, {
        httpOnly: true,
      })

      // const result = resultCaptcha.statusText
      return {
        accessToken,
        user,
        // result
      }
    // } else {
    //   handleError(errors.invalidCaptcha)
    // }
  },
})

export const login = mutationField('login', {
  type: 'AuthPayload',
  args: {
    email: stringArg({ required: true }),
    password: stringArg({ required: true }),
    // recaptchaToken: stringArg({ required: true }),
  },
  resolve: async (_parent, { email, password, /*recaptchaToken*/ }, ctx) => {
    let user = null
    try {
      user = await ctx.prisma.user.findOne({
        where: {
          email,
        },
      })
    } catch (e) {
      handleError(errors.invalidUser)
    }

    if (!user) handleError(errors.invalidUser)

    const passwordValid = await compare(password, user.password)
    if (!passwordValid) handleError(errors.invalidUser)
    
    // const recaptchaData = {
    //   secret: '6LeVg9gUAAAAAAGT2-JiqaNWmlpfVw4S7X4TOqiG',
    //   response: recaptchaToken
    // }

    // const resultCaptcha = await axios({
    //   method: 'post',
    //   url: 'https://www.google.com/recaptcha/api/siteverify',
    //   data: recaptchaData,
    //   params: recaptchaData
    // })

    // if (resultCaptcha.data.success === true) {
      const [accessToken, refreshToken] = [
        generateAccessToken(user.id),
        generateRefreshToken(user.id)
      ]
      ctx.response.cookie('refreshToken', refreshToken, {
        httpOnly: true,
      })

      // const result = resultCaptcha.statusText
      return {
        accessToken,
        user,
        // result
      }
  //   } else {
  //     handleError(errors.invalidCaptcha)
  //   }
  },
})

export const forgotpassword = mutationField('forgotpassword', {
  type: 'AuthPayload',
  args: {
    email: stringArg({ required: true }),
    recaptchaToken: stringArg({ required: true }),
  },
  resolve: async (_parent, { email, recaptchaToken }, ctx) => {
    let user = null
    try {
      user = await ctx.prisma.user.findOne({
        where: {
          email,
        },
      })
    } catch (e) {
      handleError(errors.invalidMail)
    }

    if (!user) handleError(errors.invalidMail)

    const emailValid = await (email === user.email)
    if (!emailValid) handleError(errors.invalidMail)

    const recaptchaData = {
      secret: '6LeVg9gUAAAAAAGT2-JiqaNWmlpfVw4S7X4TOqiG',
      response: recaptchaToken
    }

    const resultCaptcha = await axios({
      method: 'post',
      url: 'https://www.google.com/recaptcha/api/siteverify',
      data: recaptchaData,
      params: recaptchaData
    })

    if (resultCaptcha.data.success === true) {
      const [accessToken, refreshToken] = [
        generateForgotToken(user.id),
        generateRefreshToken(user.id)
      ]
      ctx.response.cookie('refreshToken', refreshToken, {
        httpOnly: true,
      })

      const result = resultCaptcha.statusText
      return {
        accessToken,
        user,
        result
      }
    } else {
      handleError(errors.invalidCaptcha)
    }
  },
})