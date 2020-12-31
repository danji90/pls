import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import renderHTML from 'react-render-html';
import { v1 as uniqueKey } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '../Divider/Divider';

const linkToLevelTest = (
  <div>
    <p>
      You will need to do a Level Test to determine your English level. Please
      click <Link to="/test">here</Link>
    </p>
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
    },
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
                <p key={uniqueKey()}>{renderHTML(paragraph)}</p>
              ))}
              {data.content.list && (
                <ol>
                  {data.content.list.map(item => (
                    <li key={uniqueKey()}>{renderHTML(item)}</li>
                  ))}
                </ol>
              )}
              <br />
              {data.format && (
                <>
                  <Accordion
                    className={classes.accordion}
                    expanded={expanded === 'format'}
                    onChange={handleAccordionChange('format')}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6" className={classes.heading}>
                        Format
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                      {data.format.paragraphs.map(paragraph => (
                        <p key={uniqueKey()}>{renderHTML(paragraph)}</p>
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
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="h6" className={classes.heading}>
                        Cost
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.accordionDetails}>
                      {data.cost.paragraphs.map(paragraph => (
                        <p key={uniqueKey()}>{renderHTML(paragraph)}</p>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                </>
              )}
              <br />
              {data.extras && (
                <>
                  {data.extras.paragraphs.map(paragraph => (
                    <p key={uniqueKey()}>{renderHTML(paragraph)}</p>
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
