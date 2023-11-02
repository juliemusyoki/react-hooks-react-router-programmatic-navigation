import React from "react";

function Home({ isLoggedIn }) {
  return (
    <div>
      <h1>Home Page</h1>
      {isLoggedIn ? (
        <p>You are logged in!</p>
      ) : (
        <p>Please log in to access this page.</p>
      )}
    </div>
  );
}

export default Home;
