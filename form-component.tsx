import { useMemo } from "react";
import { useSelector } from "react-redux";

import { editorConfigsSelector } from "../../../redux/selectors";
import EditNodeForm from "./edit-node-form";
import simpleInputTypes from "./simple-input-types";

import { FormComponentProps } from "./edit-node-form.interface";

const NullComponent: React.FC = () => null;

const FormComponent: React.FC<FormComponentProps> = ({ type, ...props }) => {
  const configs = useSelector(editorConfigsSelector);

  const Component = useMemo(() => {
    const componentConfig = configs[type];
    if (componentConfig) {
      return EditNodeForm;
    }

    return simpleInputTypes[type] ?? NullComponent;
  }, [configs, type]);

  return <Component type={type} {...props} />;
};

export default FormComponent;
