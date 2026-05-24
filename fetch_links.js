import https from 'http';

https.get('http://www.gbspf.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const matches = data.match(/<a.*?href="(.*?)".*?>(.*?)<\/a>/g);
    if(matches) {
       console.log(matches.slice(0, 50).join('\n'));
    }
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
