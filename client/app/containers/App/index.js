/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { CSSTransition } from 'react-transition-group';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import primaryColor from '@material-ui/core/colors/teal';
import secondaryColor from '@material-ui/core/colors/blueGrey';
import Typography from '@material-ui/core/Typography';
import GlobalStyle from '../../global-styles';
import { useInjectSaga } from '../../utils/injectSaga';
import saga from '../SearchSimilar/saga';
import messages from './messages';
import SearchPage from '../SearchSimilar/Loadable';

let theme = createMuiTheme({
  palette: {
    // type: 'dark',
    primary: primaryColor,
    secondary: secondaryColor,
  },
});
theme = responsiveFontSizes(theme);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 100px;
  margin: 100px auto;
  
  h1 {
    position: fixed;
    top: 0;
    font-size: 100px;
    margin: 0;
    background-color: white;
    z-index: 10;
    width: 100%;
    text-align: center;
    @media (max-width: 767px) {
      font-size: 50px;
    }
  }
`;

export default function App() {
  useInjectSaga({ key: 'similar', saga });

  return (
    <Wrapper>
      <Typography variant="h1" gutterBottom>
        <FormattedMessage {...messages.title} />
      </Typography>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                <div className="page">
                  <SearchPage />
                </div>
              </CSSTransition>
            )}
          </Route>
        </Switch>
      </ThemeProvider>
      <GlobalStyle />
    </Wrapper>
  );
}
