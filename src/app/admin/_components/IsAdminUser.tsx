  "use client"

  export const IsAdminUser = ({data}: {data: number | string}) => {
    switch(data){
      case 1:
        return 'Admin';
      case 0:
        return 'Not Admin';
      default:
        return 'Not Admin';
    }
  }