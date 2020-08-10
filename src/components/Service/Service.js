import React from 'react';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';

const Service = (props) => {
    const { data } = props;
  
    return (
      <div id={data.id} className="service-container">
        <div className="service-format">
          <h2>{data.title}</h2>
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
      </div>
    );
  }
  
  Service.propTypes = {
    data: PropTypes.object,
  };

  export default Service;