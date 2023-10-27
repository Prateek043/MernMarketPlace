const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "prateekkumarchaudhary",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/MernMarketPlace',
  stripe_connect_test_client_id: 'acct_1O5BAESFJnPnGw58t',
  stripe_test_secret_key: 'sk_test_51O5BAESFJnPnGw58Gtiv5XmkMA6Vds4bo0WhbE0dAAH3uRtpqpukVlEAq9tmSVng6tE2L9uMZDhTVTzTQy4MNp8U00QIdrblom',
  stripe_test_api_key: 'pk_test_51O5BAESFJnPnGw58F2ueftExMDla7g85kieBh6HWcCbb5d7vRd9NMOTQkclpdxXuW5GTMDE3QZzNu73PUH1MZ59l005a12RgQz' 
}

module.exports=config;
