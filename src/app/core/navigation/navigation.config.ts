import {
  NavigationItem,
  NavigationLink,
  NavigationDropdown,
  NavigationSubheading
} from './navigation-item.interface';

export const NAVIGATION_CONFIG = {
  common: [
    {
      type: 'subheading',
      label: 'Dashboards',
      children: [
        {
          type: 'link',
          label: 'Home',
          route: '/index',
          icon: 'mat:home',
          routerLinkActiveOptions: { exact: true }
        } as NavigationLink
      ]
    } as NavigationSubheading
  ] as NavigationItem[],

  user: [
    {
      type: 'link',
      label: 'menu.chat',
      route: '/index/chat',
      icon: 'mat:chat'
    } as NavigationLink,
    {
      type: 'link',
      label: 'Notifications',
      route: '/index/notifications/all',
      icon: 'mat:notifications'
    } as NavigationLink,
    {
      type: 'link',
      label: 'menu.settings',
      route: '/index/settings',
      icon: 'mat:settings'
    } as NavigationLink,
    {
      type: 'link',
      label: 'Documents',
      route: '/index/document',
      icon: 'mat:folder'
    } as NavigationLink,

  ] as NavigationItem[],
  

  admin: [
    {
      type: 'link',
      label: 'menu.analytics',
      route: '/index/dashboard',
      icon: 'mat:dashboard'
    } as NavigationLink,
    {
      type: 'link',
      label: 'Logs',
      route: '/index/log',
      icon: 'mat:bar_chart'
    } as NavigationLink,
    {
      type: 'subheading',
      label: 'menu.administration',
      children: [
        {
          type: 'link',
          label: 'Users',
          route: '/index/user',
          icon: 'mat:person'
        } as NavigationLink,

        {
          type: 'dropdown',
          label: 'menu.autorisation',
          icon: 'mat:security',
          children: [
            {
              type: 'link',
              label: 'menu.roles',
              route: '/index/role',
              icon: 'mat:lock'
            } as NavigationLink,
            {
              type: 'link',
              label: 'menu.permissions',
              route: '/index/permission',
              icon: 'mat:security'
            } as NavigationLink
          ]
        } as NavigationDropdown,
        {
          type: 'link',
          label: 'menu.managemenu',
          route: '/index/managemenu',
          icon: 'mat:menu'
        } as NavigationLink
      ]
    } as NavigationSubheading
  ] as NavigationItem[]
};
