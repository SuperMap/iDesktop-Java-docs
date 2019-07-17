/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import patchDOMForGoogleTranslate from 'utils/patchDOMForGoogleTranslate';
import React, {Component} from 'react';
import Flex from 'components/Flex';
import Footer from 'components/LayoutFooter';
import Header from 'components/LayoutHeader';
import {media} from 'theme';
import {
  addLocaleData,
  IntlProvider,
  FormattedMessage,
} from 'react-intl'; /* react-intl imports */
import {getCurrentLangKey, getLangs, getUrlForLang} from 'ptz-i18n';
import en from 'react-intl/locale-data/en';
import zh from 'react-intl/locale-data/zh';
import zh_CN from '../../locale/zh_CN'; // import defined messages in Chinese
import en_US from '../../locale/en_US'; // import defined messages in English

addLocaleData([...en, ...zh]); // 引入多语言环境的数据
patchDOMForGoogleTranslate();

type Props = {
  children: Function,
  location: Location,
};

class Template extends Component<Props> {
  render() {
    const {children, location} = this.props;

    // TODO - is there a better way to check if we need we have a sidebar?
    let layoutHasSidebar = false;
    if (
      location.pathname.match(
        /^\/(en|zh)\/(docs|guides|topics|terms|specs|contributing|warnings)/,
      )
    ) {
      layoutHasSidebar = true;
    }

    let i18nMessages = {};
    i18nMessages['en'] = en_US;
    i18nMessages['zh'] = zh_CN;
    const langs = ['en', 'zh'];
    const defaultLangKey = 'en';
    // console.log('1.defaultLangKey: ' + defaultLangKey);
    const curLangKey = getCurrentLangKey(
      langs,
      defaultLangKey,
      location.pathname,
    );
    console.log('2.curLangKey: ' + curLangKey);
    // console.log('3.langs type: ' + typeof langs);
    // console.log(
    //   '4.getUrlForLang: ' + getUrlForLang('/' + curLangKey, location.pathname),
    // );
    const langsMenu = getLangs(
      langs,
      curLangKey,
      getUrlForLang('/' + curLangKey, location.pathname),
    );
    console.log(langsMenu);
    // console.log(i18nMessages[curLangKey]);

    return (
      <IntlProvider locale={curLangKey} messages={i18nMessages[curLangKey]}>
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: 'calc(100vh - 40px)',
          }}>
          <Header location={location} langsMenu={langsMenu} />
          <Flex
            direction="column"
            shrink="0"
            grow="1"
            valign="stretch"
            css={{
              flex: '1 0 auto',
              marginTop: 60,
              [media.between('medium', 'large')]: {
                marginTop: 50,
              },
              [media.lessThan('medium')]: {
                marginTop: 40,
              },
            }}>
            {children}
          </Flex>
          <Footer layoutHasSidebar={layoutHasSidebar} curLan={curLangKey}/>
        </div>
      </IntlProvider>
    );
  }
}

export default Template;
