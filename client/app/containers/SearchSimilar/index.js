/*
 * Greeting
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as searchSimilarActions from './actions';
import { makeSelectSimilar, makeLoadersSimilar } from './selectors';
import Card from './Card';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ColWrapper = styled.div`
  max-width: 500px;
  min-width: 300px;
  margin: 0 auto;
  max-height: 600px;
  overflow-y: auto;
  padding: 10px;
  flex-grow: 1;
    
  &.right > div {
    margin-bottom: 15px;
    padding: 15px;
  }
`;

class SearchPage extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      sentences: [],
    };
  }

  _handleChange = (e) => {
    const inputValue = e.target.value;
    const sentences = inputValue.split(/[.?!]\s/);
    this.setState({ sentences, inputValue });
  };

  _searchForSimilar = (sentence) => () => {
    this.props.searchForSame({ query: sentence });
  };

  render() {
    const { inputValue, sentences } = this.state;
    const { loaders, similarDic } = this.props;

    return (
      <Wrapper>
        <ColWrapper>
          <Typography gutterBottom>
            Instead of looking for texts containing sentences that are close
            in meaning, V 1 of this app uses the small word2vec magnitude model
            and finds similarities separately for each word in the original sentence, composing new sentences from them.
          </Typography>
          <br/>
          <TextField
            id="outlined-multiline-static"
            label="Insert Text"
            multiline
            rows="10"
            value={inputValue}
            onChange={this._handleChange}
            variant="outlined"
            fullWidth
          />
        </ColWrapper>
        <ColWrapper className="right">
          {sentences.map((sentence, i) => sentence.length > 0 && (
            <Card
              key={i}
              dictionary={similarDic}
              query={sentence}
              onFind={this._searchForSimilar(sentence)}
              isLoading={loaders[sentence]}
            />
          ))}
        </ColWrapper>
      </Wrapper>
    );
  }
}

SearchPage.propTypes = {
  similarDic: PropTypes.object.isRequired,
  searchForSame: PropTypes.func.isRequired,
  loaders: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
    similarDic: makeSelectSimilar(),
    loaders: makeLoadersSimilar(),
  },
);

function mapDispatchToProps(dispatch) {
  return {
    searchForSame: (payload) =>
      dispatch(searchSimilarActions.searchForSimilar(payload)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchPage);
