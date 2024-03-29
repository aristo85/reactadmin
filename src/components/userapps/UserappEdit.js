import {
  ArrayInput,
  Edit,
  required,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const requireValidate = [required()];

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ArrayInput source="sportTypes" label="Вид спорта">
        <SimpleFormIterator>
          <TextInput validate={requireValidate} />
        </SimpleFormIterator>
      </ArrayInput>
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
          { id: "any", name: "any" },
        ]}
      />
      <TextInput source="equipments" label="Оборудование дома" />
      <TextInput source="priceMax" label="Стоимость Макс." />
      <TextInput source="priceMin" label="Стоимость Мин." />
      <TextInput source="healthIssue" label="Мед. противопоказания" />
      <TextInput source="coment" label="Коментарий" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
