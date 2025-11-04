import { _userListAction } from '@/_api/_actions/UserActions';
import { _contactListAction } from '@/_api/_actions/ContactActions';
import MessageListPage from './_components/MessageListPage';

 

export default async function page() {
  const [ userData ] = await Promise.all([_contactListAction()]);

  return (
    <div>
        <MessageListPage dbData={userData} />
    </div>
  )
}
