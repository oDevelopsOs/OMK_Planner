
import { useRef } from 'react';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { useSelector } from "react-redux"


export default function Profile() {
    const show = useSelector((state)=>state.toggle.value2)

    const toast = useRef(null);
    const items = [
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    return (
        <div className={show?"card flex justify-content-center border absolute top-16 right-2 pt-1 pb-3 border-gray-300 rounded-xl w-fit h-fit mx-auto ": "hidden"}>
            <Toast ref={toast} />
            <Menu model={items} />
        </div>
    )
}
        