
import Link from 'next/link';

interface Props {
    title: string;
    path: string;
}

export default function NavLink({ title, path }: Props) {
    return (
        <div >
            <Link href={path} className='text-color-primary uppercase font-bold'>
                {title}
            </Link>
        </div>
    );
}