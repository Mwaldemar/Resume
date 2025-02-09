import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from './accordion.module.scss'

type AccordionProps = {
    className?: string,
    trigger: ReactNode,
    children: ReactNode,
    id: string,
}

export const Accordion = ({ className, trigger, children, id }: AccordionProps) => {
    return (
        <div className={clsx(className, styles.accordionWrapper)}>
            <input type="checkbox" id={id} className={styles.checkbox} />
            <label htmlFor={id} className={styles.trigger}>
                {trigger}
            </label>
            <div className={clsx(styles.content)}>
                {children}
            </div>
        </div>
    )
}