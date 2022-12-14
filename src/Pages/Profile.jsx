import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Profile.css";
import Loading from "../Components/Loading";

const Profile = () => {
  const params = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const instance = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const getDataById = async () => {
    setIsLoading(true);
    const response = await instance.get(`/posts/${params.id}`);
    setData(response.data.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getDataById(params.id);
  }, [params.id]);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="profileContainer">
          <div className="mainContainer">
            <header>
              <div className="partOne">
                <img
                  className="zuragProfile"
                  src={data.image}
                  alt={data.image}
                />
              </div>
              <div className="partTwo">
                <div className="aaaa">
                  <span>{data.username}</span>
                  <button>Following</button>
                  <button>Message</button>
                  <button>
                    <img
                      className="zurag"
                      src="https://cdn-icons-png.flaticon.com/512/748/748137.png"
                      alt=".!.."
                    />
                  </button>
                </div>
                <div className="aaab">
                  <span>
                    <strong>{data.postedSince}</strong> posts
                  </span>
                  <span>
                    <strong>{data.postedSince}K</strong> followers
                  </span>
                  <span>
                    <strong>{data.postedSince}K</strong> following
                  </span>
                </div>
                <div>
                  <span>{data.username}</span>
                  <span>{data.title}</span>
                </div>
              </div>
            </header>
            <hr />
            <div className="posts">
              
            </div>
            <footer>
              <span id="damnTextsTwo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                ipsum libero
              </span>
              <span id="damnTexts">?? 2022 INSTAGRAM FROM PINECONE</span>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};
export default Profile;
