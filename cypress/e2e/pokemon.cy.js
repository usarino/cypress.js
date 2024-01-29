
describe('Длинный автотест на покупку нового фото для своего тренера', function () {
   it('e2e тест на покупку нового аватара для тренера', function () {
        cy.visit('https://pokemonbattle.me/login'); //посети сайт
        cy.wait (5000) //подождать 5 секунд
        cy.get(':nth-child(1) > .auth__input').type('usarino@yandex.ru'); //введи логин
        cy.get('#password').type('Sa564770'); // введи правильный пароль
        cy.get('.auth__button').click(); // кликни войти
        cy.get('.header__btns > [href="/shop"]').click(); // кликни на кнопку магазин
       cy.wait (1000) //подождать секунду
        cy.get('.shop__list > li').not('.feature-empty').children('.shop__button').eq(0).click(); // кликни на авата
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // введи номер карты VISA 
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); //введи срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); //введи CVC карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Sergei Samoilenko'); //введи ФИ держателя карты
        cy.get('.pay-btn').click(); // кликни оплатить
        cy.wait (2000) //подождать 2 секунды
        cy.get('#cardnumber').type('56456'); //введи код подтверждения
        cy.get('.payment__submit-button').click(); //кликни отправить
        cy.get('.payment__adv').click(); // кликни вернуться в магазин
    })
})