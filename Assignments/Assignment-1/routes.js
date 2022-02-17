const requestHandler = (req, res) => {
  const { url, method } = req

  switch (method) {
    case 'POST':
      if (url === '/create-user') {
        const body = []
        let username = ''
        req.on('data', (chunk) => {
          body.push(chunk)
          const parsedBody = Buffer.concat(body).toString()
          username = parsedBody.split('=')[1]
          console.log(`parsedBody[${parsedBody}]`)
          console.log(`username[${username}]`)
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
      }
      break
    default:
      //GET
      if (url === '/') {
        res.write(`
        <html>
          <head><title>Users - Assignment 1</title></head>
          <body>
            <h1>Hello Users Welcome!</h1>
            <form action="/create-user" method="POST">
              <input type="text" name="username">
              <button type="submit">submit</button>
            </form>
          </body>
        </html>
        `)
      }
      if (url === '/users' && method === 'GET') {
        const users = [
          {
            name: 'Namsu',
            age: 25,
            occupation: 'Developer',
          },
          {
            name: 'Sam',
            age: 21,
            occupation: 'Full-time Student',
          },
          {
            name: 'Owusu',
            age: 40,
            occupation: 'Five-Star Chef',
          },
        ]

        res.write(
          `
          <html>
            <head><title>Users - Assignment 1</title></head>
            <body>
              <h1>Hello Users Welcome!</h1>
              <ul>
                <li>${users[0].name}</li>
                <li>${users[1].name}</li>
                <li>${users[2].name}</li>
              </ul>
            </body>
          </html>
          `
        )
        return res.end()
      }
      break
  }
  return res.end()
}

module.exports = requestHandler
