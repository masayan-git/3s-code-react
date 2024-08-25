import { type FC } from "react";
import type {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseFormRegister,
} from "react-hook-form";

import styles from "./index.module.scss";

interface ContactFieldProps {
  label: string;
  value?: string;
  register?: UseFormRegister<FieldValues>;
  isTextarea?: boolean;
  name: string;
  type?: "text" | "email" | "tel" | "number";
  options?: FieldValues;
  placeholder?: string;
  errors?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
}

const ContactField: FC<ContactFieldProps> = ({
  label,
  value,
  register,
  isTextarea,
  name,
  type,
  errors,
  options,
  placeholder,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.labelArea}>
        <label className={styles.label}>
          {label}
          {options?.required && <span className={styles.required}>必須</span>}
        </label>
      </div>
      {value ? (
        <p className={styles.confirmText}>{value}</p>
      ) : isTextarea && register ? (
        <>
          <textarea
            rows={15}
            className={styles.textarea}
            placeholder={placeholder}
            {...register(name, options)}
          />
        </>
      ) : register ? (
        <input
          className={styles.input}
          type={type || "text"}
          placeholder={placeholder ? placeholder : undefined}
          {...register(name, options)}
        />
      ) : null}
      {errors?.message && (
        <p className={styles.error}>
          *{typeof errors.message === "string" ? errors.message : ""}
        </p>
      )}
    </div>
  );
};

export default ContactField;
