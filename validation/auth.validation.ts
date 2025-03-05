import { object, string } from "zod";


export const signupSchema = object({
    name: string().min(3, {
        message: "Name must be at least 3 characters long"
    }),
    email: string().email({
        message: "Please enter a valid email address"
    }),
    shopName: string().min(2, {
        message: "Shop name must be at least 2 characters long"
    }),
    password: string().min(5, {
        message: "Password must be at least 5 characters long"
    }),
   
})
export const signinSchema = object({
    email: string().email({
        message: "Please enter a valid email address"
    }),
    password: string().min(5, {
        message: "Password must be at least 5 characters long"
    }),
   
})