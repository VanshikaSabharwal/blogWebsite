# blogWebsite

A simple, lightweight blogging platform built with **Node.js**, **Express**, and **EJS**. It lets you view, create, delete, and search blog posts—all without a database (posts are stored in memory for demo purposes).

---

## Features

- **Home page** – Lists all blog posts.
- **View post** – Detailed view of a single post.
- **Create post** – Form to add a new blog entry.
- **Delete post** – Remove a post directly from the UI.
- **Search** – Filter posts by title keyword.
- **Session handling** – Basic session setup with `express‑session`.
- **Responsive UI** – Minimal styling via `public/style.css`.
- **Modular views** – Header & footer partials for DRY templates.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Runtime | **Node.js** (v14+) |
| Server | **Express** |
| Templating | **EJS** |
| Session | **express-session** |
| Body parsing | **body-parser** (via `express.urlencoded`) |
| Styling | Plain **CSS** |
| Module system | ES Modules (`"type": "module"` in `package.json`) |

---

## Prerequisites

- **Node.js** (>= 14) and **npm** installed.  
  Verify with:

```bash
node -v
npm -v
```

---

## Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/blogWebsite.git
cd blogWebsite
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the server**

```bash
node index.js
```

The server will start on **port 660**:

```
Listening to server at port 660
```

4. **Open in browser**

Navigate to `http://localhost:660` to view the blog.

---

## Usage

| Route | Method | Description |
|-------|--------|-------------|
| `/` | GET | Home page – displays all posts |
| `/post/:id` | GET | View a single post |
| `/new` | GET | Render the “Create New Post” form |
| `/create` | POST | Submit new post (title & content) |
| `/post/:id/delete` | POST | Delete a post |
| `/search?q=keyword` | GET | Search posts by title (case‑insensitive) |

### Example: Creating a Post

1. Click **New Post** (or go to `/new`).
2. Fill in *Title* and *Content*.
3. Submit – you’ll be redirected to the home page where the new post appears.

### Example: Searching

Visit `/search?q=first` (or use the search box on the UI) to see posts whose titles contain “first”.

---

## Project Structure

```
blogWebsite/
├─ .gitignore
├─ index.js               # Main server file
├─ package.json
├─ package-lock.json
├─ public/
│   └─ style.css          # Global stylesheet
└─ views/
    ├─ blog.ejs           # Home page (list of posts)
    ├─ post.ejs           # Single post view
    ├─ new.ejs            # New post form
    ├─ search.ejs         # Search results page
    └─ partials/
        ├─ header.ejs     # Site header (navigation)
        └─ footer.ejs     # Site footer
```

- **`index.js`** – Sets up Express, session middleware, routes, and in‑memory post storage.
- **`views/*.ejs`** – EJS templates for rendering HTML.
- **`public/style.css`** – Basic styling for layout and typography.

---

## Contributing

Contributions are welcome! Follow these steps:

1. **Fork** the repository.
2. **Create a feature branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit** your changes with clear messages.
4. **Push** to your fork:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a **Pull Request** against the `main` branch.

Please ensure your code follows existing style conventions and that any new functionality is documented.

---

## License

This project is licensed under the **ISC License** – see the `LICENSE` file for details.