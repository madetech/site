import React from 'react'
import Helmet from 'react-helmet'

export default function Scripts() {
  return (
    <Helmet>
      {/* HubSpot */}
      <script
        id="hs-script-loader"
        src="//js.hs-scripts.com/554916.js"
        async
        defer
      />
      <script
        charset="utf-8"
        type="text/javascript"
        src="//js.hsforms.net/forms/v2.js"
        async
        defer
      />

      {/* Google Analytics */}
      <script>{`
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-46200988-3']);
        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        })();
      `}</script>

      {/* Drip */}
      <script>{`
        var _dcq = _dcq || [];
        var _dcs = _dcs || {};
        _dcs.account = '6618307';
        (function() {
          var dc = document.createElement('script');
          dc.type = 'text/javascript'; dc.async = true;
          dc.src = '//tag.getdrip.com/6618307.js';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(dc, s);
        })();
      `}</script>

      {/* Google Tag Manager */}
      <script>{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-P9JLJK');
      `}</script>
    </Helmet>
  )
}
