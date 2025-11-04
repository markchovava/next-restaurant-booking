 "use client"
 export const RoleOfUser = ({data}: {data: number}) => {
    switch(data) {
      case 1:
        return 'Operator'
      case 2:
        return 'Manager'
      case 3:
        return 'Admin'
      default:
        return 'Operator'
    }
  }

