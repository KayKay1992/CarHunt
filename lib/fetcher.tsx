import { LoginType, RegisterType } from '@/@types/api.type';
import axios from 'axios';


export const registerMutationFn = async (data: RegisterType) => await axios.post('/api/signup', data)


export const loginMutationFn = async (data: LoginType) => await axios.post('/api/signin', data)