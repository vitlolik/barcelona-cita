# Проверить ситу на MALLORCA
node >= 16

1) выполнить `npm ci`

2) создать в корне файлик `params.json` с данными:
```json
{
   "nie": "твой nie",
   "fullName": "имя фамилия как в паспорте",
   "phone": "номер телефона",
   "email": "почта"
}
```

3) выполнить `npm start`