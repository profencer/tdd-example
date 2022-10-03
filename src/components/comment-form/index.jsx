import React from 'react';

export const CommentForm = () => {
  return (
    <form>
      <div>
        <textarea data-testid="comment"></textarea>
      </div>
      <div>
        <label htmlFor="name-input">Name</label>
        <input id="name-input"></input>
      </div>
      <button>Submit</button>
    </form>
  );
}

