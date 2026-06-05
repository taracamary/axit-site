import './form.scss';

const Form = () => {
  return (
    <form className="form" method="post" action="/form">
      <label className="visually-hidden" htmlFor="name">Name:</label>
      <input className="form__input" id="name" placeholder="Name" type="text" />

      <label className="visually-hidden" htmlFor="email">Email:</label>
      <input className="form__input" id="email" placeholder="Email" type="email" />

      <label className="visually-hidden" htmlFor="password">Password:</label>
      <input className="form__input" id="password" placeholder="Password" type="password" />

      <label className="visually-hidden" htmlFor="message">Message:</label>
      <textarea className="form__textarea" id="message" placeholder="Message"></textarea>

      <button className="button form__button" type="submit">Get started</button>
    </form>
  );
};

export default Form;
