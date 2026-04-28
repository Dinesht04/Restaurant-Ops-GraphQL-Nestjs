# Restaurant-Ops System - Slooze Backend Challenge

A role-based food ordering backend designed with **NestJS**, **GraphQL**, and **Prisma**. This system implements granular access control (RBAC) and a relational access model to restrict operations based on the user's assigned country.

## 🚀 Features

### 🔐 Role-Based Access Control (RBAC)
| Feature | Admin | Manager | Member |
| :--- | :---: | :---: | :---: |
| View Restaurants & Menus | ✅ | ✅ | ✅ |
| Create Order (Add Items) | ✅ | ✅ | ✅ |
| Checkout & Payment | ✅ | ✅ | ❌ |
| Cancel an Order | ✅ | ✅ | ❌ |
| Manage Payment Methods | ✅ | ❌ | ❌ |


---

## 🛠 Tech Stack

- **Framework:** NestJS (Node.js)
- **API:** GraphQL (Code-first)
- **ORM:** Prisma
- **Auth:** JWT
- **Database:** SQLite
- **Language:** TypeScript

---

## 🏁 Getting Started

### Prerequisites
- Node.js (v18+)
- Yarn or NPM

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Dinesht04/Restaurant-Ops-GraphQL-Nestjs
   ```
2. **Install dependencies**
   ```bash
   $ yarn install
   ```
3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="your_complex_secret_here"
   ```

4. **Database Migration**
   Initialize your SQLite database and generate the Prisma client:
   ```bash
   $ npx prisma migrate dev --name init
   ```

---

## 🏃 Running the App

```bash
$ yarn run start:dev
```

Once running, you can access the **GraphQL Playground** at `http://localhost:3000/graphql`.


---

## 📁 Project Structure

Follows nestjs modular architecture

* `src/auth` - Authentication logic and Guards for RBAC/Country checks.
* `src/restaurants` - Restaurant and Menu management.
* `src/orders` - Order processing and state management.
* `src/payments` - Payment method logic (Admin restricted).
* `prisma/schema.prisma` - Relational data models and SQLite configuration.

---
