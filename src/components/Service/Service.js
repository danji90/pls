import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import renderHTML from 'react-render-html';
import { v1 as uniqueKey } from 'uuid';
import {
  makeStyles,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import Divider from '../Divider/Divider';

const linkToLevelTest = (
  <div>
    <Typography>
      You will need to do a Level Test to determine your English level. Please
      click{' '}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfa7XH3bafMVuNxRcI2wyu1CnndZvz9MUdSw-sJtBbepVIn6Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        here
      </a>
    </Typography>
  </div>
);

const useStyles = makeStyles(theme => ({
  service: {
    padding: '0 30px',
    marginTop: 40,
    backgroundColor: '#f9f9f9',
  },
  serviceTitle: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
    },
  },
  serviceMain: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  serviceText: {
    flex: 1,
  },
  mainImage: {
    width: '50vw',
    height: '50vw',
    border: '3px solid #353535',
    borderRadius: '50%',
    overflow: 'hidden',
    margin: 'auto',
    [theme.breakpoints.up('sm')]: {
      float: 'right',
      maxWidth: 500,
      maxHeight: 500,
      marginLeft: 60,
    },
  },
  accordion: {
    display: 'flex',
    flexDirection: 'column',
  },
  accordionDetails: {
    display: 'block',
  },
  serviceImages: {
    minWidth: 300,
    flex: 1,
    '& img': {
      width: '100%',
      padding: '1px',
      border: '3px solid black',
      borderImage: 'none',
      borderRadius: '0px 50px 0px 50px',
      '-moz-border-radius': '0px 50px 0px 50px',
      '-webkit-border-radius': '0px 50px 0px 50px',
    },
  },
  listItem: {
    display: 'block',
    lineHeight: 1.5,
  },
  dividerTop: {
    width: '100%',
    marginBottom: '-50px',
  },
  dividerBottom: {
    width: '100%',
    marginBottom: '50px',
  },
}));

const Service = props => {
  const { data, idx } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Divider idx={idx} />
      <div id={data.id} className={classes.service}>
        <Container>
          <h1 className={classes.serviceTitle}>{renderHTML(data.title)}</h1>
          <div className={classes.serviceMain}>
            <div className={classes.serviceText}>
              {data.images && data.images.mainImage && (
                <div
                  className={classes.mainImage}
                  style={{
                    backgroundImage: `url(${data.images.mainImage})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat, repeat',
                  }}
                />
              )}
              {data.content.paragraphs.map(paragraph => (
                <div key={uniqueKey()}>
                  <Typography>{renderHTML(paragraph)}</Typography>
                </div>
              ))}
              {data.content.list && (
                <List component="ol">
                  {data.content.list.map(item => (
                    <div key={uniqueKey()}>
                      <ListItem
                        className={classes.listItem}
                        alignItems="center"
                      >
                        <Typography>{renderHTML(item)}</Typography>
                      </ListItem>
                    </div>
                  ))}
                </List>
              )}
              <br />
              {data.format && (
                <>
                  <Accordion
                    className={classes.accordion}
                    expanded={expanded === 'format'}
                    onChange={handleAccordionChange('format')}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="h6" className={classes.heading}>
                        Format
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                      {data.format.paragraphs.map(paragraph => (
                        <div key={uniqueKey()}>
                          <Typography>{renderHTML(paragraph)}</Typography>
                          <br />
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </>
              )}
              {data.cost && (
                <>
                  <Accordion
                    className={classes.accordion}
                    expanded={expanded === 'cost'}
                    onChange={handleAccordionChange('cost')}
                  >
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="h6" className={classes.heading}>
                        Cost
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                      {data.cost.paragraphs.map(paragraph => (
                        <div key={uniqueKey()}>
                          <Typography>{renderHTML(paragraph)}</Typography>
                          <br />
                        </div>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </>
              )}
              <br />
              {data.extras && (
                <>
                  {data.extras.paragraphs.map(paragraph => (
                    <Typography key={uniqueKey()}>
                      {renderHTML(paragraph)}
                    </Typography>
                  ))}
                </>
              )}
              <br />
              {data.extras && data.extras.levelTest && linkToLevelTest}
              <br />
            </div>
          </div>
          <div className={classes.serviceImages}>
            {data.images &&
              data.images.otherImages &&
              data.images.otherImages.map(image => {
                return <img key={uniqueKey()} src={image} alt="Not found" />;
              })}
          </div>
        </Container>
      </div>
      <Divider idx={idx} position="bottom" />
    </>
  );
};

Service.propTypes = {
  data: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default Service;
