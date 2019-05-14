function configuration(env){
  if (env === 'development') {
    return {
      url: {
        API_URL: 'http://192.168.0.152:3000'
      }
    };
  } else {
    return { 
      url: {
        API_URL: '157.230.251.69'
      }
    };
  } 
}

export const config = configuration(process.env.NODE_ENV)