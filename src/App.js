import { Admin, fetchUtils, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import UserList from "./components/users/UserList";
import UserEdit from "./components/users/UserEdit";
import UserappList from "./components/userapps/UserappList";
import authProvider from "./components/providers/authProvider";
import UserappEdit from "./components/userapps/UserappEdit";
import { Urls } from "./environment";
import CoachProfileList from "./components/coachProfiles/coachProfileList";
import CoachProfileEdit from "./components/coachProfiles/CoachProfileEdit";

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const access_token = JSON.parse(localStorage.getItem("auth"));
  options.headers.set("Authorization", `Bearer ${access_token}`);
  return fetchUtils.fetchJson(url, options);
};

function App() {
  return (
    <Admin
      dataProvider={restProvider(Urls.server, httpClient)}
      authProvider={authProvider}
    >
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        options={{ label: "Пользователи" }}
      />
      <Resource
        name="userapps"
        list={UserappList}
        edit={UserappEdit}
        options={{ label: "Заявки" }}
      />
      <Resource
        name="coach-profiles"
        list={CoachProfileList}
        edit={CoachProfileEdit}
        options={{ label: "Профиль тренера" }}
      />
    </Admin>
  );
}

export default App;
