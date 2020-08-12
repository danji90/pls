import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { makeStyles } from '@material-ui/core/styles';

import dividerTop from '../../utils/images/pls_divider_top.png';
import dividerBottom from '../../utils/images/pls_divider_bottom.png';

const useStyles = makeStyles((theme) => ({
  service: {
    padding: '0 30px',
    backgroundColor: "#f9f9f9",
  },
  serviceMain: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  serviceText: {
    minWidth: 300,
    flex: 1,
  },
  serviceImages: {
    minWidth: 300,
    flex: 1,
    '& img': {
      width: '100%',
    },
    padding: 20,
  },
  dividerTop: {
    width: '100%',
    marginBottom: '-50px'
  },
  dividerBottom: {
    width: '100%',
    marginBottom: '50px'
  },
}));

const Service = (props) => {
    const { data } = props;
    const classes = useStyles();
  
    return (
      <>
        <img className={classes.dividerTop} src={dividerTop} alt="divider" ></img>
        <div id={data.id} className={classes.service}>
          <h2>{data.title}</h2>
          <div className={classes.serviceMain}>
            <div className={classes.serviceText}>
              {data.content.paragraphs.map((paragraph, idx) => <p key={idx}>{renderHTML(paragraph)}</p>)}
              {data.content.list && 
                <ol>
                    {data.content.list.map((item, idx) => <li key={idx}>{renderHTML(item)}</li>)}
                </ol>
              }
              <br />
              {
                data.format && 
                <>
                  <h3>Format</h3>
                  {data.format.paragraphs.map((paragraph, idx) => <p key={idx}>{renderHTML(paragraph)}</p>)}
                </>
              }
              {
                data.extras && 
                  <>
                    {data.extras.paragraphs.map((paragraph, idx) => <p key={idx}>{renderHTML(paragraph)}</p>)}
                  </>
              }
              <br />
              {
                data.cost && 
                  <>
                    <h3>Cost</h3>
                    {data.cost.paragraphs.map((paragraph, idx) => <p key={idx}>{renderHTML(paragraph)}</p>)}
                  </>
              }
              <br />
            </div>
            {data.images && <><div className={classes.serviceImages}><img src={data.images[0]} alt="service image"></img></div></>}
          </div>
        </div>
        <img className={classes.dividerBottom} src={dividerBottom} alt="divider" ></img>
      </>
    );
  }
  
  Service.propTypes = {
    data: PropTypes.object,
  };

  export default Service;