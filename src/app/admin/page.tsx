// pages/admin.js
import { addDoc, collection } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const handlePost = async () => {
    try {
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        createdAt: new Date(),
      });
      // Optionally reset the fields or redirect
      setTitle("");
      setContent("");
      alert("Blog post added successfully!");
      // Redirect to the blog page
      router.push("/blog"); // Adjust the path to your blog page
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div>
      <h1>Admin Page</h1>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handlePost}>Post</button>
    </div>
  );
};

export default Admin;
