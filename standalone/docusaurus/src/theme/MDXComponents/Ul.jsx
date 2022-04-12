/**
 * @license EUPL-1.2
 * Copyright (c) 2022 Gemeente Utrecht
 */

import clsx from 'clsx';
import React from 'react';
import styles from './Ul.module.css';
const containsClassListLocalClass = styles['contains-task-list'];

function transformUlClassName(className) {
  return clsx(
    'utrecht-unordered-list',
    className, // This class is set globally by GitHub/MDX
    // We keep the global class, but apply scoped CSS
    // See https://github.com/syntax-tree/mdast-util-to-hast/issues/28
    typeof className === 'string' && className.includes('contains-task-list') && containsClassListLocalClass,
  );
}

export default function MDXUl(props) {
  return <ul {...props} className={transformUlClassName(props.className)} />;
}
