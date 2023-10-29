import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const validateString = (value: unknown, minLength: number, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length < minLength || value.length > maxLength) {
    return false
  }

  return true
}

const regexpValidEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
export const validateEmail = (email: string) => {
  if (!email || !regexpValidEmail.test(email)) {
    return false
  }
  
  return true
}

export const validateConfirmEmail = (email: string, confirmEmail: string) => {
  if (!email || !confirmEmail || email !== confirmEmail) {
    return false
  }

  return true
}

const regexpValidString = new RegExp(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/)
export const validateString2 = (value: string) => {
  if (!regexpValidString.test(value)) {
    return false
  }

  return true
}

export const getErrorMessage = (error: unknown): string => {
  let message = 'Unknown error'

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  }

  return message
}