import { tableBookingScheduleFloorDateTimeAction } from '@/_api/_actions/TableBookingScheduleActions'
import BookingPage from '../_components/BookingPage'


export default async function page() {
  const [ data ] = await Promise.all([ tableBookingScheduleFloorDateTimeAction() ])

  console.log('data', data)

  return (
    <>
    <BookingPage />
    </>
  )
}
