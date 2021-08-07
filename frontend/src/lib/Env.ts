import { dev } from "$app/env";




export const API = dev ? "http://localhost:1337" : import.meta.env.VITE_API;