import React from 'react'

function Home() {

    const backgroundStyle = {
        backgroundImage: `url('https://f8n-production-collection-assets.imgix.net/0x987e51B6f520a5027290dBdBAA9Ccc1194beBDB4/10/nft.png?q=80&auto=format%2Ccompress&cs=srgb&h=640')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Adjust the height as needed
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
      };

  return (

    <div style={backgroundStyle}>
      <h1>Welcome to CommuniGro</h1>
      <p>Discover a world of plants you can grow, indoors and outdoors.</p>
      <p>Order seedlings, share your experiences, and connect with fellow gardeners.</p>
      {/* <Link to='/plantlist'>Get Started</Link> */}
    </div>

  )
}

export default Home;