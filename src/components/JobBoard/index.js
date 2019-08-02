import React from 'react';
import Helmet from 'react-helmet';

export default function JobBoard({className}) {
    return <>
      <div id="recruitee-careers" className={className}/>
      <Helmet>
        <script type="text/javascript">{`var rtscript = document.createElement('script');  rtscript.type = 'text/javascript';  rtscript.onload = function() { var widget = new RTWidget({
          "companies": [
            38057
          ],
          "detailsMode": "overlay",
          "language": "en",
          "departmentsFilter": [],
          "fontFamily": "neuzeit-s-book, Helvetica, Arial, sans-serif",
          "themeVars": {
            "primary": "#429b63",
            "secondary": "#000",
            "text": "#5c6f78",
            "textDark": "#37474f",
            "baseFontSize": "0.9rem"
          },
          "flags": {
            "showLocation": true,
            "showCountry": true,
            "showCity": true,
            "groupByLocation": false,
            "groupByDepartment": true,
            "groupByCompany": false
          }
        }) }; rtscript.src = 'https://d10zminp1cyta8.cloudfront.net/widget.js'; document.body.appendChild(rtscript);`}</script>
      </Helmet>
    </>
  }