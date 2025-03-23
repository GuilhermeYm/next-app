<h1 style="font-size:20px; text-align:center;"> Next App</h1>
<p align="center"> Here, you'll find a template for 
<b>buttons, forms, labels, and more!</b> 🎉,
</br> 
  <!-- GitHub -->
  <a href="https://github.com/sponsors/daltonmenezes">
    <img alt="github url" src="https://img.shields.io/badge/support%20on-github-1C1E26?style=for-the-badge&labelColor=1C1E26&color=F28BA9"/>
  </a>
  <!-- Patreon -->
  <a href="https://www.patreon.com/daltonmenezes">
    <img alt="patreon url" src="https://img.shields.io/badge/support%20on-patreon-1C1E26?style=for-the-badge&labelColor=1C1E26&color=B181F1"/>
  </a>
  <!-- Version -->
  <a href="https://github.com/daltonmenezes/electron-app/releases">
     <img alt="releases url" src="https://img.shields.io/github/v/release/daltonmenezes/electron-app?style=for-the-badge&labelColor=1C1E26&color=61ffca"/>
  </a>  
  <!-- License -->
  <a href="https://github.com/daltonmenezes/electron-app/blob/main/LICENSE">
    <img alt="license url" src="https://img.shields.io/badge/license%20-MIT-1C1E26?style=for-the-badge&labelColor=1C1E26&color=F28BA9"/>
  </a>
</p>

## Installation

```bash
# Clone the repository
git clone https://github.com/GuilhermeYm/next-app.git

## Enter the main folder

cd nextapp

## Install the dependecies
npm install
#or
yarn install

## Initialize the application
npm run dev
```

## How I can use the components?

This is simple, first you need install the template in your machine. After, you can build your application, e and use the components to make forms, landing pages, and more.
</br>
For example, if you have a form page, you can use the <b>button and label</b>, and you won't be limited, you can implement react-hook-form and zod, or any other library and apply it to your components!

## About the components

The application has the default variant, which is the primary one, it will focus on stylization for the dark background, but the secondary variant can be used in the light background and you can stylize the component already created.

```jsx
  ....
  <Label htmlFor="username" variant="primary">
    Username
  </Label>
  <Input variant="primary" name="username" id="username"/>
```

```jsx
    ....
  <Label htmlFor="username" variant="secondary">
    Username
  </Label>
  <Input variant="primary" name="secondary" id="secondary"/>
```
