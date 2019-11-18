import getProjetcs from '../requests/get-projects'
import {
  removeLoader,
  renderLoader
} from './components/loader'

export default async function (doc, main) {
  renderLoader(doc, main)
  const projects = await getProjetcs()
  removeLoader(doc, main)
  Object.values(projects).forEach(project => {
    const container = doc.createElement('container');
    const square = doc.createElement('div')
    const title = doc.createElement('h1')
    const content = doc.createElement('div')
    const span1 = doc.createElement('span');
    const span2 = doc.createElement('span');
    const span3 = doc.createElement('span');
    const description = doc.createElement('p')

    title.innerText = project.name
    description.innerText = project.description

    const url = doc.createElement('a')
    url.setAttribute('href', project.url)
    url.innerText = 'Read more'

    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(url);

    square.appendChild(span1);
    square.appendChild(span2);
    square.appendChild(span3);
    square.appendChild(content);

    container.appendChild(square)

    main.appendChild(container)

    container.classList.add('project-container');
    square.classList.add('project-square');
    content.classList.add('project-content');

  })

}