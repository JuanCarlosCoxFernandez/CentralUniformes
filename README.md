# CentralUniformes
<details>
  <summary>Table of Contents</summary>
  <ol>
    <ul>
      <li><a href="#about-the-project">About the project</a></li>
      <ul>
        <li><a href="#where-does-the-need-arise-from">Where does the need arise from?</a></li>
        <li><a href="#what-company-is-it-developed-for">What company is it developed for?</a></li>
        <li><a href="#what-is-the-project-about">What is the project about?</a></li>
        <li><a href="#technology">Technology</a></li>
        <ul>
          <li><a href="#native-apps">Native Apps</a></li>
          <ul>
            <li><a href="#advantages">Advantages</a></li>
            <li><a href="#disadvantages">Disadvantages</a></li>
          </ul>
          <li><a href="#hybrid-apps">Hybrid Apps</a></li>
          <ul>
            <li><a href="#advantages-1">Advantages</a></li>
            <li><a href="#disadvantages-1">Disadvantages</a></li>
          </ul>
          <li><a href="#web-apps">Web Apps</a></li>
          <ul>
            <li><a href="#advantages-2">Advantages</a></li>
            <li><a href="#disadvantages-2">Disadvantages</a></li>
          </ul>
          <li><a href="#progressive-web-apps-pwas">Progressive Web Apps (PWAs)</a></li>
          <ul>
            <li><a href="#advantages-3">Advantages</a></li>
            <li><a href="#disadvantages-3">Disadvantages</a></li>
          </ul>
        </ul>
        <li><a href="#other">Other</a></li>
      </ul>
      <li><a href="#diagrams-and-justification-data-model">Diagrams and justification (Data model)</a></li>
      <ul>
        <li><a href="#summary">Summary</a></li>
        <li><a href="#diagrams">Diagrams</a></li>
        <ul>
          <li><a href="#entity-relationship">Entity Relationship</a></li>
          <li><a href="#class-diagram">Class Diagram</a></li>
          <li><a href="#orm">ORM</a></li>
        </ul>
      </ul>
      <li><a href="#user-requirements">User Requirements</a></li>
      <li><a href="#use-cases">Use Cases</a></li>
      <li><a href="#running">Running</a></li>
      <li><a href="#interfaces">Interfaces</a></li>
      <ul>
        <li><a href="#design">Design</a></li>
        <li><a href="#usability-and-accessibility">Usability and Accessibility</a></li>
        <ul>
          <li><a href="#usability">Usability</a></li>
          <li><a href="#accessibility">Accessibility</a></li>
        </ul>
      </ul>
      <li><a href="#manuals">Manuals</a></li>
      <ul>
        <li><a href="#user-manual">User Manual</a></li>
        <li><a href="#tests">Tests</a></li>
        <ul>
          <li><a href="#login-test">Login Test</a></li>
        </ul>
      </ul>
      <li><a href="#install">Install</a></li>
      <li><a href="#repositories">Repositories</a></li>
      <li><a href="#conclusions">Conclusions</a></li>
    </ul>
  </ol>
</details>

## About the project

### Where does the need arise from?
This project is a Intranet developed to help employees and clients of CentralUniformes access to diferent applications and management of the users and applications.

### What company is it developed for?
The company who requested this app is CentralUniformes, a leading company in the sales of uniforms in Canary Islands.

### What is the project about?
This project consists of a home pege where everyone can see the news that de admin has created and a lateral menu where every user can access the different applications that the admin granted access.

### Tecnology
This application is a Web App and because of that it have some advantages and disadvantages differents from the rest of tecnologies(Native Apps, hybrid, Web, PWA apps). We can asume that this is a Web application because it is accessible from any device with an internet connection and a web browser, it uses standard web technologies such as HTML, CSS, and JavaScript. Therefore, it is an application that works on different operating systems and browsers without the need to develop specific versions for each platform. Additionally, the use of modern web technologies like JavaScript and frameworks such as React or Angular allows for the creation of interactive and dynamic user interfaces, providing a more engaging user experience. Also the company uses this application to redirect users to other applications so it need to be always active with connection to the server and updates that can be make easer than in other tecnologies without worries or approval of the app store that can affect the users or the applications he can access, and everyone can access regardless of the operating system or browser used to access it.
#### Native Apps:
##### Advantages:

Performance: Native apps are optimized for specific platforms, providing high performance and responsiveness.
Access to Device Features: Native apps can leverage all the features and capabilities of the device, such as camera, GPS, sensors, etc.
User Experience: Native apps often provide a seamless and intuitive user experience, consistent with the platform's design guidelines.
##### Disadvantages:

Development Time and Cost: Building separate apps for different platforms (iOS and Android) can be time-consuming and costly.
Updates: Updates need to be separately developed and pushed to each platform, which may result in delays.
Approval Process: Apps need to go through app store approval processes, which can add time to the release cycle.
#### Hybrid Apps:
##### Advantages:

Cross-Platform Development: Hybrid apps allow developers to write code once and deploy it across multiple platforms, reducing development time and cost.
Access to Device Features: Hybrid apps can access some device features using plugins or APIs.
Faster Development: Development time can be faster compared to native apps, especially for simple applications.
##### Disadvantages:

Performance: Hybrid apps may not perform as well as native apps, especially for resource-intensive tasks.
Limited Access to Device Features: Access to certain device features may be limited compared to native apps.
Dependence on Frameworks: Hybrid apps often rely on frameworks like PhoneGap or React Native, which may have limitations or dependencies.
#### Web Apps:
##### Advantages:

Cross-Platform Compatibility: Web apps are accessible through browsers on various platforms, making them highly compatible.
Easier Maintenance: Updates are applied centrally on the server, and users always access the latest version without manual updates.
No App Store Approval: Web apps don't need approval from app stores, allowing for faster deployment.
##### Disadvantages:

Limited Access to Device Features: Web apps may have limited access to device features compared to native apps.
Offline Functionality: Web apps may struggle with offline functionality, although technologies like Service Workers can mitigate this to some extent.
Browser Compatibility: Ensuring consistent performance across different browsers can be challenging.
#### Progressive Web Apps (PWAs):
##### Advantages:

Offline Functionality: PWAs can work offline or with a slow internet connection, providing a better user experience.
Cross-Platform Compatibility: Like web apps, PWAs are accessible across various platforms.
App-Like Experience: PWAs provide an app-like experience with features such as push notifications.
##### Disadvantages:

Limited Access to Device Features: While improving, PWAs may still have limitations in accessing certain device features compared to native apps.
Not Fully Supported Everywhere: While major browsers and platforms support PWAs, there may still be some limitations in terms of functionality on certain devices or browsers.
Less Visibility: PWAs may not be as discoverable as native apps on app stores.

### Other
The applications shown in the menu, the differents users, roles, the applications itself and the news are manage by the admin who can create, read, modify and delete the different tables.

## Diagrams and justification (Data model)
#### Summary
This section will explain the tables and the relationship between them and their attributes given requested by the company.

### Diagrams
#### Entity relationship

![diagrama de clases](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/29486ebc-fee0-4ed3-8602-dc5931230467)

<br>

<br>

```sh
New has the following attributes:
  -new_id            Integer(10)  Unique Auto_increment  Primary_Key,
  -title             varchar(255) Not Null,
  -content           varchar(500) Not Null,
  -image             file  Not Null,

```
<br>

```sh
Applications has the following attributes:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  icon             varchar(255) Not Null,
  URL              varchar(255) Not Null,

```
<br>

```sh
Roles has the following attributes:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  name             varchar(255) Not Null

```
<br>

```sh
User has the following attributes:
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  name             varchar(255) Not Null,
  email            varchar(255) Not Null,
  password         varchar(255) Not Null

```
<br>

```sh
The intermediate table rol_application, due to the many-to-many relationship between Roles and Apps, has the following attributes:                                         
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  Rol_id           Integer(10)  Not Null Foreign_Key references Rol(id)
  app_id           Integer(10)  Not Null Foreign_Key references Apps(id)

```
<br>

```sh
The intermediate table rol_user, due to the many-to-many relationship between Roles and User, has the following attributes: 
  id               Integer(10)  Unique Auto_increment  Primary_Key,
  Rol_id           Integer(10)  Not Null Foreign_Key references Rol(id)
  app_id           Integer(10)  Not Null Foreign_Key references User(id)

```
<br>
The tables are related to each other in the following way: Roles and Apps are many-to-many related, and Roles and User are many-to-many related to each other as well, while news is an unrelated table.

#### Class diagram

![cdCU](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/3101d358-818b-49a0-8f2d-e7dac92f2a17)
<br>

```sh
New has the following methods:
  +addNew();
  +getNew();
  +updateNew();
  +deleteNew();

```
<br>

```sh
App has the following methods:
  +addApp();
  +getApp();
  +updatepp();
  +deleteApp();

```
<br>

```sh
App has the following methods:
  +addApp();
  +getApp();
  +updateapp();
  +deleteApp();

```
<br>

```sh
Rol has the following methods:
  +addRol();
  +getRol();
  +updateRol();
  +deleteRol();

```
<br>

```sh
Rol has the following methods:
  +addRol();
  +getRol();
  +updateRol();
  +deleteRol();

```
<br>

```sh
User has the following methods:
  +register();
  +logIn();
  +logout();
  +addCustomer();
  +getCustomer();
  +updateCustomer();
  +deleteCustomer();

```
<br>
#### ORM

![diagrama ORM](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/e1678475-d465-4582-b1b6-3b1aa653f84c)
<br>
The tables in the database are created automatically when doing a Laravel migrate, but this is the equivalent code:
<br>
Create database:
<br>

```sh
  CREATE DATABASE db_centraluniformes;
  USE db_centraluniformes;

```
<br>
Create tables:
<br>

```sh
  CREATE TABLE apps (
    id int not null primary key auto_increment,
    icon varchar(255) not null,
    url varchar(255) not null
);

CREATE TABLE roles (
    id int not null primary key auto_increment,
    name varchar(255) not null
);

CREATE TABLE users (
    id int not null primary key auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null
);

CREATE TABLE role_apps (
    id int not null primary key auto_increment,
    apps_id int not null,
    role_id int not null,
    foreign key (apps_id) references apps(id),
    foreign key (role_id) references roles(id)
);

CREATE TABLE user_roles (
    id int not null primary key auto_increment,
    user_id int not null,
    role_id int not null,
    foreign key (user_id) references users(id),
    foreign key (role_id) references roles(id)
);

```
<br>

Backend tests in Postman https://documenter.getpostman.com/view/29807302/2s9YkkfiUL

<br>
## User requirements
This section aims to define the user requirements for the development of the Central Uniformes intranet application, covering the functional and non-functional requirements of the intranet, aimed at improving efficiency and internal collaboration at Central Uniformes.
<br>

Central Uniformes is a leading company in the manufacture and distribution of uniforms for various sectors, including medical services, education and corporate companies. The intranet will be developed to improve internal communication between the company's applications, the management of links and users and the collaboration between the different departments of Central Uniformes.

<br>

As types of users, we find the administrator user who is allowed to access home, modules, users and roles, and manage the data related to them, as well as create new data entries, and the basic user who is allowed access to home and the ability to access basic links. In addition to these, the administrator can create new roles for users which allows modifying the individual access of each one to a certain area, but not modifying the data.

<br>

As functional requirements, users must register under secure credentials, in addition the application has intuitive and accessible menus for each type of user and a search bar that facilitates the search for information, in terms of content management, we can find an upload and secure downloading of data and files whose access is based on roles.

<br>

As non-functional requirements we have the loading speed that is not greater than 3 seconds, strong encryption and password security, compatibility between browsers and responsive design between tablet, mobile and PC. It also has good scalability because by allowing the creation of modules, roles and users, it will grow and adapt with the use of the company.

<br>

## Use cases

![casos de uso](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/606084a2-a982-421d-b0ed-33ff3eaf1e2a)
<br>
In this diagram we can see that the different user can access different applications depending the rol they have and the admin have all the permissions(create,read, modify,delete)

## Running
The general operation:
<br>
Login will be done through the application, and a secure login system with two-factor authentication has been implemented to guarantee security, all through an intuitive user interface and personalized user menus for each one with its related entriesa. Access to documents will be controlled by roles, guaranteeing the privacy and security of the information.
<br>
Regarding the technical specifications, it has been developed in a cloud environment to facilitate accessibility from any location, modern and high-capacity technologies have been used to ensure its future updating and security. The storage is done in MySQL, one of the most secure database technologies. There are also basic security protocols to guarantee the safety of users.

## Interfaces
### Design


https://www.figma.com/file/bfI0Iqb6KjdEgajw0mP6YQ/Central-Uniformes?type=design&node-id=0%3A1&mode=design&t=6Pt1W0lf8BoAKnOt-1

<br>

### Usability and accesibility
#### Usability
  
After implementing the application, I have proceeded to study its usability aspects and they are the following:

<br>
The interface is attractive due to its simplicity, homogeneity and the implementation of the company's colors, which facilitates the identity of its brand, as well as user attraction due to its soft colors and minimalist design.
<br>
  
![Register](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/faf53648-a640-4291-9fc3-b12dcc949e15)

<br>
Also it have a simple menu with icons selected by the admin for each application so they can change it as it suits the taste the company wants.
<br>

![Admin](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/688baec7-720d-4668-86c3-5def5ec05b77)

<br>

As for the buttons, they have a rounded design and the company's colors, which strengthens the brand identity and familiarity for the user:

<br>

![botones](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/fa2ce5b8-45f1-4470-87f2-01e196e0e908)

<br>

The home page is the principal view of the app so it´s normal to put a carousel with images and text for everyone to see.

<br>

![carousel](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/d6b95329-aae1-4de3-a3d5-83a28d569b91)

<br>

In the standard version for the company as requested, which is the PC version, the login and logout icons are different and you can only see the logout if you are logged.

<br>

![logoin](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/07424a16-b523-4153-b55e-5b0ad1220f1a) ![logout](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/4ad21883-c65c-4629-8fde-3ac0fda96575)

<br>

Also in the administrator area we have from desing, which is intuitive, simple and continues with the desing.

<br>

![formulario](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/ad7120b4-543f-4e9b-90dd-d27014642b1b)

<br>
The font of the application favors the understanding of the hierarchy and the balance and interaction between the different characters on the screen
<br>

#### Accesibility
-The text is appropriate to the resolution of the screen and varies depending on it, we can see it in the image, as it does not say px, but rather size, this varies when changing the resolution
<br>

![texto](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/b497b449-e09b-414c-a8f6-6a6e2730ea54)

<br>
-The size of the icons changes depending on the screen resolution, since it modifies the percentage of the size of the sidebar that is filled, in addition, the bar varies depending on the width of the screen
<br>

![iconos](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/2391657d-9a9e-4f54-b67f-415f093a0595)

<br>
-The contrast between the text and the backgroud colors helps people with visual disabilities
<br>

![textcolor](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/af3c0a86-8a03-498e-9767-8bddf1065d6d)

<br>
-The application icons have a large size and separation between them to facilitate their use
<br>

![separacionIconos](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/0974b704-18c6-4218-9038-21e00ba8a832)

<br>
-The buttons are large and separated from other options to ensure correct use
<br>

![separecion botones](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/968398ca-c433-4a35-ae07-ac686668c24a)

<br>

## Manuals
### User manual
The user manual id located in the public folder of the frontend and it can be access by the button in the application.
<br>

![ubicacion manual](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/32a9cb01-7315-4d75-8150-8b4c30f9b097)

![manual](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/798be53e-99ed-44a9-9a56-36d06aea56cc)

<br>
### Tests
#### Login test

![test](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/a56bd4ab-39cb-436e-a86f-2a5108fa6b93)

![test](https://github.com/JuanCarlosCoxFernandez/CentralUniformes/assets/146579185/8878c5c5-3d75-4b1e-86b7-535a25dd0c15)

<br>
## Install

To download and use the project and the technology stack, the first thing is to clone the repository and enter the project:

```sh
    git clone https://github.com/JuanCarlosCoxFernandez/CentralUniformes.git
    cd CentralUniformes
```
<br>
The frontend is React so first you need to download Node.js and then in the terminal:
<br>

```sh
  cd frontend
  npm install
```

<br>
To start the frontend:
<br>

```sh
  npm start
```

<br>
The backend is Laravel so you need to download Composer and then in the terminal:
<br>

```sh
  cd backend
  composer install
  cp .env.example .env
  php artisan key:generate
```

<br>
Edit the .env file with your database configuration.
<br>
To start the backend:
<br>

```sh
  php artisan serve
```

<br>
Eloquent as ORM and MySQL as database.

## Repositories
This project has been done by Juan Carlos Cox Fernandez on git´s repository:
<br>
https://github.com/JuanCarlosCoxFernandez/CentralUniformes
<br>

## Conclusions
During this project, I have encountered more complications than I initially thought, both due to the WSL2 environment and a lack of knowledge about the technologies. Nevertheless, with the certainty that there are many things to improve in the application, I feel proud to have done it. It has opened my eyes to many aspects we take for granted in the applications we use daily but are tremendously challenging to program, not only to implement but also to design.
