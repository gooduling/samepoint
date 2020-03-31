import React from 'react';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Paper from '@material-ui/core/Paper';
import Collapse from '@material-ui/core/Collapse';

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

  const { query, dictionary, onFind } = props;
  const similars = dictionary[query];
  const btnText = (similars && checked) ? messages.hideBtn : messages.showBtn;
  const btnHandler = similars ? handleChange : onFind;
  return (
    <Paper>
      <p>{query}</p>
      {similars && (
        <Collapse in={checked}>
          <ol>
          {similars.map((sim, i) => <li key={i}>{sim}</li>)}
          </ol>
        </Collapse>
      )}
      <div>
        <br />
        <Button onClick={btnHandler} color="primary">
          <FormattedMessage {...btnText} />
        </Button>
      </div>
    </Paper>
  )
};

Card.propTypes = {};

export default Card;
