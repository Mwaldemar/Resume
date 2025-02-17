import React, { ReactNode, useEffect } from "react";
import clsx from 'clsx';
import styles from './sidepanel.module.scss';

interface SidepanelProps {
    className?: string
    trigger: ReactNode;
    children: ReactNode;
    id: string;
    SVG?: ReactNode
}

export const Sidepanel = ({ className, trigger, children, id, SVG }: SidepanelProps) => {

    useEffect(() => {
        const checkbox = document.getElementById(id) as HTMLInputElement;

        const handleCheckboxChange = () => {
            if (checkbox.checked) {
                document.body.style.overflow = "hidden"; // Disable scrolling
            } else {
                document.body.style.overflow = "auto"; // Enable scrolling
            }
        };

        // Attach event listener to checkbox
        checkbox.addEventListener("change", handleCheckboxChange);

        // Cleanup event listener on component unmount
        return () => {
            checkbox.removeEventListener("change", handleCheckboxChange);
        };
    }, [id]); // Only re-run effect if `id` changes

    return (
        <div className={clsx(styles.sidepanelWrapper, className)}>
            <input type="checkbox" id={id} className={styles.checkbox} />
            <label htmlFor={id} className={styles.backdrop}></label>
            <label htmlFor={id} className={styles.trigger}>
                {trigger}
            </label>
            <div className={clsx(styles.content)}>
                <div className={styles.closeButtonContainer}>
                    <label htmlFor={id} className={styles.close}>
                        {SVG}
                    </label>
                </div>

                {children}
            </div>
        </div>
    )
}