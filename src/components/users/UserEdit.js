import { Edit, SimpleForm, TextInput, SelectInput } from "react-admin";

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" label="Имя" />
      <TextInput source="email" label="email" />
      {/* <TextInput source="role" label="Роль" /> */}
      <SelectInput
        source="role"
        label="Роль"
        choices={[
          { id: "trainer", name: "trainer" },
          { id: "user", name: "user" },
          { id: "admin", name: "admin" },
        ]}
      />
      <TextInput source="phone" label="Телефон" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
