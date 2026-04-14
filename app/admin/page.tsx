import { redirect } from "next/navigation";

export default function AdminIndexPage() {
  // We use middleware for auth, so if they hit this, redirect to the dashboard
  redirect("/admin/dashboard");
}
