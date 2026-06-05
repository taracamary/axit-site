import { useId } from 'react';
import './form.scss';

const Form = () => {
  const fieldId = useId();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="visually-hidden" htmlFor={`${fieldId}-name`}>Name:</label>
      <input className="form__input" id={`${fieldId}-name`} name="name" placeholder="Name" type="text" />

      <label className="visually-hidden" htmlFor={`${fieldId}-email`}>Email:</label>
      <input className="form__input" id={`${fieldId}-email`} name="email" placeholder="Email" type="email" />

      <label className="visually-hidden" htmlFor={`${fieldId}-password`}>Password:</label>
      <input className="form__input" id={`${fieldId}-password`} name="password" placeholder="Password" type="password" />

      <label className="visually-hidden" htmlFor={`${fieldId}-message`}>Message:</label>
      <textarea className="form__textarea" id={`${fieldId}-message`} name="message" placeholder="Message"></textarea>

      <button className="button form__button" type="submit">Get started</button>
    </form>
  );
};

export default Form;
