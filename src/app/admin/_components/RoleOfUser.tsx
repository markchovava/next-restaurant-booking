 "use client"

import { RolesData } from "@/_data/sample/UsersData"

 export const RoleOfUser = ({data}: {data: number}) => {
    switch(data) {
      case 1:
        return RolesData[0].name
      case 2:
        return RolesData[1].name
      case 3:
        return RolesData[2].name
      default:
        return RolesData[0].name
    }
  }

