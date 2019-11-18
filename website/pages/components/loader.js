export function renderLoader(doc, main) {
    const loader = doc.createElement('div')
    loader.setAttribute('id', 'spinner')
    loader.setAttribute('class', 'spinner')
    main.appendChild(loader)
}

export function removeLoader(doc, main) {
    const loader = doc.getElementById('spinner')
    main.removeChild(loader)
}
