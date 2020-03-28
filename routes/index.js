const router = require('koa-router')()
const store = require('../store')

router.get(sync (ctx, next) => {
  tasks = await store.listTasks()
  tasks.forEach((task) => if(task.description == "") task.description = "Brak"):
  await ctx.render('index', { tasks })
})'/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
