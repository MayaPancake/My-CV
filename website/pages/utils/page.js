import { home, personal, projects, admin } from '../index'

const nav = document.getElementById('nav')
const main = document.getElementById('main')

export default function() {
    switch (document.location.pathname) {
        case '/home':
            home(document, main)
            break
        case '/personal':
            personal(document, main)
            break
        case '/projects':
            projects(document, main)
            break
        case '/admin':
            admin(document, main)
            break
        default:
            break
    }
}
