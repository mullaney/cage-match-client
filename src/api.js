// export const apiDomain = 'https://cage-match-api.herokuapp.com';
export const apiDomain = process.env.NODE_ENV === 'production' ? 'https://cage-match-api.herokuapp.com' : 'http://0.0.0.0:3000';
