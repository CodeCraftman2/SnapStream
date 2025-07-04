# 🎥 SnapStream

**Snap Stream** is a modern, full-stack web application that allows users to **record their screens**, **upload videos**, and **share them publicly or privately**. Built using **Next.js**, this app emphasizes seamless user experience, fast performance, and intuitive UI. Whether you're creating tutorials, walkthroughs, or just want to capture a moment on your screen, ScreenShare makes the process simple and efficient.

---


## 🚀 Features

- 🎬 **Screen Recording**: Record your screen directly from the browser using native APIs.
- 📤 **Video Uploads**: Upload recorded videos to a cloud database via Xata.
- 📺 **Video Playback**: Watch videos with a custom player that supports full-screen and seek.
- 🧑‍💼 **User Authentication**: Secure login/logout with NextAuth (OAuth-ready).
- 🔐 **Personal Profiles**: View your uploaded videos and recordings in your own dashboard.
- 🌍 **Public Sharing**: Each video has a unique shareable URL for easy access and sharing.
- ⚙️ **Responsive Design**: Optimized for desktop, tablet, and mobile viewing.

---

## 🛠️ Tech Stack

| Layer         | Tech Stack                            |
| ------------- | ------------------------------------- |
| Frontend      | Next.js, TypeScript, Tailwind CSS     |
| Backend       | Next.js API Routes, Server Actions    |
| Authentication| NextAuth (Session-based)              |
| Database      | Xata (via Drizzle ORM)                |
| UI Components | Custom-built + React-based Components |
| Hosting       | Vercel                                |

---

---

👉 **Authentication**: Secure user sign-up and sign-in with Better-Auth & Google.  

👉 **Screen Recording**: Capture your screen directly within the app for seamless video recording.  

👉 **Video Uploading**: Effortlessly upload videos with a simple interface, supporting both public and private settings.  

👉 **AI Transcripts**: Get AI-generated transcripts for uploaded videos, making content more accessible and searchable.  

👉 **Privacy Control**: Toggle video visibility between public and private, ensuring full control over your content.  

👉 **Arcjet Integration**: Easily implement bot protection, rate limiting, email validation, and attack protection with minimal code, enhancing your app's security.

👉 **Metadata**: Access video metadata, including unique video ID and URL, for easy sharing and referencing.  

👉 **Search Functionality**: Find your videos quickly with an intuitive search bar, streamlining navigation.  

👉 **Share Videos**: Share videos via unique links for easy access and distribution.  

👉 **Modern UI/UX**: Clean, responsive design built with Tailwind CSS for a sleek user experience.  

👉 **Database Integration**: Utilize Xata for real-time, scalable database management.  

👉 **Type-Safe Queries**: Benefit from Drizzle ORM’s type-safe queries for secure and efficient database interactions.  

👉 **Scalable Tech Stack**: Built with Next.js for a fast, production-ready web application that scales seamlessly.  

👉 **Code Reusability**: Leverage reusable components and a modular codebase for efficient development.  

👉 **Cross-Device Compatibility**: Fully responsive design that works seamlessly across all devices.  

And many more, including enhanced security and optimized video performance!


---

```env
# Next.js
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# [Xata] Configuration used by the CLI and the SDK
# Make sure your framework/tooling loads this file on startup to have it available for the SDK
XATA_API_KEY=
DATABASE_URL_POSTGRES=

# Google
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# NextAuth
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000

# Bunny
BUNNY_STORAGE_ACCESS_KEY=
BUNNY_LIBRARY_ID=
BUNNY_STREAM_ACCESS_KEY=

#ArcJet
ARCJET_API_KEY=
XATA_API_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on: [Better-Auth](https://www.better-auth.com), [Google Cloud](https://console.cloud.google.com), [Bunny.net](https://jsm.dev/snapcast-bunny), [Xata.io](https://xata.io), [Arcjet](https://jsm.dev/snapcast-arcjet).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.


