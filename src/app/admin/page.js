import Link from "next/link";
import styles from "./adminDashboard.module.css";

export default function AdminDashboard() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <ul className={`list-group ${styles.adminList}`}>
        <li className="list-group-item">
          <Link href="/admin/add-product" className="text-decoration-none">
            Add Product
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/admin/edit-product" className="text-decoration-none">
            Edit/Delete Products
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/admin/manage-blogs" className="text-decoration-none">
            Manage Blogs
          </Link>
        </li>
        <li className="list-group-item">
          <Link href="/admin/update-socials" className="text-decoration-none">
            Update Social Media Links
          </Link>
        </li>
      </ul>
    </div>
  );
}
