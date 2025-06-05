import { useEffect } from "react";
import checkAuth from "../../API/checkAuth";

const Home = () => {
  useEffect(() => {
    const verify = async () => {
      const isAuthenticated = await checkAuth();
      if (isAuthenticated) {
        console.log("user is AUTHENTICATED");
      } else {
        console.log("USER IS NOT AUTHENTICATED");
        // Redirect to login or handle unauthenticated state
      }
    };

    verify();
  }, []);

  return (
    <div className="w-[80%] flex items-center justify-center py-10 my-20">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
        expedita dolore voluptatum neque in ducimus ea nam vero explicabo
        reiciendis, hic tenetur numquam quam qui eos saepe consequuntur
        voluptas, tempora inventore veniam. Nihil provident a neque quos velit,
        aspernatur adipisci tempora dolorum dicta cum inventore, praesentium
        quidem iusto nemo nobis.
      </h1>
    </div>
  );
};

export default Home;
