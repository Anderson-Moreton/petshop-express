import React from 'react';
import './style.css';
import { IUserInfo } from '@src/cache';
import { HomeIcon, ChatAltIcon, PencilIcon, CollectionIcon, UserGroupIcon } from '@heroicons/react/outline';
import logoOpa from '@assets/logo-opa.svg'
import logoOpaBlackAndWhite from '@assets/logoOpa.png'

interface IBase {
  children: any;
  imageBanner?: string;
}

const navigationList = [
  {
    name: 'Home',
    href: `/admin/grupos-comerciais`,
    icon: HomeIcon,
    current: false,
    can: (user: IUserInfo) => user.isOpa,
  },
  {
    name: 'Atividades',
    href: `/admin/atividades`,
    icon: PencilIcon,
    current: false,
    can: (user: IUserInfo) => user.isOpa,
  },
  {
    name: 'Tópicos',
    href: `/admin/topicos`,
    icon: CollectionIcon,
    current: false,
    can: (user: IUserInfo) => user.isOpa,
  },
  {
    name: 'Usuários',
    href: `/admin/usuarios`,
    icon: UserGroupIcon,
    current: false,
    can: (user: IUserInfo) => user.isOpa,
  },
  {
    name: 'Faça uma sugestão',
    href: '/whatsapp',
    icon: ChatAltIcon,
    current: false,
    can: (user: IUserInfo) => !user.isOpa,
  },
];

const Base = ({ imageBanner, children }: IBase) => {
  return(
  <div className="layout-screen">
    <div className="menu">
      <div className="logo">
          <img src={logoOpa} className="logoImage" alt="Logo Opa com fundo branco" />
      </div>
      <div className="menuCabecalho">
            <div className="itemMenu">
                <a href="/">Home</a>
            </div>
            <div className="itemMenu">
                <a href="/menu">Cardápio</a>
            </div>
            <div className="itemMenu">
                <a href="/contato">Contato</a>
            </div>
            <div className="itemMenu">
                <a href="/quemsomos">Quem somos</a>
            </div>
            <div className="itemMenu">
                <a href="/entrar">Entrar</a>
            </div>
            <div className="itemMenu">
                <a href="/carrinho">Meu carrinho</a>
            </div>
      </div>
    </div>
    <section className="banner">
        <img className="style-image" src={imageBanner} alt="" />
        <p className="style-title" >Home</p>
    </section>
    <div>
      {children}
    </div>
    <div className="footer">
        <div className="logo">
            <img src={logoOpaBlackAndWhite} alt="Logo Opa Dog e Burguer" className="h-2/3" />
        </div>
        <div className="menu-mapa">
            <div className="mapaSite">
                <h3 className="no-bold">Mapa do site</h3>

                <nav>
                    <ul className="list-menu-footer">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/menu">Cardápio</a>
                        </li>
                        <li>
                            <a href="/quemsomos">Quem somos</a>
                        </li>
                        <li>
                            <a href="/contato">Contato</a>
                        </li>
                        <li>
                            <a href="/entrar">Entrar</a>
                        </li>
                        <li>
                            <a href="/carrinho">Meu carrinho</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="funcionamento">
                <h3 className="no-bold">Horário de Funcionamento</h3>
                <p>Segunda à Quinta  18:00 às 00:00</p>
                <p>Sexta à Domingo  18:00 às 02:00</p>
            </div>
            <div className="redesSociais">
                <h3 className="no-bold">Redes Sociais</h3>

                <nav>
                    <ul className="list-menu-footer">
                        <li>
                            <a href="https://www.facebook.com/opadogburguer" target="_blank" rel="noreferrer"><img
                                    src="/img/logoFace.svg" alt="Logo Facebook" /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/opa_dogburguer/" target="_blank" rel="noreferrer"><img
                                    src="/img/logoInsta.svg" alt="Logo Instagram" /></a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/channel/UCN2ub6gO3V2c6D0H-CniqMg/featured"
                                target="_blank" rel="noreferrer"><img src="/img/logoYoutube.svg" alt="Logo Youtube" /></a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  </div>
)};

export default Base;
