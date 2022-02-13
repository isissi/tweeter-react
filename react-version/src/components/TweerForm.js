import React from 'react';

function TweetForm() {


  const placeHolder = 'What are you humming about?';
  const characterLimit = 140;

  return(
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit = {(event) => {
        event.preventDefault();
      }}>
        <textarea className="form__textarea" name="text" placeholder={placeHolder}></textarea>
        <input type="submit" value="Tweet" className="form__input" onClick = {(event) => {
        event.preventDefault();
      }}/>
        <span className="form__counter">{characterLimit}</span>
      </form>
    </section>
    );
}

export default TweetForm;