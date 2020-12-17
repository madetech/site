import React from 'react'
import Helmet from 'react-helmet'

export default function JobBoard() {
  return <>
    <div id="whr_embed_hook"></div>
    <Helmet>
      <script src='https://www.workable.com/assets/embed.js' type='text/javascript' onLoad={`
          whr(document).ready(function(){
            whr_embed(457904, {detail: 'titles', base: 'jobs', zoom: 'city', grouping: 'departments'})
          })
        `}></script>
    </Helmet>
  </>
}
