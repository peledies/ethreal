var colors = require('colors');
var Table = require('cli-table');

const httpromise = function(url) {
  // return new pending promise
  return new Promise((resolve, reject) => {
    // select http or https module, depending on reqested url
    const lib = url.startsWith('https') ? require('https') : require('http');
    const request = lib.get(url, (response) => {
      // handle http errors
      if (response.statusCode < 200 || response.statusCode > 299) {
         reject(new Error('Failed to load page, status code: ' + response.statusCode));
       }
      // temporary data holder
      const body = [];
      // on every content chunk, push it to the data array
      response.on('data', (chunk) => body.push(chunk));
      // we are done, resolve promise with those joined chunks
      response.on('end', () => resolve(body.join('')));
    });
    // handle connection errors of the request
    request.on('error', (err) => reject(err))
    })
};

const loadTable = function(data){
  var parsed = JSON.parse(data);

  var change = (parsed.change >= 0)
        ? colors.green(' '+parsed.change)
        : colors.red(parsed.change);

  var c = (parsed.symbol == 'eth')? 'cyan':'magenta'

  table.push(
      [colors[c](parsed.name), colors[c](parsed.price.usd), change]
  );

}

var table = new Table({
  chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
         , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
         , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
         , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
});

httpromise('http://coinmarketcap-nexuist.rhcloud.com/api/btc')
  .then((data) => loadTable(data))
  .then(function(){
    httpromise('http://coinmarketcap-nexuist.rhcloud.com/api/eth')
      .then((data) => loadTable(data))
      .then(function(){
        console.log(table.toString());
      })
  });
