export default function (doc, main) {
  // const mainDiv = doc.createElement('div');
  // const technoSection = doc.createElement('h3');
  // const firstLists = doc.createElement('ul');
  // const otherSection = doc.createElement('h4');
  // const secondLists = doc.createElement('ul');
  // const aboutMe = doc.createElement('div');
  // const p = doc.createElement('p');

  // p.textContent = 'Hi, about me section';
  // aboutMe.appendChild(p);

  // technoSection.textContent = 'Technologies';
  // otherSection.textContent = 'Other Toolkits';

  const container = doc.createElement('container')
  const square = doc.createElement('div');
  const content = doc.createElement('div');
  const h2 = doc.createElement('h2');
  const span1 = doc.createElement('span');
  const span2 = doc.createElement('span');
  const span3 = doc.createElement('span');
  const p = doc.createElement('p');
  const a = doc.createElement('a');

  h2.textContent = 'About Me';
  p.textContent = 'From Fraud Analyst to aspiring Web Developer. I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.A key strength is communication; building strong relationships with people in order to deliver the best results.';
  a.setAttribute('href', 'https://mayapancake.github.io/My-CV/CV/index.html')
  a.innerText = 'Check my Resume'

  square.appendChild(span1)
  square.appendChild(span2)
  square.appendChild(span3);
  square.appendChild(content);

  content.appendChild(h2);
  content.appendChild(p)
  content.appendChild(a);

  container.appendChild(square);

  square.classList.add('home-square');
  content.classList.add('home-content');

  main.appendChild(container);


  // const otherLists = ['Git', 'Command line/Termnal', 'Firebase'];
  // otherLists.forEach((item) => {
  //   const li = doc.createElement('li');
  //   const text = doc.createTextNode(item);
  //   li.appendChild(text);
  //   secondLists.appendChild(li);
  // })

  // mainDiv.appendChild(aboutMe);
  // mainDiv.appendChild(technoSection);
  // mainDiv.appendChild(firstLists);
  // mainDiv.appendChild(otherSection);
  // mainDiv.appendChild(secondLists);
  // main.appendChild(mainDiv)
}