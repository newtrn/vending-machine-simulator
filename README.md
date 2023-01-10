<h1>Vending Machine Project</h1>

Vending Machine website application is simulated front-end application for vending machine. This application is full-loop simulated for user journeying the vending machine.

<br/>

## List of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Dependencies](#dependencies)
  - [Installing](#installing)
  - [Start the project](#start-the-project)
- [Website and Design detail](#website-and-design-detail)

<br/>

## Getting Started

### Prerequisites

For Development you will need only [Node.js](https://nodejs.org/) version 16.0 or greater installed on your environment.

#### Dependencies

- [clsx](https://github.com/lukeed/clsx)
- [react-redux](https://react-redux.js.org/)
- [reduxjs/toolkit](https://redux-toolkit.js.org/)
- [styled-components](https://styled-components.com/)
- [vite](https://vitejs.dev/)

### Installing

#### Install project dependencies

```bash
$ yarn
```

### Start the project

```bash
$ yarn dev
```

<br/>

## Website and Design detail

![](/src/assets/images/markdown/project-screenshot.png)

Frist page will be the product list and cart items list.

Left side will be product list and when user click on the item, modal with item detail will appear. User also can add the product to cart from the product detail modal. If the product is already out of stock, it will apprear with the opacity and disbled to click.

Right side will be cart items list. User can increase or decrease the amount of selected item also remove the item from cart. This part will show the total price of each product (unit price \* quantity). Below of list items will be the grand total of all price. Use can also going to checkout page by click Checkout button.

<br/>

![](/src/assets/images/markdown/project-screenshot2.png)
Second page will be Receipt and payment section.

Receipt section will display list of all items in cart, total price of each item, and grand total price.

Payment section will simulated when user insert the money by clicking the amount of money button. Also display the remaning money that user need to add for enough money to buy the product. Once user insert enough money, the applicatoin will display the amount of change money also calculated if the machine have enough banknote or coin to change or not.

<br/>

![](/src/assets/images/markdown/project-screenshot3.png)
Final page will be the conclution amount of money changed. This page will display for each back notes and coins that user will recieve according from the remaining amount of banknotes and coins in the machine.

<br/>

\*\*Note
<br/>
For product list item will be mocked as data in in src/constants/productData -> products
<br/>
For remaining banknotes and coins will be mocked as data insrc/constants/moneyData -> moneyRemaining
