import page from '../utils/page'

export default function () {
  const pages = ['Home', 'Projects', 'Personal']
  pages.forEach(item => {
    const navItem = document.createElement('a')
    navItem.setAttribute('id', item)
    navItem.setAttribute('class', 'nav-item')
    navItem.setAttribute('href', `/${item.toLowerCase()}`)
    navItem.innerText = item

    navItem.addEventListener('click', event => {
      history.pushState(null, null, event.target.href)
      main.innerHTML = ''
      page()
      event.preventDefault()
    })

    nav.appendChild(navItem)
  })
}