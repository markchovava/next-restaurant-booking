import { _userListAction } from '@/_api/_actions/UserActions';
import UserListPage from './_components/UserListPage'
import { checkAuthAction } from '@/_api/_actions/AuthActions';

 

export default async function page() {
  await checkAuthAction()
  const [ userData ] = await Promise.all([_userListAction()]);

  return (
    <div>
        <UserListPage dbData={userData} />
    </div>
  )
}
