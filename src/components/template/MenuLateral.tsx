import MenuItem from './MenuItem'
import { IconeExit, IconeHome, IconeSetting, IconeSignal } from '../icons/index'
import Logo from './Logo'
import useAuth from '../../data/hook/useAuth'

export default function MenuLateral() {
    const { logout } = useAuth()
    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900 dark:text-gray-200
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                <Logo />
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url='/' texto="Inicio" icone={IconeHome} className={`hover:bg-gray-300`}/>
                <MenuItem url='ajustes' texto="Ajustes" icone={IconeSetting} className={`hover:bg-gray-300`}/>
                <MenuItem url='notificacoes' texto="Notificações" icone={IconeSignal} className={`hover:bg-gray-300`}/>
            </ul>
            <ul>
                <MenuItem  texto="Sair" icone={IconeExit} onClick={logout} className={`
                    text-red-600 dark:text-red-400   
                    dark:hover:bg-red-400 
                    hover:bg-red-400 
                    hover:text-white 
                    dark:hover:text-white`
                }/>
            </ul>
        </aside>
    )
}