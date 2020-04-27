

export const mongo = {
    hostName: 'mongodb://127.0.0.1:27017/ourbus',
    options: { 'useNewUrlParser': true, 'useUnifiedTopology': true, 'useFindAndModify': false, 'useCreateIndex': true, 'useUnifiedTopology': true }
}

// export const morgan = {
//     logger: (req, res, err) => {
//         if (err) return done(err)

//         // respond to request
//         res.setHeader('content-type', 'text/plain')
//         res.end('hello, world!')
//     }
// }
