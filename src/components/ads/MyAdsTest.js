import React from 'react'



export default class  MyAdsTest  extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }

      render () {
        return (
          <>
            <ins className='adsbygoogle'
              style={{ display: 'block' }}
              data-ad-format="fluid"
              data-ad-layout-key="-6t+ed+2i-1n-4w"
              data-ad-client="ca-pub-6194101006796140"
              data-ad-slot="2023638853" />
          </>
        );
      }

}
