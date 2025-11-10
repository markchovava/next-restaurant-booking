import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BaseURL } from "../BaseURL";
import { revalidatePath } from "next/cache";



export async function tableBookingScheduleFloorDateTimeAction() {
    let url = `${BaseURL}table-booking-schedule-by-date-time`
    const cookieStore = await cookies();
    const token = cookieStore.get('COBBLESTONE_BOOKING_COOKIE');
    if(token?.value) {
        const obj = JSON.parse(token.value)
        const {date, time} = obj
        url = `${url}?date=${date}&time=${time}`
        console.log("URL WHE TOKEN IS PRESENT", url)
       /*  try {
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
        } */
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