# React Email App

A live preview right in your browser so you don't need to keep sending real emails during development.

## react-emails

Run the development server:

```sh
pnpm run dev-react-email
```

Open [localhost:3000](http://localhost:3000) with your browser to see the result.

Export the generated HTML email template

```sh
pnpm run export
```

It will generate HTML emails in the `/dist` folder

## nodemailer

This an Nodejs application where we can test the email template, supported by [nodemailer](https://nodemailer.com/about/) package
Currently I'm using [TESTING SMTP](https://nodemailer.com/smtp/testing/) to test the email sending, but it's also possible, to use GMAIL, or another services.

Run the development server:

```sh
pnpm run dev-nodemailer"
```

The terminal will output the url where you can see the email

Example:

```sh
Credentials obtained, sending message...
Message sent: <d565e1c9-762e-a450-f13f-f2ac8d9a995e@example.com>
Preview URL: https://ethereal.email/message/ZCq2SIa36C.1uwiJZCq2STMxAIniXMu9AAAAATANvN.1rCYA2KqVntwujkE
```
