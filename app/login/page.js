"use client";

import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Auth from "../utils/auth";

import { apiPost } from "../utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  useEffect(() => {
    Auth.logout();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await apiPost("/usuarios/login", { email, senha });
      Auth.saveToken(response.token);
      Auth.saveUser(response.user);
      toast.success("Login bem-sucedido!", {
        autoClose: 3000,
      });
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Erro no login. Credenciais inválidas. Tente novamente", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.formCard}>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Seu email"
              className={styles.inputField}
            />
          </div>
          <div>
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              placeholder="Sua senha"
              className={styles.inputField}
            />
          </div>
          <button type="submit" disabled={loading} className={styles.button}>
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
