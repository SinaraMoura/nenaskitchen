
import Link from 'next/link';

interface Props {
    title: string;
    path: string;
}

export default function NavLink({ title, path }: Props) {
    return (
        <div className='text-white bg-brown-secundary rounded px-1.5 py-1.5' >
            <Link href={path} >
                {title}
            </Link>
        </div>
    );
}