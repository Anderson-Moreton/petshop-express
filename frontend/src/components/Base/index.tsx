import React, { useEffect, useState } from 'react';
import './style.css';
import { IUserInfo, USER_INFO } from '@src/cache';
import { HomeIcon, ChatAltIcon, MenuIcon, PencilIcon, CollectionIcon, UserGroupIcon } from '@heroicons/react/outline';
import Sidebar from '@components/Sidebar';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import MobileSidebar from '@components/MobileSidebar';

interface IBase {
  children: React.ReactChild | false;
  header: any;
  noMargin?: boolean;
  options?: any;
  activeRoute?: string;
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

const Base = ({ activeRoute, children, options, header, noMargin=false }: IBase) => {
  const [sideBarNavigation, setSideBarNavigation] = useState<any[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const history = useHistory();
  const {
    data: { userInfo },
  } = useQuery(USER_INFO);

  useEffect(() => {
    const currentRoute = activeRoute || history.location.pathname;
    const localNavigation = navigationList.filter((nav) => nav.can(userInfo)).map((nav) => ({
        ...nav,
        current: currentRoute === nav.href,
      }));
    setSideBarNavigation(localNavigation);
  }, [userInfo]);

  return(
  <div className="layout-screen">
      <MobileSidebar navigation={sideBarNavigation} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Sidebar navigation={sideBarNavigation} />
      <div className="mobile-button-sidebar">
          <button
            type="submit"
            className="mobile-button"
            onClick={() => setSidebarOpen(true)}
          >
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
    <div className="content">
      <div className="header">{header}</div>
      {options && <div className="options">{options}</div>}
      <div className={noMargin ? "main" : "md:px-6 main"}>{children}</div>
    </div>
  </div>
)};

export default Base;
