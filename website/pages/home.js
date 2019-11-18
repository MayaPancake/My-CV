const logo = require('../avatar/avatar.jpg')
export default function (doc, main) {
  const mainHome = doc.createElement('container')
  const home = doc.createElement('div');
  const avatar = doc.createElement('img');
  const name = doc.createElement('h1');
  const title = doc.createElement('h5');
  const content = doc.createElement('p');
  const square = doc.createElement('div');
  const span1 = doc.createElement('span');
  const span2 = doc.createElement('span');
  const span3 = doc.createElement('span');


  //home
  home.classList.add('home-content');
  square.classList.add('home-square')

  //name
  name.textContent = "Maya Mounzer";

  //title
  title.textContent = "Web Developer"

  //avatar
  avatar.classList.add('img-box');
  avatar.setAttribute('src', logo);
  avatar.alt = "profile avatar";

  //content
  content.textContent = "I have a clear, logical mind with a practical approach to problem-solving and a drive to see things through to completion.I instil confidence in others and approach new challenges with an open mind."

  //SocialMedia -- List
  const socialMediaLink = doc.createElement('ul');
  const link = doc.createElement('li');
  const gitHub = doc.createElement('a');
  const linkedIn = doc.createElement('a');
  const twitter = doc.createElement('a');


  socialMediaLink.classList.add('links-ul');

  //github section
  gitHub.href = 'https://github.com/MayaPancake';
  gitHub.innerHTML = '<i class="fab fa-github">';

  //linkedIn section
  linkedIn.href = 'https://www.linkedin.com/in/maya-mounzer-349b28146/';
  linkedIn.innerHTML = '<i class="fab fa-linkedin">';

  //twitter section
  twitter.href = '#';
  twitter.innerHTML = '<i class="fab fa-twitter">';


  //footer


  //append
  home.appendChild(avatar);
  home.appendChild(name);
  home.appendChild(title);
  home.appendChild(content);
  home.appendChild(socialMediaLink);

  square.appendChild(span1);
  square.appendChild(span2);
  square.appendChild(span3);
  square.appendChild(home);

  mainHome.appendChild(square);

  // social media icons
  link.appendChild(linkedIn);
  link.appendChild(gitHub);
  link.appendChild(twitter);
  socialMediaLink.appendChild(link);

  main.appendChild(mainHome);

}