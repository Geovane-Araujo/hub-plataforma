export default async (to, from, next) => {
  if (sessionStorage.getItem('token') === null) {
    sessionStorage.setItem('token', '')
  }
  console.log(to.name)
  if (to.name === 'hubLogin') {
    next()
  } else if (to.name !== 'hubLogin') {
    next({ name: 'hubLogin' })
  } else {
    next()
  }
}
