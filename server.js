const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'test.json'))
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})

router.get("/access", (req, res) => {
  const data = [];
  res.send(data);
  console.log(data,"data")
});


router.delete("/access/:id", (req, res) => {
  const data = []; 
  res.send(data);
});