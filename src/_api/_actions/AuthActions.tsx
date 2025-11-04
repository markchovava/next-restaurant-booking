"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BaseURL } from "../BaseURL";



export async function loginAction(data: any) {
    const res = await fetch(`${BaseURL}login/`, {
      'method': 'POST',
      'body': await JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}


export async function _logoutAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${BaseURL}api/logout/`, {
      'method': 'GET',
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/admin/auth');
    return await res.json();
}

export async function _registerAction(data: any) {
    const res = await fetch(`${BaseURL}register/`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath(`/login`);
    return await res.json();
}

export async function _authEmailAction(data: {email: string}) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('RECYCLEMATE_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ redirect('/login'); } 
    const res = await fetch(`${BaseURL}api/email`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/admin/profile');
    return await res.json();
}

export async function _authPasswordAction(data: {password: string}) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('RECYCLEMATE_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${BaseURL}api/password`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken?.value}`
      }
    });
    revalidatePath('/admin/profile');
    return await res.json();
}