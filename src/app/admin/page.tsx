import { checkAuthAction } from "@/_api/_actions/AuthActions";
import AdminPage from "./_components/AdminPage";


export default async function page() {
  await checkAuthAction()

  return (
    <>
    <AdminPage />
    </>
  )
}
