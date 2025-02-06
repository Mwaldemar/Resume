import React from 'react';
import Link from 'next/link';
import styles from './contact.module.scss';
import { MoveUpRight } from 'lucide-react';

type ContactProps = {
    icon: React.ReactNode;
    text: string;
    link?: string;
};

const Contact = ({ icon, text, link }: ContactProps) => {
    return (
        <div className={styles.email}>
            <div className={styles.svg}>{icon}</div>
            <div className={styles.mailAddress}>
                {link ? (
                    <Link className={styles.linkedin} href={link} target="_blank" rel="noopener noreferrer">
                        {text} <MoveUpRight />
                    </Link>
                ) : (
                    text
                )}
            </div>
        </div>
    );
};

export default Contact;
