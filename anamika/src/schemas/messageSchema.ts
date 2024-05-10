import {z} from 'zod'

export const messageSchema = z.object({
    content: z
    .string()
    .min(4, {message: 'Content must be atleast 4 characters'})
    .max(300, {message: 'Content must be atmost 300 characters'})
})