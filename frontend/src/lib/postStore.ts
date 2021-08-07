import { browser } from "$app/env";
import { writable } from "svelte/store";

export const postStore = writable([])

export const token = writable("")


if(browser){
    token.set(localStorage.getItem('token'))
    token.subscribe((v)=>{
        localStorage.setItem('token',v)
    })


}