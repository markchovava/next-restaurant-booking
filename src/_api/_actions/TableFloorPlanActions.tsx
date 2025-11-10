"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { BaseURL } from "../BaseURL";
import { revalidatePath } from "next/cache";

export async function _tableFloorPlanStoreAllAction(data: any[]) {
    try {
        // Get cookies
        const cookieStore = await cookies();
        const authToken = cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
        // Check authentication
        if (!authToken?.value) {
            console.error('No auth token found');
            redirect('/login');
        }
        const payload = { plans: data };
        const res = await fetch(`${BaseURL}api/table-floor-plan-store-all`, {
            method: 'POST',
            body: JSON.stringify(payload), 
            headers: {
                'Authorization': `Bearer ${authToken.value}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        console.log('Response status:', res.status);
        // Check if response is OK
        if (!res.ok) {
            const errorText = await res.text();
            console.error('API Error Response:', errorText);
            return {
                status: 0,
                message: `Server error: ${res.status}`,
                error: errorText
            };
        }
        // Parse JSON response
        const result = await res.json();
        // Revalidate the path
        revalidatePath('/admin/table');
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


export async function _tableFloorPlanAction() {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
        if (!authToken?.value) { redirect('/login'); }
        const res = await fetch(`${BaseURL}api/table-floor-plan`, {
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
        revalidatePath('/admin/table');
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


export async function _tableFloorPlanSearchAction(search: string) {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
        if (!authToken?.value) { redirect('/login'); }
        const res = await fetch(`${BaseURL}api/table-floor-plan-search/${search}`, {
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
        revalidatePath('/admin/table');
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


export async function _tableFloorPlanPaginateAction(url: string = `${BaseURL}api/table-floor-plan/`) {
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
        revalidatePath('/admin/table');
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


export async function _tableFloorPlanByFloorAction(floor: string) {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
        if (!authToken?.value) { redirect('/login'); }
        const res = await fetch(`${BaseURL}api/table-floor-plan-by-floor?floor=${floor}`, {
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
        revalidatePath('/admin/table');
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


export async function _tableFloorPlanViewAction(id: any) {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
        if (!authToken?.value) { redirect('/login'); }
        const res = await fetch(`${BaseURL}api/table-floor-plan/${id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${authToken.value}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        if (!res.ok) {
            const errorText = await res.text();
            return {
                status: 0,
                message: `Server error: ${res.status}`,
                error: errorText
            };
        }
        const result = await res.json();
        revalidatePath('/admin/table');
        return result;
    } catch (error: any) {
        return {
            status: 0,
            message: 'Failed to process request',
            error: error.message || 'Unknown error'
        };
    }
}



export async function _tableFloorPlanUpdateAction(id: any, data: any) {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
        if (!authToken?.value) { redirect('/login'); }
        /* ----------- */
        const res = await fetch(`${BaseURL}api/table-floor-plan/${id}/`, {
            method: 'POST',
            'body': JSON.stringify(data),
            headers: {
                'Authorization': `Bearer ${authToken.value}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        if (!res.ok) {
            const errorText = await res.text();
            return {
                status: 0,
                message: `Server error: ${res.status}`,
                error: errorText
            };
        }
        const result = await res.json();
        revalidatePath(`/admin/table/${id}`);
        return result;
    } catch (error: any) {
        return {
            status: 0,
            message: 'Failed to process request',
            error: error.message || 'Unknown error'
        };
    }
}



export async function _tableFloorPlanDeleteAction(id: any) {
    try {
        const cookieStore = await cookies();
        const authToken = cookieStore.get('COBBLESTONE_AUTH_TOKEN_COOKIE');
        if (!authToken?.value) { redirect('/login'); }
        const res = await fetch(`${BaseURL}api/table-floor-plan/${id}`, {
            method: 'DELETE',
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
        revalidatePath('/admin/table');
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