import { useMemo, useCallback } from "react";
import { useSelector } from "react-redux";

import {
  activeFormSelector,
  editorConfigsSelector,
  nodeMapSelector,
} from "@redux/selectors";
import FormComponent from "./form-component";

import { EditNodeFormProps } from "./edit-node-form.interface";

import css from "./index.module.scss";

const EditNodeForm: React.FC<EditNodeFormProps> = ({
  type,
  modifies: baseModifies,
  editProps: baseEditProps,
}) => {
  const activeForm = useSelector(activeFormSelector);
  const configs = useSelector(editorConfigsSelector);
  const nodeMap = useSelector(nodeMapSelector);

  const config = useMemo(
    () =>
      configs[type]?.[activeForm?.configIndex ?? 0]?.(
        baseModifies.nodeId,
        nodeMap
      ) ?? [],
    [baseModifies.nodeId, configs, type, activeForm, nodeMap]
  );

  const transformModifies = useCallback(
    (modifies) => ({
      ...modifies,
      propPath: !modifies.propPath
        ? []
        : Array.isArray(modifies.propPath)
        ? modifies.propPath
        : [modifies.propPath.toString?.()],
    }),
    []
  );

  return (
    <div style={baseEditProps.style} className={css.nodeForm}>
      {config.map(({ type, modifies, editProps }, idx) => (
        <FormComponent
          key={idx}
          type={type}
          modifies={transformModifies(modifies)}
          editProps={editProps}
        />
      ))}
    </div>
  );
};

export default EditNodeForm;
