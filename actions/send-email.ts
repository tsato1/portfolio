// Ctr+A -> uncomment

// 'use server'

// // import { Config } from 'sst/node/config' //...todo-(1)

// import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

// import { getErrorMessage, validateConfirmEmail, validateEmail, validateString } from "@/libs/utils"
// import { MAX_LENGTH_EMAIL, MAX_LENGTH_MESSAGE, MAX_LENGTH_NAME, MAX_LENGTH_SUBJECT, MIN_LENGTH_EMAIL, MIN_LENGTH_MESSAGE, MIN_LENGTH_NAME, MIN_LENGTH_SUBJECT } from '@/libs/constants'

// /**
//  * todo-(1)// right now, next js 14 doesn't support top-level await in server actions
//  * therefore, Config.KEY won't work (it uses top-level await)
//  * 
//  * wait until next js supports top-level await in server actions, and then use Config
//  * using .env for now
//  */
// const sesConfig = {
//   credentials: {
//     // accessKeyId: Config.AWS_SES_API_KEY as string, //...todo-(1)
//     // secretAccessKey: Config.AWS_SES_API_SECRET as string, //...todo-(1)
//     accessKeyId: process.env.AWS_SES_API_KEY as string,
//     secretAccessKey: process.env.AWS_SES_API_SECRET as string
//   },
//   // region: Config.AWS_SES_REGION as string...todo-(1)
//   region: process.env.AWS_SES_REGION as string
// }

// const ses = new SESClient(sesConfig)

// export const sendEmail = async (formData: FormData) => {
//   const rawName = formData.get("name")
//   const rawEmail = formData.get("email")
//   const rawConfirmEmail = formData.get("confirm_email")
//   const rawSubject = formData.get("subject")
//   const rawMessage = formData.get("message")

//   if (!validateString(rawName, MIN_LENGTH_NAME, MAX_LENGTH_NAME)) {
//     return { error: "Invalid Name" }
//   }
//   if (!validateString(rawEmail, MIN_LENGTH_EMAIL, MAX_LENGTH_EMAIL)) {
//     return { error: "Invalid email" }
//   }
//   if (!validateString(rawConfirmEmail, MIN_LENGTH_EMAIL, MAX_LENGTH_EMAIL)) {
//     return { error: "Invalid Confirm Email" }
//   }
//   if (!validateString(rawSubject, MIN_LENGTH_SUBJECT, MAX_LENGTH_SUBJECT)) {
//     return { error: "Invalid Subject" }
//   }
//   if (!validateString(rawMessage, MIN_LENGTH_MESSAGE, MAX_LENGTH_MESSAGE)) {
//     return { error: "Invalid message" }
//   }

//   const name = rawName as string
//   const email = rawEmail as string
//   const confirmEmail = rawConfirmEmail as string
//   const subject = rawSubject as string
//   const message = rawMessage as string

//   // if (!validateString2(name)) {
//   //   return { error: "Name consists of invalid characters." }
//   // }
//   if (!validateEmail(email)) {
//     return { error: "Provided email is not in valid email format." }
//   }
//   if (!validateConfirmEmail(email, confirmEmail)) {
//     return { error: "ConfirmEmail is not the same as the email." }
//   }
//   // if (!validateString2(subject)) {
//   //   return { error: "Subject consists of invalid characters." }
//   // }
//   // if (!validateString2(message)) {
//   //   return { error: "Message consists of invalid characters." }
//   // }

//   console.log(`provided name is: ${name}`)
//   console.log(`provided email is: ${email}`)
//   console.log(`provided subject is: ${subject}`)
//   console.log(`provided message is: ${message}`)

//   let params = {
//     Source: process.env.AWS_SES_SENDER_EMAIL as string,
//     Destination: {
//       // ToAddresses: [Config.AWS_SES_SENDER_EMAIL]...todo-(1)
//       ToAddresses: [email]
//     },
//     ReplyToAddresses: [process.env.AWS_SES_SENDER_EMAIL as string],
//     Message: {
//       Body: {
//         Html: {
//           Charset: 'UTF-8',
//           Data: `<h1>Name: ${name}</h1><br /><br /><h2>Email: ${email}</h2><br /><br /><p>Message: ${message}</p>`
//         },
//         Text: {
//           Charset: 'UTF-8',
//           Data: `Name: ${name}, Email: ${email}, Message: ${message}`
//         }
//       },
//       Subject: {
//         Charset: 'UTF-8',
//         Data: `Your message was sent: ${subject}`
//       }
//     }
//   }

//   try {
//     const sendEMailCommand = new SendEmailCommand(params)
//     const res = await ses.send(sendEMailCommand)
//     console.log(`MessageId = ${res.MessageId}`)
//     return { data: res.MessageId }
//   } catch (error: unknown) {
//     console.log(error)
//     return {
//       error: getErrorMessage(error)
//     }
//   }
// }








// // const templateName = 'SES Test Template'
// // export const createTemplateEmail = async () => {
// //   const createTemplateCommand = new CreateTemplateCommand({
// //     Template: {
// //       TemplateName: templateName,
// //       HtmlPart: `
// //         <h1>Hello, {{name}}!</h1>
// //         <p>asdf asdf asdf </p>
// //       `,
// //       TextPart: `
// //         <p>This is the text part</p>
// //       `,
// //       SubjectPart: `This is subject`
// //     }
// //   })

// //   try {
// //     const res = await ses.send(createTemplateCommand)
// //     console.log('Create Template is successfull', res)
// //   } catch (error) {
// //     console.log(error)
// //   }
// // }

// // const sendTemplateEmail = async (formData: FormData) => {
// //   const sendTemplatedEmailCommand = new SendTemplatedEmailCommand({
// //     Destination: {
// //       ToAddresses: [
// //         ''
// //       ]
// //     },
// //     Source: Config.AWS_SES_SENDER_EMAIL,
// //     Template: templateName,
// //     TemplateData: JSON.stringify({ name: 'asdf' })
// //   })

// //   try {
// //     const res = ses.send(sendTemplatedEmailCommand)
// //     console.log(res)
// //   } catch(error) {
// //     console.log(error)
// //   }
// // }