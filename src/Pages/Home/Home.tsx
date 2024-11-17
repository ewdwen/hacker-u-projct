import { useEffect } from "react";
import { TCard } from "../../Types/TCard";
import { Card } from "flowbite-react";
import { FaHeart } from "react-icons/fa";
import useCards from "../../Hooks/useCards";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Home = () => {
  const { user, searchCards, isLikedCard, getData, likeUnlikeCard } = useCards();

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-start gap-4 p-4">
      <h1 className="text-2xl text-center">Home Page</h1>
      <p className="text-lg text-center">Welcome Home!</p>


      <div className="flex flex-wrap justify-center w-full gap-4 sm:w-11/12 lg:w-3/5">
        {searchCards()!.map((item: TCard) => {
          return (
            <Card
              key={item._id}
              className="w-full sm:w-[48%] lg:w-[30%] p-2 shadow-md"
            >
              <LazyLoadImage
                className="h-[200px] object-cover w-full rounded-lg"
                src={item.image.url}
                alt={item.image.alt}
                effect="blur"
                wrapperProps={{
                  style: { transitionDelay: "300ms" },
                }}
              />

              <h1 className="mt-2 font-bold text-center">{item.title}</h1>
              <h3 className="text-center">{item.subtitle}</h3>
              <p className="text-center">{item.description}</p>
              <hr />
              {user && user.user && (
                <FaHeart
                  size={20}
                  className="m-auto mt-2 cursor-pointer"
                  color={isLikedCard(item) ? "red" : "black"}
                  onClick={() => likeUnlikeCard(item)}
                />
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
