/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects:async()=>{
    return[ 
    {
      source: '/',
      destination: '/buyingspace/channels',
      permanent: true
    },
    {
      source: '/buyingspace',
      destination: '/buyingspace/channels',
      permanent: true
    }]
  }

}

module.exports = nextConfig
