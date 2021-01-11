import {
  ArrayInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ArrayInput source="sportTypes" label="Вид спорта">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="aim" label="Цель">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="place" label="Место">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="serviceTypes" label="Услуги">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
      <TextInput source="coachGender" label="Пол тренера" />
      <TextInput source="equipments" label="Оборудование дома" />
      <TextInput source="priceMax" label="Стоимость Макс." />
      <TextInput source="priceMin" label="Стоимость Мин." />
      <TextInput source="healthIssue" label="Мед. противопоказания" />
      <TextInput source="coment" label="Коментарий" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
