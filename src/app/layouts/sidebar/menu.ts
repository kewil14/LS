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
        icon: 'bx bx-home',
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
        icon: 'bx bxs-first-aid',
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
        icon: 'bx bxs-ambulance',
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
        icon: 'bx bxs-x-square',
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
        icon: 'bx bxs-plus-circle',
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
        icon: 'bx bxs-clinic',
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
        icon: 'bx bxs-notepad',
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
        id: 25,
        label: 'MENUITEMS.SETTING.SETTING',
        isTitle: true
    },
    {
        id: 29,
        label: 'MENUITEMS.SETTING.ROLE',
        icon: 'bxs-user-detail',
        link: '/roles'
    },
    {
        id: 30,
        label: 'MENUITEMS.SETTING.UTILISATEUR',
        icon: 'bxs-user-detail',
        link: '/user'
    },
    {
        id: 31,
        label: 'MENUITEMS.SETTING.INSTITUTION',
        icon: 'bx-task',
        link: '/institution'
    },
    {
        id: 32,
        label: 'MENUITEMS.SETTING.PARAMETRAGE',
        icon: 'bx bx-cog',
        link: '/setting'
    }
];

