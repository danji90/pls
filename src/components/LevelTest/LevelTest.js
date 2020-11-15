import React, { Component } from 'react';
import { v1 as uniqueKey } from 'uuid';
import PropTypes from 'prop-types';
import {
  Paper,
  Container,
  List,
  ListItem,
  Checkbox,
  ListItemIcon,
  ListItemText,
  withStyles,
} from '@material-ui/core';
import PlsContainer from '../PlsContainer/PlsContainer';
import questions from '../../utils/level_test';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      width: '100%',
      minHeight: 100,
    },
  },
  paper: {
    padding: 20,
  },
  landingTitle: {
    fontSize: 25,
    width: '100%',
    '& h1': {
      padding: '40px 40px',
    },
  },
};

const createInitialState = quiz => {
  const keys = quiz.map((q, idx) => {
    const questionString = `question-${idx + 1}`;
    return `${questionString}`;
  });
  return keys.reduce((ac, a) => ({ ...ac, [a]: [] }), {});
};

class LevelTest extends Component {
  constructor(props) {
    super(props);
    this.state = createInitialState(questions);

    // this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    console.log(this.state);
  }

  // handleAnswerSelected() {

  // }

  render() {
    const { classes } = this.props;
    return (
      <>
        <PlsContainer>
          <div className={classes.landingTitle}>
            <h1>Level Test</h1>
          </div>
        </PlsContainer>
        <PlsContainer flexDirection="column">
          <Container className={classes.root}>
            <Paper className={classes.paper}>
              {questions.map((question, idx) => {
                return (
                  <>
                    <p key={uniqueKey()}>
                      <strong>
                        {`${idx + 1}. `}
                        {question.question}
                      </strong>
                    </p>
                    <List>
                      {question.options.map(option => {
                        return (
                          <ListItem key={uniqueKey()}>
                            <ListItemIcon>
                              <Checkbox
                                edge="start"
                                checked
                                tabIndex={-1}
                                disableRipple
                              />
                            </ListItemIcon>
                            <ListItemText primary={option} />
                          </ListItem>
                        );
                      })}
                    </List>
                  </>
                );
              })}
            </Paper>
          </Container>
        </PlsContainer>
      </>
    );
  }
}

LevelTest.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LevelTest);
