import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import './Section.css';

function Section(props) {
    const { data } = props;
  
    return (
      <div className="section-container">
        <h1>{data.title}</h1>
        {data.content.paragraphs.map(paragraph => <p>{renderHTML(paragraph)}</p>)}
        {data.content.list && 
          <ol>
              {data.content.list.map(item => <li>{renderHTML(item)}</li>)}
          </ol>
        }
        <br />
        {
          data.format && 
          <>
            <h3>Format</h3>
            {data.format.paragraphs.map(paragraph => <p>{renderHTML(paragraph)}</p>)}
          </>
        }
        {
          data.extras && 
            <>
              {data.extras.paragraphs.map(paragraph => <p>{renderHTML(paragraph)}</p>)}
            </>
        }
        <br />
        {
          data.cost && 
            <>
              <h3>Cost</h3>
              {data.cost.paragraphs.map(paragraph => <p>{renderHTML(paragraph)}</p>)}
            </>
        }
        <br />
      </div>
    );
  }
  
  Section.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  export default Section;