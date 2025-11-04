import { _userListAction } from '@/_api/_actions/UserActions';
import UserListPage from './_components/UserListPage'

 

export default async function page() {
  const [ userData ] = await Promise.all([_userListAction()]);

  return (
    <div>
        <UserListPage dbData={userData} />
    </div>
  )
}
