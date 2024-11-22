"use client";

import Auth from '@/app/utils/auth';
import styles from './nav.module.css';
import { useRouter } from 'next/navigation';

export default function Nav() {
  const userInfo = Auth.getUser();
  const router = useRouter();

  const handleLogout = () => {
    router.push('/login')
  }

  return (
    <nav className={styles.nav}>
      <img src='logo.png' width={150}></img>
      <ul>
        <li>
          <a href="/ambientes">Ambientes</a>
        </li>
        <li>
          <a href="/usuarios">Usuários</a>
        </li>
      </ul>
      <div className={styles.footer}>
        <div className={styles.userInfo}>Bem-vindo, {userInfo.nome}!</div>
        <button className={styles.logoutButton} onClick={handleLogout}>
          Sair
        </button>
      </div>
    </nav>
  );
}
