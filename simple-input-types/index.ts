import {
  AutoComplete,
  Checkbox,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Rate,
  Select,
  Slider,
  Switch,
  TimePicker,
} from "antd";

import File from "./file";
import ImagePicker from "./image-picker";
import IngredientList from "./ingredient-list";
import ReferencedByIngredientList from "./referenced-by-ingredient-list";
import ReferencedBySkillList from "./referenced-by-skill-list";
import ReferencedByStepList from "./referenced-by-step-list";
import ReferencedByTimerList from "./referenced-by-timer-list";
import SkillList from "./skill-list";
import StepList from "./step-list";
import TimerList from "./timer-list";
import withEditor from "./with-editor";

export type InputTypeKeys = keyof typeof inputTypesMap;
export type SimpleInputTypes = {
  InputTypeKeys?: React.FC;
};

const inputTypesMap = {
  autoComplete: AutoComplete,
  checkbox: Checkbox,
  datePicker: DatePicker,
  file: File,
  imagePicker: ImagePicker,
  text: Input,
  numeric: InputNumber,
  radio: Radio,
  rate: Rate,
  dropdown: Select,
  slider: Slider,
  switch: Switch,
  timePicker: TimePicker,
  ingredientList: IngredientList,
  referencedByIngredientList: ReferencedByIngredientList,
  referencedBySkillList: ReferencedBySkillList,
  referencedByStepList: ReferencedByStepList,
  referencedByTimerList: ReferencedByTimerList,
  skillList: SkillList,
  stepList: StepList,
  timerList: TimerList,
  url: Input,
};

const simpleInputTypes = Object.entries(inputTypesMap).reduce<SimpleInputTypes>(
  (acc, [name, component]) => ({ ...acc, [name]: withEditor(component, name) }),
  {}
);

export default simpleInputTypes;
