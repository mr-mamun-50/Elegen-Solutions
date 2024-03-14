import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import UpdateAdminPasswordForm from './Partials/UpdatePasswordForm';
import UpdateAdminProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';

export default function Edit({ auth, mustVerifyEmail, status }) {
  return (
    <AdminAuthenticatedLayout
      auth={auth}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Admin Profile</h2>}
    >
      <Head title="Profile" />

      <div className="py-12">
        <div className="mx-auto space-y-6 max-w-7xl sm:px-6 lg:px-8">
          <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
            <UpdateAdminProfileInformationForm
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className="max-w-xl"
            />
          </div>

          <div className="p-4 bg-white shadow sm:p-8 dark:bg-gray-800 sm:rounded-lg">
            <UpdateAdminPasswordForm className="max-w-xl" />
          </div>
        </div>
      </div>
    </AdminAuthenticatedLayout>
  );
}
