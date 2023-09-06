import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
    title: string;
    path: string;
}

export default function NavLink({ title, path }: Props) {
    const pathName = usePathname();
    const isActive = pathName === path;


    return (
        <div >
            <Link href={path} className={`${isActive ? 'text-backing-color-3' : 'text-color-primary'} uppercase font-bold`}>
                {title}
            </Link>
        </div>
    );
}