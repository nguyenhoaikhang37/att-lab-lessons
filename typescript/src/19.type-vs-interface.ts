// =========TYPE=========
type InputOnChange = (newValue: InputValue) => void;

type InputValue = string;

type InputType = "text" | "email";

export type InputProps = {
  type: InputType;
  value: InputValue;
  onChange: InputOnChange;
};

// =========INTERFACE=========
export interface InputProps {
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
}
