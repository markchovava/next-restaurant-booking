"use server"
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BaseURL } from "../BaseURL";
import { revalidatePath } from "next/cache";
import { TableBookingScheduleInterface } from "@/_data/entity/TableBookingScheduleEntity";




export async function tableBookingScheduleStoreAction(data: any) {
    const res = await fetch(`${BaseURL}table-booking-schedule`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/admin/booking');
    revalidatePath('/booking');
    return await res.json();
}

export async function tableBookingCookieAction(): Promise<TableBookingScheduleInterface | null> {
    const cookieStore = await cookies();
    const token = cookieStore.get('COBBLESTONE_BOOKING_COOKIE');
    let result: TableBookingScheduleInterface;
    if(token?.value) {
        const toObj = JSON.parse(token?.value)
        result = toObj
        return result
    }
    return null
}

export async function tableBookingScheduleFloorDateTimeAction() {
    let url = `${BaseURL}table-booking-schedule-by-date-time`
    const cookieStore = await cookies();
    const token = cookieStore.get('COBBLESTONE_BOOKING_COOKIE');
    
    if(token?.value) {
        const obj = JSON.parse(token.value)
        const {date, time} = obj
        url = `${url}?date=${date}&time=${time}`
        console.log("URL WHEN TOKEN IS PRESENT", url)
        
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            if (!res.ok) {
                const errorText = await res.text();
                console.error('API Error Response:', errorText);
                return {
                    status: 0,
                    message: `Server error: ${res.status}`,
                    error: errorText
                };
            }
            const result = await res.json();
            revalidatePath('/admin/booking');
            revalidatePath('/booking');
            return result;
        } catch (error: any) {
            console.error('Action Error:', error);
            return {
                status: 0,
                message: 'Failed to process request',
                error: error.message || 'Unknown error'
            };
        }
    } else {
        try {
            const res = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            if (!res.ok) {
                const errorText = await res.text();
                console.error('API Error Response:', errorText);
                return {
                    status: 0,
                    message: `Server error: ${res.status}`,
                    error: errorText
                };
            }
            const result = await res.json();
            revalidatePath('/admin/booking');
            revalidatePath('/booking');
            return result;
        } catch (error: any) {
            console.error('Action Error:', error);
            return {
                status: 0,
                message: 'Failed to process request',
                error: error.message || 'Unknown error'
            };
        }
    }
}

export async function tableBookingScheduleFloorDateTimeAction2(date: string, time: string) {
    let url = `${BaseURL}table-booking-schedule-by-date-time?date=${date}&time=${time}`
    try {
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        if (!res.ok) {
            const errorText = await res.text();
            console.error('API Error Response:', errorText);
            return {
                status: 0,
                message: `Server error: ${res.status}`,
                error: errorText
            };
        }
        const result = await res.json();
        return result;
    } catch (error: any) {
        console.error('Action Error:', error);
        return {
            status: 0,
            message: 'Failed to process request',
            error: error.message || 'Unknown error'
        };
    }
   
}

/* --------------------------------------
        AUTHENTICATION
--------------------------------------- */
export async function _tableBookingScheduleFloorDateTimeAction(floor: string, date: string, time: string) {
    const url = `${BaseURL}api/table-booking-schedule-by-floor-date-time?floor=${floor}&date=${date}&time=${time}`
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
        if (!authToken?.value) { redirect('/login'); }
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken.value}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        if (!res.ok) {
            const errorText = await res.text();
            console.error('API Error Response:', errorText);
            return {
                status: 0,
                message: `Server error: ${res.status}`,
                error: errorText
            };
        }
        const result = await res.json();
        revalidatePath('/admin/booking');
        revalidatePath('/booking');
        return result;
    } catch (error: any) {
        console.error('Action Error:', error);
        return {
            status: 0,
            message: 'Failed to process request',
            error: error.message || 'Unknown error'
        };
    }
}


export async function _tableBookingScheduleListAction() {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${BaseURL}api/table-booking-schedule`, {
      'method': 'GET',
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function _tableBookingSchedulePaginatedAction(url: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(url, {
      'method': 'GET',
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}


export async function _tableBookingScheduleSearchAction(search: string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${BaseURL}api/table-booking-schedule-search/${search}`, {
      'method': 'GET',
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    return await res.json();
}

export async function _tableBookingScheduleViewAction(id: number | string) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${BaseURL}api/table-booking-schedule/${id}`, {
      'method': 'GET',
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/admin/booking');
    return await res.json();
}


export async function _tableBookingScheduleUpdateAction(id: string | number, data: any) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${BaseURL}api/table-booking-schedule/${id}`, {
      'method': 'POST',
      'body': JSON.stringify(data),
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/admin/booking');
    return await res.json();
}


export async function _tableBookingScheduleDeleteAction(id: string | number) {
    const cookieStore = await cookies();
    const authToken = await cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
    if(!authToken?.value){ redirect('/login'); }
    const res = await fetch(`${BaseURL}api/table-booking-schedule/${id}`, {
      'method': 'DELETE',
      headers: {
        'Authorization': `Bearer ${authToken?.value}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    });
    revalidatePath('/admin/booking');
    return await res.json();
}