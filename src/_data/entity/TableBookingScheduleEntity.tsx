interface TableBookingScheduleInterface{
    id: number,
    userId: number,
    tableFloorPlanId: number | string,
    date: string,
    time: string,
    status: string,
    fullName: string,
    email: string,
    numberOfGuests: string,
    notes: string
}