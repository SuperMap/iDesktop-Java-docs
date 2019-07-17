/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

// $FlowExpectedError
import navCommunity from '../../content/community/nav.yml';
// $FlowExpectedError
import navDocs_en from '../../content/docs/nav.en.yml';
import navDocs_zh from '../../content/docs/nav.zh.yml';
import navGuides_en from '../../content/guides/nav.en.yml';
import navGuides_zh from '../../content/guides/nav.zh.yml';
import navTopics_en from '../../content/topics/nav.en.yml';
import navTopics_zh from '../../content/topics/nav.zh.yml';
// $FlowExpectedError
import navTutorial from '../../content/tutorial/nav.en.yml';
import navTutorial_zh from '../../content/tutorial/nav.zh.yml';

import navTerms_en from '../../content/terms/nav.en.yml';
import navTerms_zh from '../../content/terms/nav.zh.yml';
import navSpecs_en from '../../content/specs/nav.en.yml';
import navSpecs_zh from '../../content/specs/nav.zh.yml';

const sectionListDocs_en = navDocs_en.map(
  (item: Object): Object => ({
    ...item,
    directory: '/en/docs',
  }),
);

const sectionListDocs_zh = navDocs_zh.map(
  (item: Object): Object => ({
    ...item,
    directory: '/zh/docs',
  }),
);

const sectionListGuides_en = navGuides_en.map(
  (item: Object): Object => ({
    ...item,
    directory: '/en/guides',
  }),
);

const sectionListGuides_zh = navGuides_zh.map(
  (item: Object): Object => ({
    ...item,
    directory: '/zh/guides',
  }),
);

const sectionListTopics_en = navTopics_en.map(
  (item: Object): Object => ({
    ...item,
    directory: '/en/topics',
  }),
);

const sectionListTopics_zh = navTopics_zh.map(
  (item: Object): Object => ({
    ...item,
    directory: '/zh/topics',
  }),
);


const sectionListSpecs_en = navSpecs_en.map(
  (item: Object): Object => ({
    ...item,
    directory: '/en/specs',
  }),
);

const sectionListSpecs_zh = navSpecs_zh.map(
  (item: Object): Object => ({
    ...item,
    directory: '/zh/specs',
  }),
);


const sectionListCommunity = navCommunity.map(
  (item: Object): Object => ({
    ...item,
    directory: 'community',
  }),
);

export {
  sectionListCommunity,
  sectionListDocs_en,
  sectionListDocs_zh,
  sectionListGuides_en,
  sectionListGuides_zh,
  sectionListTopics_en,
  sectionListTopics_zh,
  navTutorial as sectionListTutorial,
  navTutorial_zh as sectionListTutorial_zh,
  navTerms_en as sectionListTerms_en,
  navTerms_zh as sectionListTerms_zh,
  sectionListSpecs_en,
  sectionListSpecs_zh,
};
