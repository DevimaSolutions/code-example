import { FormItemProps } from "antd";
import { InputTypeKeys } from "./simple-input-types";

export interface Modifies {
  nodeId?: number;
  propPath: string | string[];
  refBy?: { path: string | string[]; key: string };
}

export interface FormComponentProps {
  type: InputTypeKeys;
  modifies: Modifies;
  editProps: FormItemProps;
}

export interface EditNodeFormProps extends FormComponentProps {}
