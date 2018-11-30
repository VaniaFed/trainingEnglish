'use strict';

import '../scss/normalize.css';
import '../scss/index.scss';

import TestPage from './testPage';
import * as help from './helpFunctions';
//import mongodb from './mongoDB.ts';

window.onload = function () {
    // инициировать mongoDB - создать единственный экземпляр
    /* 
        Главная: выбор строки, да?
        после выборы ты уже знаешь, что будет
        По завершении теста перекидывать на главную
        
        Вывод строк из MongoDB
        1. Подключение к MondoDB
        2. Получаем строки
        3. Выводим на главную
    */

    // mongoDb.connect();

    // const myTestPage = new TestPage(jsonData);
    // myTestPage.init();
};