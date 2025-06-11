# 📝 BlogApp Backend

This is the backend API for a basic Blog Application built using **Node.js**, **Express**, and **MongoDB**. It supports CRUD operations for posts, comments, likes, and user interactions.

---

## 🚀 Features

- Create, read blog posts
- Add and remove comments on posts
- Like and unlike posts
- MongoDB for persistent storage
- Organized controller-service architecture

---

## 📁 Project Structure

```
BlogAppBackend/
├── controllers/
│   ├── commentController.js
│   ├── likeController.js
│   └── postController.js
├── models/
│   ├── commentModel.js
│   ├── likeModel.js
│   └── postModel.js
├── routes/
│   └── blog.js
├── config/
│   └── database.js
├── .env
├── .gitignore
├── index.js
└── package.json
```

---

## 🧑‍💻 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB** with **Mongoose**
- **dotenv** for environment configuration
- **Postman** for API testing

---

## ⚙️ Installation

### 1. Clone the repository
```bash
git clone https://github.com/anishbhujbal7/BlogAppBackend.git
cd BlogAppBackend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env` file in the root directory and add:

```env
PORT=3000
MONGODB_URL=your_mongo_db_connection_string
```

### 4. Start the server
```bash
npm run dev
```

---

## 📚 API Endpoints

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post
- `GET /api/posts/:id` - Get a specific post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

### Comments
- `POST /api/posts/:id/comments` - Add comment to a post
- `DELETE /api/comments/:id` - Delete a comment

### Likes
- `POST /api/posts/:id/like` - Like a post
- `DELETE /api/posts/:id/unlike` - Unlike a post

---

## 🔧 Usage

1. Make sure MongoDB is running locally or use a cloud MongoDB service
2. Update the `MONGODB_URL` in your `.env` file
3. Start the server using `npm run dev`
4. Use Postman or any API client to test the endpoints
5. The server will run on `http://localhost:3000` by default

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👨‍💻 Author

**Anish Bhujbal**
- GitHub: [@anishbhujbal7](https://github.com/anishbhujbal7)

---

## 📞 Support

If you have any questions or need help, feel free to open an issue or contact me directly.
