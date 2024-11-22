"use client";

import useAuth from "./hooks/useAuth";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  useAuth();
  const router = useRouter();
  router.push("/dashboard");
  return (
    <div className={styles.page}>
    </div>
  );
}
