// pages/tutorial.js
import Link from "next/link";

export default function Tutorial() {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Left Sidebar */}
      <div
        style={{ width: "20%", backgroundColor: "#f0f0f0", padding: "20px" }}
      >
        <h2>Topics</h2>
        <ul>
          <li>
            <Link href="#topic1">Introduction to Python</Link>
          </li>
          <li>
            <Link href="#topic2">Variables and Data Types</Link>
          </li>
          <li>
            <Link href="#topic3">Control Flow</Link>
          </li>
          <li>
            <Link href="#topic4">Functions</Link>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div style={{ flex: 1, padding: "20px" }}>
        <h1>Tutorial Details</h1>

        <section id="topic1">
          <h2>Introduction to Python</h2>
          <p>Python is a high-level, interpreted programming language...</p>
        </section>

        <section id="topic2">
          <h2>Variables and Data Types</h2>
          <p>Variables in Python are used to store data...</p>
        </section>

        <section id="topic3">
          <h2>Control Flow</h2>
          <p>
            Control flow refers to the order in which individual statements...
          </p>
        </section>

        <section id="topic4">
          <h2>Functions</h2>
          <p>Functions in Python are blocks of reusable code...</p>
        </section>
      </div>
    </div>
  );
}
