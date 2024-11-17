import { useEffect } from "react";
import { TCard } from "../../Types/TCard";
import { Card } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaTrash } from "react-icons/fa";
import { PiPlus } from "react-icons/pi";
import useCards from "../../Hooks/useCards";
import { BsPencilSquare } from "react-icons/bs";

const MyCards = () => {
  const nav = useNavigate();
  const {
    user,
    searchCards,
    isLikedCard,
    navToCard,
    getMyCards,
    likeUnlikeCard,
    deleteCard,
  } = useCards();

  const navToCreate = () => {
    nav("/create-card");
  };

  useEffect(() => {
    getMyCards();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start gap-2 p-4">
      <h1 className="text-2xl text-center">My Cards</h1>
      <p className="text-lg text-center">These cards were created by the user</p>

      <div className="flex flex-wrap w-full md:w-3/5 gap-4 justify-center">
        {searchCards()!.map((item: TCard) => {
          return (
            <Card key={item._id} className="w-full sm:w-[48%] md:w-[30%] m-auto">
              <img
                onClick={() => navToCard(item._id)}
                src={item.image.url}
                alt={item.image.alt}
                className="h-[200px] object-cover w-full"
              />
              <h1 className="text-center font-bold">{item.title}</h1>
              <h3 className="text-center">{item.subtitle}</h3>
              <p className="text-center">{item.description}</p>
              <hr />
              {user && user.user && (
                <div className="flex justify-around items-center mt-2">
                  <FaHeart
                    size={20}
                    className="cursor-pointer"
                    color={isLikedCard(item) ? "red" : "black"}
                    onClick={() => likeUnlikeCard(item)}
                  />
                  <BsPencilSquare
                    size={20}
                    className="cursor-pointer"
                    onClick={() => nav("/edit-card/" + item._id)}
                  />
                  <FaTrash
                    size={20}
                    className="cursor-pointer"
                    onClick={() => deleteCard(item)}
                  />
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <div className="fixed p-3 rounded-full cursor-pointer right-4 bottom-4 bg-cyan-300 shadow-lg">
        <PiPlus size={20} onClick={navToCreate} />
      </div>
    </div>
  );
};

export default MyCards;
