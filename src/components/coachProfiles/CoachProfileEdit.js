import {
  Edit,
  SimpleForm,
  TextInput,
  SelectInput,
  ArrayInput,
  SimpleFormIterator,
  required,
} from "react-admin";

const requireValidate = [required()];

const CoachProfileEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ArrayInput source="sportTypes" label="Вид спорта">
        <SimpleFormIterator>
          <TextInput validate={requireValidate} />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="aboutme" label="обо мне" />
      <TextInput source="education" label="Образование" />
      <TextInput source="experience" label="Опыт" />
      <TextInput source="height" label="Рост" />
      <TextInput source="weight" label="Вес" />
      <TextInput source="age" label="Возрасть" />
      <ArrayInput source="aim" label="Цель">
        <SimpleFormIterator>
          <TextInput validate={requireValidate} />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="place" label="Место">
        <SimpleFormIterator>
          <TextInput validate={requireValidate} />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="serviceTypes" label="Услуги">
        <SimpleFormIterator>
          <TextInput validate={requireValidate} />
        </SimpleFormIterator>
      </ArrayInput>
      <SelectInput
        source="coachGender"
        label="Пол тренера"
        choices={[
          { id: "female", name: "female" },
          { id: "male", name: "male" },
        ]}
      />
      <ArrayInput source="submitList" label="Подписки">
        <SimpleFormIterator>
          <TextInput validate={requireValidate} />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default CoachProfileEdit;
