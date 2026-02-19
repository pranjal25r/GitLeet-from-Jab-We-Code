# 🚀 GitLeet – from Jab We Code

> *“Main apni favorite hoon.”*
> And now… your **code** can be your GitHub’s favorite too. 😌

**GitLeet – from Jab We Code** is a Chrome Extension that automatically pushes your accepted LeetCode solutions to your GitHub repository — so you never forget to maintain your coding streak again.

Inspired by the movie *Jab We Met* and the iconic character **Geet**, this project adds a little Bollywood charm to your daily LeetCode grind. 🎬💻

---

## ✨ Features

* ✅ Detects **Accepted** submissions on LeetCode
* 📤 Automatically pushes code to your GitHub repository
* 🗂 Creates files named after the problem title
* 🔐 Uses your GitHub Personal Access Token securely
* 📊 Helps maintain a consistent GitHub contribution streak
* 🧠 Keeps your DSA journey organized

---

## 🛠 Tech Stack

* JavaScript
* Chrome Extension APIs
* GitHub REST API
* LeetCode DOM Monitoring (MutationObserver)

---

## 📦 How It Works

1. You solve a problem on LeetCode.
2. Once the submission shows **“Accepted”**,
3. The extension:

   * Extracts the problem title
   * Extracts your submitted code
   * Pushes it to your GitHub repository
4. Your solution is saved automatically 🚀

No manual copy-paste. No excuses.

---

## 🔧 Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/pranjal25r/GitLeet-from-Jab-We-Code.git
```

### 2️⃣ Load as Chrome Extension

1. Go to `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select the project folder

---

## 🔑 Setup GitHub Token

1. Go to GitHub → Settings → Developer Settings
2. Generate a **Personal Access Token** Tokens (classic)
3. Give `repo` permissions
4. Copy the token
5. Paste it inside the extension popup along with:

   * GitHub Username
   * Repository Name

---

## 📁 Example Output

If you solve:

```
Two Sum
```

It will create:

```
Two-Sum.cpp
```

Inside your repository automatically.

---

## 📌 Why This Project?

As a student preparing for placements and solving DSA problems daily, maintaining GitHub consistency matters.

This extension:

* Automates documentation
* Maintains coding history
* Builds a clean DSA portfolio
* Keeps your contribution graph active

Because consistency > motivation.

---

## 🎥 Inspiration

This project name is inspired by the movie *Jab We Met* —
but here, we don’t just meet…

We code.
We commit.
We push. 😎

---

## 🤝 Contributing

Feel free to fork the repository and improve it.

Some possible enhancements:

* Language detection
* Folder structure by difficulty
* Commit messages with timestamps
* README auto-update with solved count
* Support for multiple coding platforms

---

## ⭐ If You Like It

Give it a ⭐ on GitHub
and keep coding like Geet would — confidently.
