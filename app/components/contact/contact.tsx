import React from 'react';
import styles from './contact.module.scss';
import { MoveUpRight } from 'lucide-react';

type ContactProps = {
    icon: React.ReactNode;
    text: string;
    link?: string;
};

const Contact = ({ icon, text, link }: ContactProps) => {
    return (
        <div className={styles.contact}>
            <div className={styles.svg}>{icon}</div>
            <div className={styles.mailAddress}>
                {link ? (
                    <a className={styles.linkedin} href={link} target="_blank" rel="noopener noreferrer">
                        {text} <MoveUpRight />
                    </a>
                ) : (
                    text
                )}
            </div>
        </div>
    );
};

export default Contact;
