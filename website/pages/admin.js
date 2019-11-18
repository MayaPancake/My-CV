import postProject from '../requests/post-project'

export default function (doc, main) {
  form(doc, main)
}

function form(doc, main) {
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAQfuV7a1XS6IgT5bJEuaFj1TAZMq-a0I0",
  //   authDomain: "contact-form-2-861c3.firebaseapp.com",
  //   databaseURL: "https://contact-form-2-861c3.firebaseio.com",
  //   projectId: "contact-form-2-861c3",
  //   storageBucket: "contact-form-2-861c3.appspot.com",
  //   messagingSenderId: "147284374140",
  //   appId: "1:147284374140:web:879430e14752f11f1e8ff9",
  //   measurementId: "G-EH474165C9"
  // };
  // // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);
  // firebase.analytics();


  // // let messagesRef = firebaseConfig.database().ref('messages');


  const formContainer = doc.createElement('div');
  const brand = doc.createElement('h1');
  const wrapper = doc.createElement('div');
  const personalInfo = doc.createElement('div');
  const name = doc.createElement('h3');
  const ul = doc.createElement('ul');
  const contact = doc.createElement('div');
  const emailUs = doc.createElement('h3');
  const form = doc.createElement('form');
  const img = doc.createElement('img');


  form.addEventListener('submit',
    submitForm);
  //submit form
  const submitForm = (event) => {
    e.preventDefault();

    const name = inputName.value;
    const company = inputCompany.value;
    const email = inputEmail.value;
    const phone = inputPhone.value;
    const message = textarea.value;



    saveMessage(name, company, email, phone, message)
  }

  function saveMessage(name, company, email, phone, message) {
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company: company,
      email: email,
      phone: phone,
      message: message
    })


  }


  img.setAttribute('src', 'http://images6.fanpop.com/image/photos/34600000/Mikasa-mikasa-ackerman-34610074-1280-720.jpg');
  brand.textContent = 'Contact Form';
  name.textContent = 'Maya Mounzer'
  const Address = 'Adjunktsgatan 3 B';
  const Phone = '073 518 2281';
  const Email = 'maeydelee14@yahoo.com';

  const myInfo = [Address, Phone, Email];
  myInfo.forEach((item) => {
    const li = doc.createElement('li');
    const text = doc.createTextNode(item);
    li.appendChild(text);
    ul.appendChild(li);
    personalInfo.appendChild(img)
    personalInfo.appendChild(name);
    personalInfo.appendChild(ul)
  })

  emailUs.textContent = 'Email me'
  contact.appendChild(emailUs);

  //name
  const pName = doc.createElement('p');
  const labelName = doc.createElement('label');
  const inputName = doc.createElement('input');
  labelName.innerHTML = 'Name';
  inputName.setAttribute('type', 'text')
  inputName.setAttribute('name', 'name');
  pName.appendChild(labelName);
  pName.appendChild(inputName);

  //company
  const pCompany = doc.createElement('p');
  const labelCompany = doc.createElement('label');
  const inputCompany = doc.createElement('input');
  labelCompany.innerHTML = 'Company';
  inputCompany.setAttribute('type', 'text');
  inputCompany.setAttribute('name', 'company');
  pCompany.appendChild(labelCompany);
  pCompany.appendChild(inputCompany);

  //email
  const pEmail = doc.createElement('p');
  const labelEmail = doc.createElement('label');
  const inputEmail = doc.createElement('input');
  labelEmail.innerHTML = 'Email Address'
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('name', 'email');
  pEmail.appendChild(labelEmail);
  pEmail.appendChild(inputEmail);


  //phone
  const pPhone = doc.createElement('p');
  const labelPhone = doc.createElement('label');
  const inputPhone = doc.createElement('input');
  labelPhone.innerHTML = 'Phone Number';
  inputPhone.setAttribute('type', 'text');
  inputPhone.setAttribute('name', 'phone');
  pPhone.appendChild(labelPhone);
  pPhone.appendChild(inputPhone);

  //message
  const pMessage = doc.createElement('p');
  const labelMessage = doc.createElement('label');
  const textarea = doc.createElement('textarea');
  labelMessage.innerHTML = 'Message';
  textarea.setAttribute('name', 'message');
  textarea.setAttribute('rows', '5');
  pMessage.appendChild(labelMessage);
  pMessage.appendChild(textarea);

  //submit
  const pSubmit = doc.createElement('p');
  const labelSubmit = doc.createElement('label');
  const button = doc.createElement('button');
  labelSubmit.innerHTML = 'Submit';
  button.setAttribute('type', 'submit');
  button.appendChild(labelSubmit);
  pSubmit.appendChild(button);

  //append form
  form.appendChild(pName);
  form.appendChild(pCompany);
  form.appendChild(pEmail);
  form.appendChild(pPhone);
  form.appendChild(pMessage);
  form.appendChild(pSubmit);

  //add classList
  formContainer.classList.add('contact-container');
  brand.classList.add('contact-brand');
  wrapper.classList.add('contact-wrapper');
  personalInfo.classList.add('personal-info');
  contact.classList.add('contact-div');
  pSubmit.classList.add('contact-full');
  pMessage.classList.add('contact-full');
  img.classList.add('contact-img')


  //append here
  contact.appendChild(form);
  wrapper.appendChild(personalInfo);
  wrapper.appendChild(contact);
  formContainer.appendChild(brand);
  formContainer.appendChild(wrapper);
  main.appendChild(formContainer);

}

function clearForm() {}