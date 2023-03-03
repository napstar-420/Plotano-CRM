import { redirect } from "react-router-dom";

export function adminCustomerLoader() {
    return redirect('/admin/customers/clients');
}