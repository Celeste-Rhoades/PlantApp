import { useState } from "react";
import Field from "./Field";

const AuthForm = props => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });
  const [loading, setLoading] = useState(false);
  return (
    <form
      className="bg-white border rounded-lg border-slate-200 m-4 p-4 font-lato"
      onSubmit={async e => {
        e.preventDefault();
        setLoading(true);
        await onSubmit(values);
        setLoading(false);
      }}
    >
      {fields.map(field => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          values={values[field.label]}
          onChange={e => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="w-full text-white bg-emerald-700 rounded-lg py-2 mt-4 relative">
        {submitButtonLabel}
        {loading && (
          <div className="absolute top-0 right-8 flex h-full items-center">
            <i className="fa-solid fa-spinner text-green-300 text-xl animate-spin"></i>
          </div>
        )}
      </button>
    </form>
  );
};
export default AuthForm;
