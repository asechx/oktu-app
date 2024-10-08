import React from 'react';
import { cn } from '@/shared/lib/utils';
import styles from './FooterInfoBlock.module.scss';
import { Copyright } from '../copyright';
import { NavItem } from '../nav-item';
import { TNavigationDataInfo } from '@/shared/constants/navigation';
import { FooterInfoBlockHead as Head } from '../footer-info-block-head';
import { Developer } from '../developer';

interface Props {
  items: TNavigationDataInfo;
  className?: string;
}

export const FooterInfoBlock: React.FC<Props> = ({ items, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <Head />
      <Copyright />
      <ul className={styles.inner}>
        {items.map((item, i) => (
          <NavItem
            key={i}
            name={item.name}
            href={item.href}
            links={item.links}
            itemStyles={'text-white text-lg hover:text-white/70'}
          />
        ))}
      </ul>
      <Developer />
    </div>
  );
};
