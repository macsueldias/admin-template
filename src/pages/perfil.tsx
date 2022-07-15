import Layout from "../components/template/Layout";
import useAuth from '../data/hook/useAuth'


export default function Perfil() {
  const { usuario } = useAuth()
  return (
    <Layout titulo="Perfil do Usuário" subtitulo="
    Gerencie sua conta">
        <h1>Perfil do Usuário, {usuario?.nome ?? 'Persona' }</h1>
    </Layout>
  )
}
