// ! Bu ödevde aslında sadece konsola yazdırmamız gerekiyordu. Ama daha güzel bir şekilde olması adına ekrana da yazdırmayı tercih ettim.

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  // * 2 adet useState tanımladım. İlkinde inputa yazılan kontrol ediliyor. İkincisinde butona basıldığında inputtaki değer ikinci useStatete atanıyor. Bu sayede veriyi çekebiliyorum.

  const [id, setId] = useState(1);
  const [deneme, setDeneme] = useState(1);

  const [users, setUsers] = useState({});
  const [posts, setPosts] = useState({});

  useEffect(() => {
    async function deneme(user_id) {
      // * API'de her kullanıcının 10'ar postu bulunmaktadır. O yüzden consola ve ekrana seçilen kullanıcının ilk postunu yazdırmak istiyorum. Eğer ki number yerine user_id yazarsak users'da 2. kullanıcıyı alırken postta ilk kullacının 2.postunu almış oluruz. O yüzden bir mantık hatası olur. Bu sebeple number ögesi tanımladım.

      let number;
      if (user_id === "1") {
        number = 1;
      } else {
        number = (parseInt(user_id) - 1) * 10 + 1;
      }

      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + user_id
      );
      const { data: posts } = await axios(
        "https://jsonplaceholder.typicode.com/posts/" + number
      );

      setUsers(users);
      setPosts(posts);

      // * JSON.stringify yapma sebebim kodun daha anlaşılır bir şekilde görülmesi içindir.

      console.log("USERS", JSON.stringify(users, null, 2));
      console.log("POSTS", JSON.stringify(posts, null, 2));
    }
    deneme(id);
  }, [id]);

  function handleClick() {
    setId(deneme);
  }

  return (
    <div className="input-section">
      <label>Enter the ID value</label>
      <input
        type="text"
        value={deneme}
        onChange={(e) => setDeneme(e.target.value)}
      />
      <button onClick={handleClick}>Show</button>

      <div className="object">
        <pre>USERS {JSON.stringify(users, null, 2)}</pre>
        <br />
        <pre>POSTS {JSON.stringify(posts, null, 2)}</pre>
      </div>
    </div>
  );
}

export default App;
