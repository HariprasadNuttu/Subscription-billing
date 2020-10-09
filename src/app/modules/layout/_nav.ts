export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: any;
  title?: boolean;
  children?: any;
  variant?: string;
  attributes?: object;
  divider?: boolean;
  class?: string;
  label?: any;
  wrapper?: any;
}

export const navItems = [
  {
    name: 'Subscription',
    url: '/subscription',
    icon: 'fa fa-money'
  },
  {
    name: 'Invoice',
    url: '/invoices',
    icon: 'fa fa-file-pdf-o',
  },
  {
    name: 'Customers',
    url: '/customers',
    icon: 'fa fa-user-circle-o'
  },
  {
    name: 'Plan',
    url: '/plan',
    icon: 'fa fa-credit-card'
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: 'fa fa-gear'
  },
  {
    name: 'Help',
    url: '/help',
    icon: 'fa fa-question-circle'
  }
  
];
