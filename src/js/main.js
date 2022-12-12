import './_vendor';
import vars from './_vars';
import './_functions';
import './_components';


// исправить ошибку в консоле validate-forms.js:9 Нет такого селектора!

import {
  validateForms
} from './functions/validate-forms';
import GraphModal from 'graph-modal';
const modal = new GraphModal();
const rules1 = [{
    ruleSelector: '.questions__form-name',
    rules: [{
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните имя!'
      }
    ]
  },
  {
    ruleSelector: '.questions__form-phone',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните телефон!'
    }]
  },
  {
    ruleSelector: '.questions__form-offer',
    tel: true,
    telError: 'Введите ваше сообщение',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Заполните предложение!'
    }]
  }

];
const rules2 = [{
    ruleSelector: '.authorization__form-email',
    rules: [{
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Введите E-mail!'
      }
    ]
  },
  {
    ruleSelector: '.authorization__form-pass',
    tel: true,
    telError: 'Введите корректный телефон',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Введите пароль'
    }]
  }

];
const rules3 = [{
    ruleSelector: '.register__form-input--email',
    rules: [{
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Заполните E-mail!'
      },
      {
        rule: 'email',
        errorMessage: 'Некорректный E-mail!'
      }
    ]
  },
  {
    ruleSelector: '.register__form-input--pass',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Введите пароль'
    }]
  },
  {
    ruleSelector: '.register__form-input--repass',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Повторите пароль'
    }]
  },
  {
    ruleSelector: '.register__form-agree--input',
    rules: [{
      rule: 'required',
      value: true,
      errorMessage: 'Подтвердите'
    }]
  }



];

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};
const afterFormReg = () => {

  console.log('Register');

};

const formI = document.querySelector('.questions__form');
const formF = document.querySelector('.authorization__form');
const formR = document.querySelector('.register__form');
if (formI) {
  validateForms('.questions__form', rules1, afterForm);
}


if (formF) {
  validateForms('.authorization__form', rules2, afterForm);
}
if (formR) {
  validateForms('.register__form', rules3, afterFormReg);
}



// Checkbox
const checkbox = document.querySelector("#rules_inp");
const registerCheckboxes = document.querySelectorAll('.register__checkbox input');
// const checkboxAgree = document.querySelector('#agree');
// const regBtn = document.querySelector('.register__form-btn');

// if (checkboxAgree) {
//   checkboxAgree.onclick = function () {
//     if (checkboxAgree.checked) {

//     } else {

//     }
//   };
// }


if (checkbox) {
  checkbox.onclick = function () {
    if (checkbox.checked) {
      console.log("Запомнить меня");
    } else {
      console.log("Не запоминать");
    }
  };
}

if (registerCheckboxes) {
  registerCheckboxes.forEach((i) => {

    i.onclick = function () {
      if (i.checked) {
        console.log(i.value);
      } else {
        console.log("2");
      }
    };

  });
}
// language
const lang = document.querySelector('.header__langswitch-input');
const itemOne = document.querySelector('.header__item--one');
const itemTwo = document.querySelector('.header__item--two');
const itemThree = document.querySelector('.header__item--three');
const itemFour = document.querySelector('.header__item--four');

if (lang) {
  lang.onclick = function () {
    if (lang.checked) {
      itemOne.textContent = 'webmasters';
      itemTwo.textContent = 'advertisers';
      itemThree.textContent = 'sign up';
      itemFour.textContent = 'sign in';
    } else {
      itemOne.textContent = 'вебмастерам';
      itemTwo.textContent = 'рекламодателям';
      itemThree.textContent = 'регистрация';
      itemFour.textContent = 'вход';
    }
  };

}
// inputs

const inputs = document.querySelectorAll('.register__form input');
// regBtn.addEventListener('click', () => {

//   // const inpo = inputs.map(i => i.value);
//   const inpo = inputs.map(inp => {

//     return inp.value;
//   });
//   console.log(inpo);
// });
// inputs.forEach((i) => {

//   i.addEventListener('input', () => {

//     console.log(i.innerText);
//   });
// });
console.log(modal);
