import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 31,
        label: 'MENUITEMS.DASHBOARD',
        isTitle: true
    },
    {
        id: 30,
        label: 'MENUITEMS.DASHBOARD',
        icon: 'bx-home-circle',
        link: '/dashboard'
    },
    {
        id: 1,
        label: 'MENUITEMS.CONSOMMABLES.CONSOMMABLES',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.CONSOMMABLES.CONSOMMABLES',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 3,
                label: 'MENUITEMS.CONSOMMABLES.MEDICAMENTS',
                link: '/consomables/medicaments',
                parentId: 2
            },
            {
                id: 4,
                label: 'MENUITEMS.CONSOMMABLES.FORMES',
                link: '/consomables/formes',
                parentId: 2
            },
            {
                id: 5,
                label: 'MENUITEMS.CONSOMMABLES.FAMILLES',
                link: '/consomables/familles',
                parentId: 2
            },
            {
                id: 6,
                label: 'MENUITEMS.CONSOMMABLES.DCI',
                link: '/consomables/dci',
                parentId: 2
            },
            {
                id: 7,
                label: 'MENUITEMS.CONSOMMABLES.CATEGORIES',
                link: '/consomables/categories',
                parentId: 2
            }
        ]
    },
    {
        id: 8,
        label: 'MENUITEMS.ALLERGIES.ALLERGIES',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 9,
                label: 'MENUITEMS.ALLERGIES.TYPES',
                link: '/allergies/types',
                parentId: 8
            },
            {
                id: 10,
                label: 'MENUITEMS.ALLERGIES.VALUES',
                link: '/allergies/values',
                parentId: 8
            }
        ]
    },
    {
        id: 11,
        label: 'MENUITEMS.ANTECEDENTS.ANTECEDENTS',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 12,
                label: 'MENUITEMS.ANTECEDENTS.TYPES',
                link: '/antecedents/types',
                parentId: 11
            },
            {
                id: 13,
                label: 'MENUITEMS.ANTECEDENTS.VALUES',
                link: '/antecedents/values',
                parentId: 11
            }
        ]
    },
    {
        id: 12,
        label: 'MENUITEMS.INTRANTS.INTRANTS',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 13,
                label: 'MENUITEMS.INTRANTS.TYPES',
                link: '/intrants/types',
                parentId: 12
            },
            {
                id: 14,
                label: 'MENUITEMS.INTRANTS.VALUES',
                link: '/intrants/values',
                parentId: 12
            }
        ]
    },
    {
        id: 15,
        label: 'MENUITEMS.LABORATOIRES.LABORATOIRES',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 16,
                label: 'MENUITEMS.LABORATOIRES.TYPES',
                link: '/laboratoires/types',
                parentId: 15
            },
            {
                id: 17,
                label: 'MENUITEMS.LABORATOIRES.VALUES',
                link: '/laboratoires/values',
                parentId: 15
            }
        ]
    },
    {
        id: 18,
        label: 'MENUITEMS.RADIOS.RADIOS',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 19,
                label: 'MENUITEMS.RADIOS.TYPES',
                link: '/radios/types',
                parentId: 18
            },
            {
                id: 20,
                label: 'MENUITEMS.RADIOS.VALUES',
                link: '/radios/values',
                parentId: 18
            }
        ]
    },
    {
        id: 21,
        label: 'MENUITEMS.TRAITMENTS.TRAITMENTS',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 22,
                label: 'MENUITEMS.TRAITMENTS.TYPES',
                link: '/traitments/types',
                parentId: 21
            },
            {
                id: 23,
                label: 'MENUITEMS.TRAITMENTS.VALUES',
                link: '/traitments/values',
                parentId: 21
            }
        ]
    },
    {
        id: 90,
        label: 'MENUITEMS.SETTING.SETTING',
        isTitle: true
    },
    {
        id: 40,
        label: 'MENUITEMS.SETTING.UTILISATEUR',
        icon: 'bx-briefcase-alt-2',
        subItems: [
            {
                id: 41,
                label: 'MENUITEMS.PROJECTS.LIST.GRID',
                link: '/projects/grid',
                parentId: 40
            },
            {
                id: 42,
                label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                link: '/projects/list',
                parentId: 40
            }
        ]
    },
    {
        id: 45,
        label: 'MENUITEMS.SETTING.INSTITUTION',
        icon: 'bx-task',
        subItems: [
            {
                id: 46,
                label: 'MENUITEMS.TASKS.LIST.TASKLIST',
                link: '/tasks/list',
                parentId: 45
            },
            {
                id: 47,
                label: 'MENUITEMS.TASKS.LIST.KANBAN',
                link: '/tasks/kanban',
                parentId: 45
            }
        ]
    },
    {
        id: 49,
        label: 'MENUITEMS.SETTING.PARAMETRAGE',
        icon: 'bxs-user-detail',
        subItems: [
            {
                id: 50,
                label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                link: '/contacts/grid',
                parentId: 49
            },
            {
                id: 51,
                label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                link: '/contacts/list',
                parentId: 49
            },
            {
                id: 52,
                label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                link: '/contacts/profile',
                parentId: 49
            }
        ]
    }
];

