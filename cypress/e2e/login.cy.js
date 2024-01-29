
describe('автотест формы логин/пароль плюс восстановление пароля', function () {
   it('1. логин/пароль верные', function () {
        cy.visit('https://login.qa.studio/'); //посети сайт
        cy.get('#mail').type('german@dolnikov.ru'); //введи логин
        cy.get('#pass').type('iLoveqastudio1'); //введи пароль
        cy.get('#loginButton').click(); //кликни войти
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
   it('2. автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); //посети сайт
        cy.get('#forgotEmailButton').click(); //нажми забыли пароль
        cy.get('#forgotForm > .header').should('be.visible'); //текст виден
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //текст совпадает
        cy.get('#mailForgot').type('abra@kadabra.ru'); //введи Неправильный логин
        cy.get('#restoreEmailButton').click(); //нажми отправить код
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
   it('3. логин верный/пароль НЕверный', function () {
        cy.visit('https://login.qa.studio/'); //посети сайт
        cy.get('#mail').type('german@dolnikov.ru'); //введи логин
        cy.get('#pass').type('iLoveqastudio1000000'); //введи неверный пароль
        cy.get('#loginButton').click(); //кликни войти
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст совпадает
    })
   it('4. логин НЕверный/пароль верный', function () {
        cy.visit('https://login.qa.studio/'); //посети сайт
        cy.get('#mail').type('abra@kadabra.ru'); //введи НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); //введи пароль
        cy.get('#loginButton').click(); //кликни войти
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //текст совпадает
    })
   it('5. Проверка валидации', function () {
        cy.visit('https://login.qa.studio/'); //посети сайт
        cy.get('#mail').type('abrakadabra.ru'); //введи НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); //введи пароль
        cy.get('#loginButton').click(); //кликни войти
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //текст совпадает
    })
   it('6. логин/пароль верные, НО строчные', function () {
        cy.visit('https://login.qa.studio/'); //посети сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); //введи логин
        cy.get('#pass').type('iLoveqastudio1'); //введи пароль
        cy.get('#loginButton').click(); //кликни войти
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
   it('7*(необязательный)забыли пароль позитивный кейс', function () {
        cy.visit('https://login.qa.studio/'); //посети сайт
        cy.get('#forgotEmailButton').click(); //нажми забыли пароль
        cy.get('#forgotForm > .header').should('be.visible'); //текст виден
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //текст совпадает
        cy.get('#mailForgot').type('german@dolnikov.ru'); //введи логин
        cy.get('#restoreEmailButton').click(); //нажми отправить код
        cy.get('#messageHeader').should('be.visible'); //текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //текст совпадает
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //крестик виден
    })
})