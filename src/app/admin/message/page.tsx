import { _userListAction } from '@/_api/_actions/UserActions';
import { _contactListAction } from '@/_api/_actions/ContactActions';
import MessageListPage from './_components/MessageListPage';
import { checkAuthAction } from '@/_api/_actions/AuthActions';

 

export default async function page() {
  await checkAuthAction()
  const [ userData ] = await Promise.all([_contactListAction()]);

  return (
    <div>
        <MessageListPage dbData={userData} />
    </div>
  )
}
