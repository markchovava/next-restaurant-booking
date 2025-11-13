import { tableBookingCookieAction, tableBookingScheduleFloorDateTimeAction } from '@/_api/_actions/TableBookingScheduleActions'
import BookingPage from '../_components/BookingPage'
import { TableBookingScheduleEntity, TableBookingScheduleInterface } from '@/_data/entity/TableBookingScheduleEntity'
import HeaderSecondary from '@/_components/headers/HeaderSecondary'



let scheduleDefault = {
    userId: 0,
    tableFloorPlanId: 0,
    date: "",
    time: "",
    status: "Available",
    css: "fill__available",
    numberOfGuests: 0,
  }


export default async function page() {
  const [ data, theCookie ] = await Promise.all([ tableBookingScheduleFloorDateTimeAction(), tableBookingCookieAction() ])

  let cookieBooking: TableBookingScheduleInterface = theCookie || TableBookingScheduleEntity

  let formattedData = []
  if(data) {
    const tables = data.tablesData
    const schedules = data.schedulesData
    
    if( schedules && schedules.length > 0 ) {
      formattedData = tables.map((i: any) => {
        const matchingObj = schedules.find((a: any) => a.tableFloorPlanId === i.id);
        return matchingObj 
        ? 
          { ...i, ...scheduleDefault, ...matchingObj, 
            date: cookieBooking.date,
            time: cookieBooking.time, 
          } 
        : 
          { ...i, ...scheduleDefault,
            date: cookieBooking.date,
            time: cookieBooking.time, 
          };
      });
    } else {
      formattedData = tables?.map((i: any) => {
        return {...i, ...scheduleDefault,
            date: cookieBooking.date,
            time: cookieBooking.time, 
        };
      });
    }
  }

  /* console.log('Data: ', data)
  console.log('formattedData: ', formattedData)
  console.log('cookieBooking', cookieBooking) */


  return (
    <>
    <HeaderSecondary />
    
    <BookingPage 
        dbData={formattedData} 
        cookieData={cookieBooking} 
    />

    </>
  )
}