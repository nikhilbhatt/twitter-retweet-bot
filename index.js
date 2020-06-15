const httpmodeule = require('http');
const server = httpmodeule.createServer((req, res) => {
})


const Twit = require('twit');   //importing the modeule twit
// console.log(twit);
const keys = require('./config.js');
let T = new Twit(keys);

// let params={ 
//              q: 'rainbow',
//              count: 2   
//            };

// T.get('search/tweets', params, gotData);

// function gotData(err, data, response) {
//     let tweets=data.statuses;
//     tweets.forEach(element => {

//         console.log(element.text);  
//     })
//     // console.log(err,data,response)
//   }

//tweet:-

// let stream=T.stream('statuses/sample', { track: '@nikkbhatt'});
// var stream = T.stream('statuses/filter', { track: 'nikkbhatt' });
// console.log(stream)

// stream.on('tweet', function () {
//     console.log('yalgaar');
// })

// stream.on('follow', function () {
//     console.log('function')
// })




// function followed(eventMsg) {
//     console.log('follow');
//     let screenName = eventMsg.source.screen_name;
//     tweetIt('.@' + screenName + ' thanks for following');
// }
// function tweetIt(txt) {
//     console.log('tweet');
//     let tweet = {
//         status: txt
//     };

//     T.post('statuses/update', tweet, tweeted);

//     function tweeted(err, data, response) {
//         if (err) {
//             console.log('Something Went wrong');
//         }
//         else {
//             console.log('Working')
//         }
//     }
// }


function retweet() {

    let params = {
        q: '#100DaysOfCode,#JavaScript,#PHP,#nodejs',
        result_type: 'recent',
        lang: 'en'
    }

    T.get('search/tweets', params, function (err, data) {
        if (!err) {
            var retweetId = data.statuses[0].id_str;
            T.post('statuses/retweet/:id', {
                id: retweetId
            }, function (e, response) {
                if (response) {
                    console.log('retweeted ', response);
                }
                if (e) {
                    console.log('retweet error=', e);
                }
            })
        }
        else {
            console.log('error in searching = ', err);
        }
    })

}

server.listen(process.env.PORT || 5000);

retweet();
setInterval(retweet, 120000);