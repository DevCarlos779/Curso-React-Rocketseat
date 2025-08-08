import { useState } from "react";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import { SideBar } from "./components/SideBar";

const posts = [
  {
    id: 1,

    author: {
      avatarUrl: "https://github.com/codewithmiguel.png",
      name: "Carlos Emanuel",
      role: "Web Developer",
    },

    content: [
      { type: "paragraph", content: "Fala Galera" },
      { type: "paragraph", content: "Acabei de publicar meu novo projeto!" },
      { type: "link", content: '<a href="">carlos.developer/project</a>' },
    ],

    publishedAt: new Date("2025-08-07 07:30:00"),
  },
  {
    id: 2,

    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "Educator Rocketseat",
    },

    content: [
      { type: "paragraph", content: "Fala Galera" },
      { type: "paragraph", content: "Acabei de publicar meu novo projeto!" },
      { type: "link", content: '<a href="">diego.developer/project</a>' },
    ],

    publishedAt: new Date("2025-08-07 09:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}

export default App;
