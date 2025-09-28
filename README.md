# I Love You ❤️ — Click Surprise

A tiny, cute webpage you can host on **GitHub Pages**. When someone clicks the button, a shower of hearts floats up and a grid fills with many _"i love you ❤️"_ messages.

## ✨ Features
- Clean, responsive design with soft gradients
- Floating heart animations (respects `prefers-reduced-motion`)
- Grid of love messages that expands on click
- **URL personalization** via query params

## 🔧 Personalize via URL
- `?to=Nama` → changes the greeting name
- `?count=150` → how many messages get added per click (1..500)
- `?text=Kalimat%20custom%20💘` → custom message text

**Examples**
```
https://your-username.github.io/i-love-you-click/?to=Yukina&count=150
https://your-username.github.io/i-love-you-click/?to=Kiki&text=aku%20sayang%20kamu%20%F0%9F%92%96
```

## 🚀 Deploy to GitHub Pages
1. Create a new repo named **`i-love-you-click`** on your GitHub.
2. Upload these files (or push via git).
3. In the repo settings → **Pages** → Source: **Deploy from a branch**, Branch: **main** (/**root**).
4. Your site will be live at `https://your-username.github.io/i-love-you-click/`.

## ▶️ Local preview
Just open `index.html` in your browser. No build step.

## 📝 License
MIT — feel free to remix and share the love.
