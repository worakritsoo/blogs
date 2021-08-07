import { browser } from '$app/env';
import { writable } from 'svelte/store';
import type { User } from './types';

export const user = writable<User | null>(null);
export const jwt = writable('')

if (browser) {
    user.set(JSON.parse(localStorage.getItem('user'))||'')
    user.subscribe((v) => {
        localStorage.setItem('user',JSON.stringify(v))

    })
    jwt.set(localStorage.getItem('token'))
    jwt.subscribe((v)=> {
        localStorage.setItem('token',v)
    })

}