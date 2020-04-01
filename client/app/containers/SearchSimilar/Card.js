import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';
import CircularProgress from '@material-ui/core/CircularProgress';
import messages from './messages';

const FrameWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
  }
  .statistics {
    position: absolute;
    bottom: 0;
    width: 100%;
    color: white;
    padding: 5px;
  }
`;

const Card = (props) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const { query, dictionary, onFind, isLoading } = props;
  const similars = dictionary[query];
  const btnText = (similars && checked) ? messages.hideBtn : messages.showBtn;
  const btnHandler = similars ? handleChange : onFind;
  return (
    <Paper>
      <p>{query}</p>
      {similars && (
        <Collapse in={checked}>
          <ol>
            {similars.map((sent, i) => sent && (
              <li key={i}>{capitalize(sent)}</li>)
            )}
          </ol>
        </Collapse>
      )}
      {isLoading && <p><CircularProgress /></p>}
      <div>
        <br />
        <Button onClick={btnHandler} color="primary">
          <FormattedMessage {...btnText} />
        </Button>
      </div>
    </Paper>
  )
};

Card.propTypes = {
  query: PropTypes.string,
  dictionary: PropTypes.object.isRequired,
  onFind: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default Card;
