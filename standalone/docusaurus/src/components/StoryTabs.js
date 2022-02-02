import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import IframeResizer from 'iframe-resizer-react';
import React from 'react';
import style from './StoryTabs.module.css';

export const StoryTabs = ({ tabs }) => (
  <Tabs>
    {tabs.map(({ id, label, story }) => {
      const { siteConfig } = useDocusaurusContext();
      const storybookUrl = siteConfig.customFields.storybookUrl;

      const storySrc = `${storybookUrl}?path=/docs/${story}`;
      const docsSrc = `${storybookUrl}iframe.html?id=${story}&viewMode=docs#singleStory=true&shortcuts=false`;

      return (
        <TabItem value={id} label={label} key={id}>
          <div className={style['story-tabs__tab']}>
            <IframeResizer
              src={docsSrc}
              style={{ width: '1px', minWidth: '100%' }}
              heightCalculationMethod="lowestElement"
            />
            <a className={style['story-tabs__link']} href={storySrc} target="_blank" rel="noreferrer">
              Storybook: {story}
            </a>
          </div>
        </TabItem>
      );
    })}
  </Tabs>
);
