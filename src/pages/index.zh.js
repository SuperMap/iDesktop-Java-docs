/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 */

import ButtonLink from 'components/ButtonLink';
import Container from 'components/Container';
import Flex from 'components/Flex';
import React, {Component} from 'react';
import {graphql} from 'gatsby';
import TitleAndMetaTags from 'components/TitleAndMetaTags';
import Layout from 'components/Layout';
import {colors, media, sharedStyles} from 'theme';
import loadScript from 'utils/loadScript';
import createOgUrl from 'utils/createOgUrl';
import {babelURL} from 'site-constants';
import logoWhiteSvg from 'icons/logo-white.svg';
import {FormattedMessage} from 'react-intl';

class Home extends Component {
  state = {
    babelLoaded: false,
  };

  componentDidMount() {
    loadScript(babelURL).then(
      () => {
        this.setState({
          babelLoaded: true,
        });
      },
      error => {
        console.error('Babel failed to load.');
      },
    );
  }

  render() {
    const {babelLoaded} = this.state;
    const {data, location} = this.props;
    const {marketing} = data;

    return (
      <Layout location={location}>
        <FormattedMessage id="site_title">
          {txt => (
            <TitleAndMetaTags title={txt} ogUrl={createOgUrl('index.html')} />
          )}
        </FormattedMessage>

        <div css={{width: '100%'}}>
          <header
            css={{
              backgroundColor: colors.dark,
              color: colors.white,
            }}>
            <div
              css={{
                paddingTop: 45,
                paddingBottom: 20,

                [media.greaterThan('small')]: {
                  paddingTop: 60,
                  paddingBottom: 70,
                },

                [media.greaterThan('xlarge')]: {
                  paddingTop: 95,
                  paddingBottom: 85,
                  maxWidth: 1500, // Positioning of background logo
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  position: 'relative',
                //   '::before': {
                //     content: ' ',
                //     position: 'absolute',
                //     top: 0,
                //     left: 0,
                //     bottom: 0,
                //     right: 0,
                //     backgroundImage: `url(${logoWhiteSvg})`,
                //     backgroundRepeat: 'no-repeat',
                //     backgroundPosition: '100% 100px',
                //     backgroundSize: '50% auto',
                //     opacity: 0.05,
                //   },
                },
              }}>
              <div
                css={{
                  // Content should be above absolutely-positioned hero image
                  position: 'relative',
                }}>
                <Container>
                <FormattedMessage id="home_productName">
                    {txt => (
                      <h1
                      css={{
                        color: colors.brand,
                        textAlign: 'center',
                        margin: 0,
                        fontSize: 45,
                        letterSpacing: '0.01em',
                        [media.size('xsmall')]: {
                          fontSize: 30,
                        },
                        [media.greaterThan('xlarge')]: {
                          fontSize: 60,
                        },
                      }}>
                       {txt}
                    </h1>
                    )}
                  </FormattedMessage>
                  <FormattedMessage id="home_productDescrp">
                    {txt => (
                      <p
                        css={{
                          paddingTop: 15,
                          textAlign: 'center',
                          fontSize: 24,
                          letterSpacing: '0.01em',
                          fontWeight: 200,

                          [media.size('xsmall')]: {
                            fontSize: 16,
                            maxWidth: '12em',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          },

                          [media.greaterThan('xlarge')]: {
                            paddingTop: 20,
                            fontSize: 30,
                          },
                        }}>
                        {txt}
                      </p>
                    )}
                  </FormattedMessage>

                  <Flex
                    valign="center"
                    halign="center"
                    css={{
                      paddingTop: 40,
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                    }}>
                    <CtaItem>
                      <FormattedMessage id="home_gettingStarted">
                        {txt => (
                          <ButtonLink
                            to="zh/guides/getting-started"
                            type="primary">
                            {txt}
                          </ButtonLink>
                        )}
                      </FormattedMessage>
                    </CtaItem>
                    {/* <CtaItem>
                      <FormattedMessage id="home_tutorial">
                        {txt => (
                          <ButtonLink
                            to="/tutorial/tutorial.html"
                            type="secondary">
                            {txt}
                          </ButtonLink>
                        )}
                      </FormattedMessage>
                    </CtaItem> */}
                  </Flex>
                </Container>
              </div>
            </div>
          </header>

          <Container>
            <div css={sharedStyles.markdown}>
              <section
                css={[
                  sectionStyles,
                  {
                    [media.lessThan('medium')]: {
                      marginTop: 0,
                      marginBottom: 0,
                      overflowX: 'auto',
                      paddingTop: 30,
                      WebkitOverflowScrolling: 'touch',
                      position: 'relative',
                      maskImage:
                        'linear-gradient(to right, transparent, white 10px, white 90%, transparent)',
                    },
                  },
                ]}>
                <div
                  css={{
                    display: 'flex',
                    flexDirection: 'row',

                    [media.lessThan('medium')]: {
                      display: 'block',
                      whiteSpace: 'nowrap',
                    },
                  }}>
                  {marketing.edges.map(({node: column}, index) => (
                    <div
                      key={index}
                      css={{
                        display: 'flex',
                        flexDirection: 'column',
                        flex: '0 1 33%',
                        marginLeft: 40,

                        '&:first-of-type': {
                          marginLeft: 0,

                          [media.lessThan('medium')]: {
                            marginLeft: 10,
                          },
                        },

                        [media.lessThan('medium')]: {
                          display: 'inline-block',
                          verticalAlign: 'top',
                          marginLeft: 0,
                          whiteSpace: 'normal',
                          width: '75%',
                          marginRight: 20,
                          paddingBottom: 40,

                          '&:first-of-type': {
                            marginTop: 0,
                          },
                        },
                      }}>
                      <h3
                        css={[
                          headingStyles,
                          {
                            '&&': {
                              // Make specificity higher than the site-wide h3 styles.
                              color: colors.subtle,
                              paddingTop: 0,
                              fontWeight: 300,
                              fontSize: 20,
                              textAlign:'center',
                              [media.greaterThan('xlarge')]: {
                                fontSize: 24,
                              },
                            },
                          },
                        ]}>
                        {column.frontmatter.title}
                      </h3>
                      <div dangerouslySetInnerHTML={{__html: column.html}} />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </Container>
        </div>
      </Layout>
    );
  }
}

const CtaItem = ({children, primary = false}) => (
  <div
    css={{
      width: '50%',

      [media.between('small', 'large')]: {
        paddingLeft: 20,
      },

      [media.greaterThan('xlarge')]: {
        paddingLeft: 40,
      },

      '&:first-child': {
        textAlign: 'center',
        paddingRight: 7,
        paddingLeft: 7,
        [media.lessThan('small')]: {
          marginBottom: 10,
        },
      },

      '&:nth-child(2)': {
        paddingRight: 7,
        paddingLeft: 7,
        [media.greaterThan('small')]: {
          paddingLeft: 15,
        },
        [media.lessThan('small')]: {
          marginBottom: 10,
        },
      },
    }}>
    {children}
  </div>
);

export const pageQuery = graphql`
  query IndexMarkdownZh {
    marketing: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//home/marketing/.*(zh.md)$/"}}
      sort: {fields: [frontmatter___order], order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`;

export default Home;

const sectionStyles = {
  marginTop: 20,
  marginBottom: 15,

  [media.greaterThan('medium')]: {
    marginTop: 60,
    marginBottom: 65,
  },
};

const headingStyles = {
  '&&': {
    marginBottom: 20,
  },
};
