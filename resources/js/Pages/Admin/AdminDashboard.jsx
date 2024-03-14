import AdminAuthenticatedLayout from '@/Layouts/AdminAuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function AdminDashboard(props) {
  return (
    <AdminAuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={<h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">Admin Dashboard</h2>}
    >
      <Head title="Admin Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm dark:bg-gray-800 sm:rounded-lg">
            <div className="p-6 text-gray-900 dark:text-gray-100">You're logged in!</div>
          </div>
        </div>
      </div>
    </AdminAuthenticatedLayout>
  );
}
