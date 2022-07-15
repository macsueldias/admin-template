import { useState } from "react";
import AuthInput from "../components/auth/AuthInput";
import { IconeAlert } from "../components/icons/index";
import useAuth from "../data/hook/useAuth";

export default function Autenticacao() {

  const { login, cadastrar, loginGoogle } = useAuth()
  const [erro, setErro] = useState(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [modo, setModo] = useState<"login" | "cadastro">("login");


  function exibirErro(msg, tempoEmSegundos = 5) {
    setErro(msg)
    setTimeout(() => setErro(null), tempoEmSegundos * 1000)
  }

  async function submeter() {
    try {
      if (modo === "login") {
        await login(email, senha)
      } else {
        await cadastrar(email, senha)
      }
    } catch(e) {
      exibirErro(e.message)
    }
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="hidden md:block w-1/2 lg:w-4/5">
        <img src="https://source.unsplash.com/random" alt="Imagem da tela de Autenticação" className="h-screen w-full object-cover"/>
      </div>
      <div className="w-full md:w-1/2 m-10 max-w-screen-sm">
        <h1
          className={`
                text-2xl font-bold mb-5
            `}
        >
          {modo === "login"
            ? "Entre com a Sua Conta"
            : "Cadastre-se na Plataforma"}
        </h1>

        {erro && (
            <div className={`
            flex items-center  
            bg-red-400 text-white py-3 px-5 my-2
            border border-red-700 rounded-lg
        `}>
            {IconeAlert}
            <span className={'ml-3 text-sm'}>{erro}</span>
        </div>
        )}

        
        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />

        <button
          onClick={submeter}
          className={`
                w-full bg-indigo-500 hover:bg-indigo-400 
                text-white rounded-lg px-4 py-3 mt-6
            `}
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>

        <hr className={`my-6 border-gray-300 w-full`} />

        <button
          onClick={loginGoogle}
          className={`
                w-full bg-red-500 hover:bg-red-400 
                text-white rounded-lg px-4 py-3 
            `}
        >
          Entrar com o Google
        </button>
        {modo === 'login' ? (
            <p className="mt-8">
                Não possui cadastro?
                <a onClick={() => setModo('cadastro')} className={`
                    text-blue-500 hover:text-blue-700 font-semibold   
                    cursor-pointer 
                `}> Crie uma conta gratuitamente
                </a>
            </p>
        ) : (
            <p className="mt-8">
                Já possui cadastro?
                <a onClick={() => setModo('cadastro')} className={`
                    text-blue-500 hover:text-blue-700 font-semibold   
                    cursor-pointer 
                `}> Entre com a sua conta</a>
            </p>
        )}
      </div>
    </div>
  );
}
