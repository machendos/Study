'use strict';


Idea:

Имеется 4 сервера в паралельных процесах.
На брокер постоянно приходят запросы на insert в базу данных
База данных - распределённая, и частично хранится а виде хеш таблиц
на воркерах, к которым доступается брокер запросов.
Взаиможействие между воркерами и брокером: IPC
Взаиможействие с клиентами: HTTP / TCP

Выбор сервера для записи новый данных через консистеннтное хеширование
Если воркер Х поламается, то нам не нужно будет перераспределяь все записи
по новым воркерам, а просто нужно перераспределить записи из умершего воркера